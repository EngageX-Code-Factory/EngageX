import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function About() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-white text-center mb-8">About EngageX</h1>
          <p className="text-gray-400 text-center">Learn more about our mission to empower student communities...</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}