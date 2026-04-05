import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { PRICING_PLANS, SOCIAL_PLATFORMS, TESTIMONIALS } from '../const';
import type { PricingTier } from '../../../shared/types';

export default function Home() {
  const [selectedTier, setSelectedTier] = useState<PricingTier>('business_start');

  const handleCheckout = async (tier: PricingTier) => {
    try {
      // Call tRPC endpoint to create checkout session
      const response = await fetch('/trpc/stripe.createCheckoutSession', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          input: { pricingTier: tier },
        }),
      });

      const data = await response.json();
      if (data.result?.data?.url) {
        window.location.href = data.result.data.url;
      }
    } catch (error) {
      console.error('Checkout error:', error);
      alert('Failed to initiate checkout. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="section pt-20 md:pt-32">
        <div className="container text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Dominate Social Media.<br />
            <span className="text-blue-600">Grow Your Business.</span>
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Expert social media marketing services designed to increase your
            engagement, build your brand, and drive sales.
          </p>
          <a href="#pricing" className="btn-primary inline-block">
            Get Started Today
          </a>
        </div>
      </section>

      {/* Social Platforms */}
      <section className="section bg-slate-900 py-12">
        <div className="container">
          <h2 className="section-title text-center mb-8">We Manage</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {SOCIAL_PLATFORMS.map((platform) => (
              <div
                key={platform}
                className="bg-slate-800 rounded-lg p-4 text-center hover:bg-slate-700 transition-colors"
              >
                <p className="font-semibold">{platform}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section">
        <div className="container">
          <h2 className="section-title text-center mb-4">Our Services</h2>
          <p className="section-subtitle text-center">
            Comprehensive social media solutions for your business
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Social Media Strategy',
                description:
                  'Customized strategies tailored to your business goals and target audience.',
              },
              {
                title: 'Content Creation',
                description:
                  'High-quality, engaging content that resonates with your followers.',
              },
              {
                title: 'Community Management',
                description:
                  'Professional engagement and management of your social media communities.',
              },
              {
                title: 'Analytics & Reporting',
                description:
                  'Detailed insights into your performance with actionable recommendations.',
              },
              {
                title: 'Paid Advertising',
                description:
                  'Strategic ad campaigns to reach and convert your target audience.',
              },
              {
                title: 'Influencer Outreach',
                description:
                  'Connect with relevant influencers to amplify your brand message.',
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-slate-900 rounded-lg p-6 hover:bg-slate-800 transition-colors"
              >
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="section bg-slate-900">
        <div className="container">
          <h2 className="section-title text-center mb-4">Simple, Transparent Pricing</h2>
          <p className="section-subtitle text-center">
            Choose the plan that fits your business needs
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(PRICING_PLANS).map(([tierId, plan]) => (
              <div
                key={tierId}
                className={`rounded-lg p-8 transition-all ${
                  selectedTier === tierId
                    ? 'bg-blue-600 ring-2 ring-blue-400'
                    : 'bg-slate-800 hover:bg-slate-700'
                }`}
              >
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-sm text-gray-300 mb-4">{plan.description}</p>

                <div className="mb-6">
                  <div className="text-4xl font-bold mb-2">
                    ${plan.monthlyPrice}
                    <span className="text-lg text-gray-400">/month</span>
                  </div>
                  <p className="text-sm text-gray-400">
                    + ${plan.setupFee} one-time setup fee
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handleCheckout(tierId as PricingTier)}
                  className="w-full btn-primary"
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title text-center mb-4">What Our Clients Say</h2>
          <p className="section-subtitle text-center">
            Real results from real businesses
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial, index) => (
              <div key={index} className="bg-slate-900 rounded-lg p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">"{testimonial.text}"</p>
                <p className="text-blue-600 font-semibold">{testimonial.metrics}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Grow Your Business?
          </h2>
          <p className="text-lg mb-8 text-blue-100">
            Join hundreds of businesses that trust NDW Marketing Agency
          </p>
          <a href="#pricing" className="btn bg-white text-blue-600 hover:bg-gray-100">
            View Pricing Plans
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
