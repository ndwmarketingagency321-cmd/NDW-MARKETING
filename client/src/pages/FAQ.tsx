import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FAQ_ITEMS } from '../const';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="section pt-20 md:pt-32">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            Find answers to common questions about our services, pricing, and
            process.
          </p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="section">
        <div className="container max-w-3xl">
          <div className="space-y-4">
            {FAQ_ITEMS.map((item, index) => (
              <div
                key={index}
                className="bg-slate-900 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-800 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-left">
                    {item.question}
                  </h3>
                  <svg
                    className={`w-6 h-6 text-blue-600 transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </button>

                {openIndex === index && (
                  <div className="px-6 py-4 bg-slate-800 border-t border-slate-700">
                    <p className="text-gray-300">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional FAQ Categories */}
      <section className="section bg-slate-900">
        <div className="container">
          <h2 className="section-title text-center mb-12">Other Common Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                category: 'Pricing & Billing',
                questions: [
                  'Are there any hidden fees?',
                  'Do you offer discounts for annual contracts?',
                  'What payment methods do you accept?',
                ],
              },
              {
                category: 'Services',
                questions: [
                  'Can you manage multiple accounts?',
                  'Do you provide training for our team?',
                  'What tools do you use for management?',
                ],
              },
              {
                category: 'Support',
                questions: [
                  'What are your support hours?',
                  'How quickly do you respond to issues?',
                  'Do you offer emergency support?',
                ],
              },
            ].map((section, index) => (
              <div key={index} className="bg-slate-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-blue-600">
                  {section.category}
                </h3>
                <ul className="space-y-3">
                  {section.questions.map((question, qIndex) => (
                    <li key={qIndex} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-300">{question}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Didn't Find Your Answer?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Our team is here to help. Contact us directly and we'll get back to
            you as soon as possible.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="mailto:ndwmarketingagency321@gmail.com" className="btn-primary">
              Email Us
            </a>
            <a href="tel:519-574-1472" className="btn-secondary">
              Call Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
