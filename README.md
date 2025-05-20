
# FarmFresh - Connecting Kenya's Agricultural Ecosystem

FarmFresh is a startup innovative AgriTech platform designed to revolutionize Kenya's agricultural ecosystem by connecting farmers, suppliers, and consumers in one seamless marketplace.

## Features

- **Interactive Marketplace**: Browse and purchase agricultural products directly from verified producers
- **Producer & Supplier Profiles**: Connect with trusted agricultural partners across Kenya
- **Real-time Communication**: Message directly with producers and suppliers
- ![image](https://github.com/user-attachments/assets/4da461b3-4f75-4fb8-a5e3-1b6e266a2f48)
- **Market Insights**: Access up-to-date information about market trends and pricing
- ![image](https://github.com/user-attachments/assets/b6321028-4dd2-4e4f-bffe-f9eb8b21967e)
- **User Dashboard**: Track orders, manage profile, and view personalized recommendations
- ![image](https://github.com/user-attachments/assets/308db9f2-45bf-4e5c-80c9-d6b60058c9d1)
- **Secure Payments**: Integrated M-Pesa and bank transfer payment options
- **Data-Driven Recommendations**: AI-powered product suggestions based on user preferences and market trends
![image](https://github.com/user-attachments/assets/cce21101-fe5e-432d-9645-9e358a1fdb38)
![image](https://github.com/user-attachments/assets/8c1b4df9-80f0-4673-8939-5debc3412bbc)

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
git clone <https://github.com/kidulajumba254/farmfreshlimited--Agritech-startup.git>

# Navigate to the project directory
cd farmfreshlimited-Agritech-Startup-main

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
   - ![image](https://github.com/user-attachments/assets/aa87e1c6-be45-4572-90e7-68c2b9b7c5e1)
   - Products
   - ![productsUI](https://github.com/user-attachments/assets/06dc66c8-07e4-4a72-ab14-914813284cbf)
   - Orders
     ![image](https://github.com/user-attachments/assets/42494fb3-f6c9-4cdb-ab50-8f70987a1ae6)
   - Messages
   - ![image](https://github.com/user-attachments/assets/7c983f75-a573-4167-ac8e-7352ef9c913d)
   - Reviews
   - Market Data
   - ![image](https://github.com/user-attachments/assets/0901cf48-9c71-42d5-8211-aa55a03550b3)


3. **Row Level Security (RLS)**: Ensures users can only access data they're authorized to view

4. **Edge Functions**: Serverless functions for:
   - Processing payments
   - ![image](https://github.com/user-attachments/assets/a7b2040f-31f4-40c4-b39a-0456ec8f32ba)
   - Sending notifications
   - Generating AI recommendations
   - ![image](https://github.com/user-attachments/assets/7f57417e-86b0-480a-ad8c-8b136aa28252)
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

For inquiries, please contact: kidulajesse@gmail.com
