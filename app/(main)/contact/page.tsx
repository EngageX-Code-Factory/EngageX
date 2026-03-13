import Navbar from '@/components/main/layout/Navbar';
import Footer from '@/components/main/layout/Footer';

export default function Contact() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-white text-center mb-8">Contact Us</h1>
          <p className="text-gray-400 text-center">Get in touch with our support team...</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}