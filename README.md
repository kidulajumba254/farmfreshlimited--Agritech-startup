
# FarmFresh - Connecting Kenya's Agricultural Ecosystem

FarmFresh is an innovative AgriTech platform designed to revolutionize Kenya's agricultural ecosystem by connecting farmers, suppliers, and consumers in one seamless marketplace.

## Features

- **Interactive Marketplace**: Browse and purchase agricultural products directly from verified producers
- **Producer & Supplier Profiles**: Connect with trusted agricultural partners across Kenya
- **Real-time Communication**: Message directly with producers and suppliers
- **Market Insights**: Access up-to-date information about market trends and pricing
- **User Dashboard**: Track orders, manage profile, and view personalized recommendations
- **Secure Payments**: Integrated M-Pesa and bank transfer payment options
- **Data-Driven Recommendations**: AI-powered product suggestions based on user preferences and market trends

## Technology Stack

- **Frontend**: React, TypeScript, Tailwind CSS, Shadcn UI
- **State Management**: React Context API and React Query
- **Authentication**: Supabase Authentication
- **Database**: Supabase PostgreSQL Database
- **APIs**: Supabase Edge Functions
- **Payments**: M-Pesa API integration, Bank Transfer options
- **Deployment**: Vercel/Netlify (recommended)

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Supabase account

### Installation

```bash
# Clone the repository
git clone <your-repository-url>

# Navigate to the project directory
cd farmfresh

# Install dependencies
npm install

# Start the development server
npm run dev
```

### Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_MPESA_CONSUMER_KEY=your_mpesa_consumer_key
VITE_MPESA_CONSUMER_SECRET=your_mpesa_consumer_secret
```

## Backend Architecture

FarmFresh uses Supabase as its backend infrastructure, providing:

1. **Authentication**: User registration and login via email/password
2. **Database**: PostgreSQL database with the following main tables:
   - Users (producers, suppliers, consumers)
   - Products
   - Orders
   - Messages
   - Reviews
   - Market Data

3. **Row Level Security (RLS)**: Ensures users can only access data they're authorized to view

4. **Edge Functions**: Serverless functions for:
   - Processing payments
   - Sending notifications
   - Generating AI recommendations
   - Data aggregation for market insights

5. **Real-time Subscriptions**: For messages and order status updates

## Deployment

The application can be deployed to platforms like Vercel or Netlify with the following steps:

1. Connect your repository to the hosting platform
2. Configure environment variables
3. Deploy the application

## Future Roadmap

- Mobile application for Android and iOS
- Advanced analytics dashboard for producers
- Supply chain tracking integration
- Seasonal forecasting using historical data
- Community marketplace for equipment sharing

## Contributing

We welcome contributions to FarmFresh! Please read our contributing guidelines before submitting pull requests.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For inquiries, please contact: hello@farmfresh.co.ke
