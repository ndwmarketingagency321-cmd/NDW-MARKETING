import { useSearchParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function PaymentSuccess() {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get('session_id');

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="section py-32">
        <div className="container max-w-2xl text-center">
          {/* Success Icon */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-600 rounded-full mb-4">
              <svg
                className="w-10 h-10 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>

          <h1 className="text-4xl font-bold mb-4">Payment Successful!</h1>
          <p className="text-xl text-gray-400 mb-8">
            Thank you for your purchase. Your subscription is now active.
          </p>

          {sessionId && (
            <div className="bg-slate-900 rounded-lg p-6 mb-8">
              <p className="text-sm text-gray-400 mb-2">Session ID</p>
              <p className="text-lg font-mono text-blue-600 break-all">
                {sessionId}
              </p>
            </div>
          )}

          {/* Next Steps */}
          <div className="bg-slate-900 rounded-lg p-8 mb-8 text-left">
            <h2 className="text-2xl font-bold mb-6">What's Next?</h2>
            <ol className="space-y-4">
              <li className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-semibold">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Confirmation Email</h3>
                  <p className="text-gray-400">
                    Check your email for a confirmation and onboarding details.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-semibold">
                    2
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Account Setup</h3>
                  <p className="text-gray-400">
                    We'll reach out to discuss your social media strategy and goals.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-semibold">
                    3
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Campaign Launch</h3>
                  <p className="text-gray-400">
                    Your dedicated team will start working on your social media
                    presence immediately.
                  </p>
                </div>
              </li>
            </ol>
          </div>

          {/* Contact Info */}
          <div className="bg-slate-800 rounded-lg p-6 mb-8">
            <p className="text-gray-400 mb-4">
              Have questions? Our team is here to help!
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a href="mailto:ndwmarketingagency321@gmail.com" className="text-blue-600 hover:text-blue-400">
                ndwmarketingagency321@gmail.com
              </a>
              <span className="text-gray-600">•</span>
              <a href="tel:519-574-1472" className="text-blue-600 hover:text-blue-400">
                519-574-1472
              </a>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link to="/" className="btn-primary">
              Return Home
            </Link>
            <a href="mailto:ndwmarketingagency321@gmail.com" className="btn-secondary">
              Contact Support
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
