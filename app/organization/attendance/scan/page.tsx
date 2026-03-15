"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, QrCode, CheckCircle, XCircle, Camera } from "lucide-react";

type ScanResult = { success: boolean; message: string; student?: string } | null;

const VALID_TOKENS = ["STU001-EVT001", "STU002-EVT001", "STU003-EVT001"];

export default function QRScanPage() {
  const [manualToken, setManualToken] = useState("");
  const [result, setResult] = useState<ScanResult>(null);
  const [scanning, setScanning] = useState(false);

  function validateToken(token: string) {
    setScanning(true);
    setTimeout(() => {
      if (VALID_TOKENS.includes(token.trim())) {
        setResult({ success: true, message: "Attendance marked successfully!", student: "Ashan Perera" });
      } else if (token.trim() === "") {
        setResult({ success: false, message: "Please enter a token." });
      } else {
        setResult({ success: false, message: "Invalid or already used token." });
      }
      setScanning(false);
    }, 600);
  }

  function handleManualSubmit(e: React.FormEvent) {
    e.preventDefault();
    validateToken(manualToken);
  }

  function reset() {
    setResult(null);
    setManualToken("");
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">

      {/* Header */}
      <div className="flex items-center gap-4">
        <Link href="/organization/attendance"
          className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          style={{ color: '#64748b' }}>
          <ArrowLeft size={20} />
        </Link>
        <div>
          <h2 className="text-2xl font-bold" style={{ color: '#0f172a' }}>QR Attendance</h2>
          <p className="text-sm mt-0.5" style={{ color: '#64748b' }}>Scan student QR codes to mark attendance</p>
        </div>
      </div>

      {/* Camera Scan Area */}
      <div className="bg-white rounded-2xl border overflow-hidden" style={{ borderColor: '#e2e8f0' }}>
        <div className="p-6 border-b" style={{ borderColor: '#f1f5f9' }}>
          <h3 className="text-sm font-semibold flex items-center gap-2" style={{ color: '#0f172a' }}>
            <Camera size={16} style={{ color: '#1d4ed8' }} /> Camera Scanner
          </h3>
        </div>

        {/* Scanner placeholder — react-qr-reader will go here */}
        <div
          className="flex flex-col items-center justify-center py-16 px-6"
          style={{ background: '#f8fafc' }}
        >
          <div
            className="w-48 h-48 rounded-2xl flex items-center justify-center mb-4 relative"
            style={{ border: '3px dashed #cbd5e1' }}
          >
            <QrCode size={64} style={{ color: '#cbd5e1' }} />
            {/* Corner markers */}
            <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 rounded-tl" style={{ borderColor: '#1d4ed8' }} />
            <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 rounded-tr" style={{ borderColor: '#1d4ed8' }} />
            <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 rounded-bl" style={{ borderColor: '#1d4ed8' }} />
            <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 rounded-br" style={{ borderColor: '#1d4ed8' }} />
          </div>
          <p className="text-sm font-medium" style={{ color: '#475569' }}>Camera scanner</p>
          <p className="text-xs mt-1 text-center" style={{ color: '#94a3b8' }}>
            Install <code className="bg-gray-100 px-1 rounded">react-qr-reader</code> to enable live scanning
          </p>
        </div>
      </div>

      {/* Manual Token Entry */}
      <div className="bg-white rounded-2xl border p-6" style={{ borderColor: '#e2e8f0' }}>
        <h3 className="text-sm font-semibold mb-4 flex items-center gap-2" style={{ color: '#0f172a' }}>
          <QrCode size={16} style={{ color: '#1d4ed8' }} /> Manual Token Entry
        </h3>
        <form onSubmit={handleManualSubmit} className="flex gap-3">
          <input
            value={manualToken}
            onChange={e => setManualToken(e.target.value)}
            placeholder="Enter QR token (e.g. STU001-EVT001)"
            className="flex-1 px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            style={{ borderColor: '#e2e8f0', color: '#0f172a' }}
          />
          <button
            type="submit"
            disabled={scanning}
            className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90 disabled:opacity-60"
            style={{ background: 'linear-gradient(135deg, #1d4ed8, #3b82f6)' }}
          >
            {scanning ? "Checking..." : "Validate"}
          </button>
        </form>
        <p className="text-xs mt-2" style={{ color: '#94a3b8' }}>
          Try: <code className="bg-gray-100 px-1 rounded">STU001-EVT001</code> for a valid token
        </p>
      </div>

      {/* Result */}
      {result && (
        <div
          className={`rounded-2xl p-6 border flex items-start gap-4`}
          style={{
            background: result.success ? '#f0fdf4' : '#fef2f2',
            borderColor: result.success ? '#bbf7d0' : '#fecaca',
          }}
        >
          {result.success
            ? <CheckCircle size={28} style={{ color: '#16a34a', flexShrink: 0 }} />
            : <XCircle size={28} style={{ color: '#dc2626' }} />
          }
          <div>
            <p className="font-semibold text-base" style={{ color: result.success ? '#15803d' : '#dc2626' }}>
              {result.success ? "Attendance Marked!" : "Validation Failed"}
            </p>
            <p className="text-sm mt-0.5" style={{ color: result.success ? '#166534' : '#b91c1c' }}>
              {result.message}
            </p>
            {result.student && (
              <p className="text-sm font-medium mt-2" style={{ color: '#15803d' }}>
                Student: {result.student}
              </p>
            )}
            <button onClick={reset} className="mt-3 text-xs font-semibold underline" style={{ color: result.success ? '#15803d' : '#b91c1c' }}>
              Scan next →
            </button>
          </div>
        </div>
      )}

    </div>
  );
}