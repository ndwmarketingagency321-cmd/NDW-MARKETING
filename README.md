# NDW Marketing Agency Website

A full-stack marketing agency website featuring social media marketing services, pricing tiers, and Stripe integration.

## 🚀 Features

- **Landing Page**: Hero section with pricing and testimonials
- **About Page**: Company story and values
- **Blog**: Marketing insights and tips
- **Case Studies**: Client success stories with metrics
- **FAQ**: Common questions and answers
- **Stripe Integration**: Secure payment processing with three pricing tiers
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Type-Safe**: Built with TypeScript and tRPC
- **Modern Stack**: React 19, Express 4, Tailwind CSS 4

## 📋 Tech Stack

- **Frontend**: React 19 + Tailwind CSS 4 + React Router
- **Backend**: Express 4 + tRPC 11
- **Database**: MySQL with Drizzle ORM
- **Payments**: Stripe
- **Build Tool**: Vite
- **Testing**: Vitest
- **Language**: TypeScript

## 🛠️ Installation

### Prerequisites

- Node.js 18+ and pnpm
- MySQL database
- Stripe account

### Setup

1. Clone the repository:

```bash
git clone https://github.com/ndwmarketingagency321-cmd/NDW-MARKETING.git
cd NDW-MARKETING
```

2. Install dependencies:

```bash
pnpm install
```

3. Set up environment variables:

```bash
cp .env.example .env.local
```

Edit `.env.local` with your configuration:

```env
DATABASE_URL=mysql://user:password@localhost:3306/ndw_marketing
STRIPE_SECRET_KEY=sk_live_your_key
VITE_STRIPE_PUBLISHABLE_KEY=pk_live_your_key
STRIPE_WEBHOOK_SECRET=whsec_your_secret
JWT_SECRET=your_jwt_secret
VITE_APP_ID=your_app_id
```

4. Set up the database:

```bash
pnpm db:push
```

5. Start the development server:

```bash
pnpm dev
```

Visit `http://localhost:5173` in your browser.

## 📁 Project Structure

```
ndw-marketing-agency/
├── client/                 # React frontend
│   ├── src/
│   │   ├── pages/         # Page components
│   │   ├── components/    # Reusable components
│   │   ├── App.tsx        # Main app with routing
│   │   ├── main.tsx       # React entry point
│   │   ├── index.css      # Global styles
│   │   └── const.ts       # Constants
│   ├── index.html         # HTML template
│   └── vite-env.d.ts      # Vite types
├── server/                # Express backend
│   ├── routers.ts         # tRPC procedures
│   ├── db.ts              # Database helpers
│   ├── storage.ts         # File storage
│   └── _core/             # Server setup
├── drizzle/               # Database schema
│   └── schema.ts          # Table definitions
├── shared/                # Shared types
│   └── types.ts           # TypeScript types
├── package.json           # Dependencies
├── tsconfig.json          # TypeScript config
├── vite.config.ts         # Vite config
└── vitest.config.ts       # Test config
```

## 💳 Pricing Tiers

### Business Start - $350/month
- Social media strategy consultation
- Content calendar planning
- Basic content creation (10 posts/month)
- Community management
- Monthly performance report

### Business Advanced - $600/month
- Everything in Business Start
- Advanced content creation (25 posts/month)
- Video content production
- Influencer outreach
- Paid advertising management
- Weekly performance reports

### Business Scale - $1,200/month
- Everything in Business Advanced
- Premium content creation (50+ posts/month)
- Multi-platform strategy
- Crisis management support
- Dedicated account manager
- Real-time analytics dashboard

*All plans include a $50 one-time setup fee*

## 🔐 Environment Variables

| Variable | Description |
|----------|-------------|
| `DATABASE_URL` | MySQL connection string |
| `STRIPE_SECRET_KEY` | Stripe secret API key |
| `VITE_STRIPE_PUBLISHABLE_KEY` | Stripe publishable key |
| `STRIPE_WEBHOOK_SECRET` | Stripe webhook secret |
| `JWT_SECRET` | JWT signing secret |
| `VITE_APP_ID` | Application ID |
| `VITE_APP_TITLE` | Website title |
| `VITE_APP_LOGO` | Logo URL |

## 🧪 Testing

Run the test suite:

```bash
pnpm test
```

Run tests with UI:

```bash
pnpm test:ui
```

## 🏗️ Building

Build for production:

```bash
pnpm build
```

Start production server:

```bash
pnpm start
```

## 📊 Database

Generate database migrations:

```bash
pnpm db:generate
```

Push migrations to database:

```bash
pnpm db:push
```

Open Drizzle Studio:

```bash
pnpm db:studio
```

## 🚀 Deployment

### Manus Platform

1. Connect your GitHub repository to Manus
2. Set environment variables in the dashboard
3. Deploy automatically on git push

### Other Platforms

The project can be deployed to any Node.js hosting platform:
- Vercel
- Netlify
- Railway
- Render
- AWS
- DigitalOcean

## 📞 Support

**Email**: ndwmarketingagency321@gmail.com  
**Phone**: 519-574-1472  
**Location**: Cambridge, Ontario

## 📄 License

MIT License - See LICENSE file for details

## 👥 Contributors

NDW Marketing Agency Team

---

**Version**: 1.0.0  
**Last Updated**: April 2024  
**Status**: Production Ready ✅
