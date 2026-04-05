import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { CASE_STUDIES } from '../const';

const DETAILED_CASE_STUDIES = [
  {
    id: 1,
    title: 'Tech Startup Growth',
    industry: 'Technology',
    challenge:
      'A tech startup needed to build brand awareness and establish thought leadership in a competitive market.',
    solution:
      'We developed a comprehensive social media strategy focused on LinkedIn and Twitter, creating valuable content that positioned the founders as industry experts.',
    results: {
      followers: '5K → 50K',
      engagement: '+300%',
      leads: '+250 qualified leads',
      revenue: '+$500K',
    },
    duration: '6 months',
  },
  {
    id: 2,
    title: 'E-commerce Revenue Boost',
    industry: 'E-commerce',
    challenge:
      'An e-commerce store was struggling to drive sales through social media despite having a large following.',
    solution:
      'We implemented a data-driven approach with targeted Instagram and Facebook ads, optimized product content, and strategic influencer partnerships.',
    results: {
      sales: '+250%',
      roas: '4.5x',
      customers: '+500 new customers',
      revenue: '+$750K',
    },
    duration: '4 months',
  },
  {
    id: 3,
    title: 'Brand Awareness Campaign',
    industry: 'Consumer Goods',
    challenge:
      'A new product launch needed to reach a large audience quickly and build brand recognition.',
    solution:
      'We executed a multi-platform campaign across TikTok, Instagram, and YouTube with user-generated content and influencer collaborations.',
    results: {
      impressions: '1M+',
      reach: '2.5M',
      engagement: '+450%',
      sales: '+$1.2M',
    },
    duration: '3 months',
  },
];

export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="section pt-20 md:pt-32">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Case Studies</h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            See how we've helped businesses across various industries achieve
            remarkable growth through strategic social media marketing.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section">
        <div className="container space-y-12">
          {DETAILED_CASE_STUDIES.map((study, index) => (
            <div
              key={study.id}
              className="bg-slate-900 rounded-lg overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
                {/* Content */}
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-sm bg-blue-600 text-white px-3 py-1 rounded-full">
                      {study.industry}
                    </span>
                    <span className="text-sm text-gray-400">
                      {study.duration}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{study.title}</h3>

                  <div className="mb-6">
                    <h4 className="font-semibold text-blue-400 mb-2">Challenge</h4>
                    <p className="text-gray-400">{study.challenge}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-blue-400 mb-2">Solution</h4>
                    <p className="text-gray-400">{study.solution}</p>
                  </div>
                </div>

                {/* Results */}
                <div className="bg-slate-800 rounded-lg p-6">
                  <h4 className="font-semibold text-blue-400 mb-6">Results</h4>
                  <div className="space-y-4">
                    {Object.entries(study.results).map(([key, value]) => (
                      <div key={key} className="border-b border-slate-700 pb-4">
                        <p className="text-sm text-gray-400 capitalize mb-1">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </p>
                        <p className="text-2xl font-bold text-blue-600">
                          {value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Overview */}
      <section className="section bg-slate-900">
        <div className="container">
          <h2 className="section-title text-center mb-12">Our Track Record</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { label: 'Successful Campaigns', value: '100+' },
              { label: 'Clients Served', value: '500+' },
              { label: 'Average Growth', value: '300%' },
              { label: 'Years of Experience', value: '10+' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl font-bold text-blue-600 mb-2">
                  {stat.value}
                </p>
                <p className="text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Achieve Similar Results?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help your business grow on social media.
          </p>
          <a href="/#pricing" className="btn-primary">
            View Our Pricing
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
