import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const BLOG_POSTS = [
  {
    id: 1,
    title: '10 Social Media Trends That Will Dominate 2024',
    excerpt:
      'Stay ahead of the curve with these emerging social media trends that will shape the industry in 2024.',
    date: 'April 1, 2024',
    author: 'NDW Marketing Team',
    category: 'Trends',
  },
  {
    id: 2,
    title: 'How to Create Viral Content on TikTok',
    excerpt:
      'Learn the secrets to creating content that resonates with TikTok audiences and goes viral.',
    date: 'March 28, 2024',
    author: 'Sarah Johnson',
    category: 'Content Strategy',
  },
  {
    id: 3,
    title: 'Instagram Reels vs. TikTok: Which Should You Focus On?',
    excerpt:
      'A comprehensive comparison to help you decide where to invest your content creation efforts.',
    date: 'March 25, 2024',
    author: 'Mike Davis',
    category: 'Platform Strategy',
  },
  {
    id: 4,
    title: 'The Ultimate Guide to Social Media Analytics',
    excerpt:
      'Master the metrics that matter and learn how to use data to improve your social media performance.',
    date: 'March 20, 2024',
    author: 'NDW Marketing Team',
    category: 'Analytics',
  },
  {
    id: 5,
    title: 'LinkedIn Marketing Strategies for B2B Companies',
    excerpt:
      'Discover effective strategies to leverage LinkedIn for B2B lead generation and brand building.',
    date: 'March 15, 2024',
    author: 'John Smith',
    category: 'B2B Marketing',
  },
  {
    id: 6,
    title: 'How to Build a Strong Brand on Social Media',
    excerpt:
      'Learn the fundamentals of building a consistent and recognizable brand across all social platforms.',
    date: 'March 10, 2024',
    author: 'NDW Marketing Team',
    category: 'Branding',
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="section pt-20 md:pt-32">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">NDW Marketing Blog</h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            Stay updated with the latest social media marketing trends, tips, and
            strategies to grow your business.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <article
                key={post.id}
                className="bg-slate-900 rounded-lg overflow-hidden hover:bg-slate-800 transition-colors cursor-pointer"
              >
                <div className="bg-gradient-to-br from-blue-600 to-blue-800 h-48"></div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs bg-blue-600 text-white px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-400">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 hover:text-blue-400">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">By {post.author}</span>
                    <a href="#" className="text-blue-600 hover:text-blue-400 text-sm font-semibold">
                      Read More →
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section bg-slate-900">
        <div className="container max-w-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-gray-400">
              Get the latest marketing tips and strategies delivered to your inbox
              every week.
            </p>
          </div>
          <form className="flex flex-col md:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-slate-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
            <button type="submit" className="btn-primary">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
