import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="section py-32">
        <div className="container max-w-2xl text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 text-blue-600">
            404
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Page Not Found</h2>
          <p className="text-xl text-gray-400 mb-8">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>

          <div className="bg-slate-900 rounded-lg p-8 mb-8">
            <p className="text-gray-400 mb-6">
              Let's get you back on track. Here are some helpful links:
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link to="/" className="btn-primary">
                Go Home
              </Link>
              <Link to="/#pricing" className="btn-secondary">
                View Pricing
              </Link>
              <Link to="/about" className="btn-secondary">
                About Us
              </Link>
            </div>
          </div>

          <p className="text-gray-400">
            Need help? <a href="mailto:ndwmarketingagency321@gmail.com" className="text-blue-600 hover:text-blue-400">
              Contact us
            </a>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
