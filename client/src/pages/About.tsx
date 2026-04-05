import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="section pt-20 md:pt-32">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About NDW Marketing</h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            We are a dedicated team of social media marketing experts committed to
            helping businesses dominate their social presence and achieve
            measurable growth.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section bg-slate-900">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="text-gray-400 mb-4">
                NDW Marketing Agency was founded with a simple mission: to help
                businesses leverage the power of social media to grow their
                revenue and build lasting customer relationships.
              </p>
              <p className="text-gray-400 mb-4">
                With years of experience in digital marketing and social media
                strategy, our team has helped hundreds of businesses across
                various industries achieve their marketing goals.
              </p>
              <p className="text-gray-400">
                We believe in data-driven strategies, creative excellence, and
                transparent communication with our clients.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg h-96"></div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section">
        <div className="container">
          <h2 className="section-title text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Excellence',
                description:
                  'We strive for excellence in every project, delivering results that exceed expectations.',
              },
              {
                title: 'Transparency',
                description:
                  'We believe in open communication and transparent reporting with all our clients.',
              },
              {
                title: 'Innovation',
                description:
                  'We stay ahead of trends and continuously innovate our strategies and tactics.',
              },
              {
                title: 'Results-Driven',
                description:
                  'Every strategy is designed with measurable outcomes and ROI in mind.',
              },
              {
                title: 'Collaboration',
                description:
                  'We work closely with our clients as partners to achieve shared success.',
              },
              {
                title: 'Integrity',
                description:
                  'We conduct our business with honesty and ethical practices always.',
              },
            ].map((value, index) => (
              <div key={index} className="bg-slate-900 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3 text-blue-600">
                  {value.title}
                </h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-slate-900">
        <div className="container">
          <h2 className="section-title text-center mb-12">Why Choose NDW Marketing?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              'Proven track record with 100+ successful campaigns',
              'Dedicated team of certified social media experts',
              'Data-driven strategies backed by analytics',
              'Transparent reporting and communication',
              'Customized solutions for your unique business needs',
              'Competitive pricing with flexible packages',
              'Quick turnaround times and responsive support',
              '30-day satisfaction guarantee',
            ].map((reason, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-6 w-6 rounded-md bg-blue-600">
                    <svg
                      className="h-4 w-4 text-white"
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
                <p className="text-gray-300">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Work With Us?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help your business grow on social media.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link to="/#pricing" className="btn-primary">
              View Pricing
            </Link>
            <a href="mailto:ndwmarketingagency321@gmail.com" className="btn-secondary">
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section bg-slate-900">
        <div className="container">
          <h2 className="section-title text-center mb-12">Get In Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <a
                href="mailto:ndwmarketingagency321@gmail.com"
                className="text-blue-600 hover:text-blue-400"
              >
                ndwmarketingagency321@gmail.com
              </a>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-2">Phone</h3>
              <a href="tel:519-574-1472" className="text-blue-600 hover:text-blue-400">
                519-574-1472
              </a>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-2">Location</h3>
              <p className="text-gray-400">Cambridge, Ontario</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
