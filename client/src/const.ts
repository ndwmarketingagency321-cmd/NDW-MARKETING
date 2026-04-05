import type { PricingTier, PricingPlan } from '../../shared/types';

export const PRICING_PLANS: Record<PricingTier, PricingPlan> = {
  business_start: {
    id: 'business_start',
    name: 'Business Start',
    monthlyPrice: 350,
    setupFee: 50,
    description: 'Perfect for small businesses just starting their social media journey',
    features: [
      'Social media strategy consultation',
      'Content calendar planning',
      'Basic content creation (10 posts/month)',
      'Community management',
      'Monthly performance report',
    ],
  },
  business_advanced: {
    id: 'business_advanced',
    name: 'Business Advanced',
    monthlyPrice: 600,
    setupFee: 50,
    description: 'Ideal for growing businesses ready to scale their social presence',
    features: [
      'Everything in Business Start',
      'Advanced content creation (25 posts/month)',
      'Video content production',
      'Influencer outreach',
      'Paid advertising management',
      'Weekly performance reports',
      'A/B testing and optimization',
    ],
  },
  business_scale: {
    id: 'business_scale',
    name: 'Business Scale',
    monthlyPrice: 1200,
    setupFee: 50,
    description: 'For established businesses ready for full-scale social media domination',
    features: [
      'Everything in Business Advanced',
      'Premium content creation (50+ posts/month)',
      'Multi-platform strategy',
      'Crisis management support',
      'Dedicated account manager',
      'Real-time analytics dashboard',
      'Quarterly strategy reviews',
      'Custom integrations',
    ],
  },
};

export const SOCIAL_PLATFORMS = [
  'Instagram',
  'Facebook',
  'TikTok',
  'LinkedIn',
  'YouTube',
  'Twitter',
];

export const TESTIMONIALS = [
  {
    name: 'John Smith',
    company: 'Tech Startup Inc.',
    text: 'NDW Marketing transformed our social media presence. We saw a 300% increase in engagement within 3 months!',
    metrics: '+300% Engagement',
  },
  {
    name: 'Sarah Johnson',
    company: 'Fashion Boutique',
    text: 'Professional, responsive, and results-driven. Our sales increased significantly after partnering with NDW.',
    metrics: '+250% Sales',
  },
  {
    name: 'Mike Davis',
    company: 'E-commerce Store',
    text: 'The team at NDW really understands social media marketing. Highly recommended!',
    metrics: '+400% Followers',
  },
];

export const CASE_STUDIES = [
  {
    title: 'Tech Startup Growth',
    description: 'Helped a tech startup grow from 5K to 50K followers in 6 months',
    metrics: '10x Growth',
    industry: 'Technology',
  },
  {
    title: 'E-commerce Revenue Boost',
    description: 'Increased online sales by 250% through strategic social media campaigns',
    metrics: '+$500K Revenue',
    industry: 'E-commerce',
  },
  {
    title: 'Brand Awareness Campaign',
    description: 'Built brand awareness for a new product launch reaching 1M+ impressions',
    metrics: '1M+ Impressions',
    industry: 'Consumer Goods',
  },
];

export const FAQ_ITEMS = [
  {
    question: 'How quickly will I see results?',
    answer:
      'Most clients see noticeable improvements in engagement within 4-6 weeks. Significant growth typically takes 2-3 months as we optimize and refine our strategy.',
  },
  {
    question: 'What platforms do you manage?',
    answer:
      'We manage Instagram, Facebook, TikTok, LinkedIn, YouTube, and Twitter. We can also handle additional platforms based on your business needs.',
  },
  {
    question: 'Can I cancel anytime?',
    answer:
      'Yes, you can cancel your subscription at any time. We believe in earning your business every month through exceptional results.',
  },
  {
    question: 'Do you provide analytics reports?',
    answer:
      'Absolutely! We provide detailed monthly reports showing engagement metrics, follower growth, reach, and ROI. Advanced plans include weekly reports.',
  },
  {
    question: 'What if I am not satisfied with the results?',
    answer:
      'We offer a 30-day satisfaction guarantee. If you are not happy with our service, we will work with you to improve or provide a full refund.',
  },
  {
    question: 'Do you handle crisis management?',
    answer:
      'Yes, our Business Scale plan includes crisis management support. We help manage and mitigate negative situations on social media.',
  },
];
