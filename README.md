# Issue Tracker - Mode

A modern, elegant issue tracking application built with Next.js 15, designed for teams to manage projects efficiently.

## 🚀 Features

- **User Authentication**: Secure sign-up and sign-in with JWT tokens
- **Issue Management**: Create, read, update, and delete issues
- **Real-time Updates**: Hot reload and real-time issue status updates
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Dark Mode Support**: Built-in dark/light theme switching
- **Database Integration**: PostgreSQL with Drizzle ORM
- **Form Validation**: Zod schema validation for all forms
- **Modern UI**: Clean, accessible components with Tailwind CSS

## 🛠️ Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library
- **React Hot Toast** - Toast notifications

### Backend
- **Next.js API Routes** - Server-side API endpoints
- **Drizzle ORM** - Type-safe database toolkit
- **PostgreSQL** - Database (via Neon)
- **bcrypt** - Password hashing
- **jose** - JWT token handling
- **zod** - Schema validation

### Development Tools
- **ESLint** - Code linting
- **TypeScript** - Static type checking
- **PostCSS** - CSS processing
- **Drizzle Kit** - Database migrations

## 🏗️ Project Structure

```
issuesolver/
├── app/
│   ├── (auth)/           # Authentication pages
│   ├── (marketing)/      # Landing pages
│   ├── actions/          # Server actions
│   ├── api/             # API routes
│   ├── components/       # React components
│   ├── dashboard/        # Dashboard pages
│   └── issues/          # Issue management pages
├── db/
│   ├── schema.ts        # Database schema
│   └── index.ts         # Database configuration
├── lib/
│   ├── auth.ts          # Authentication utilities
│   ├── dal.ts           # Data access layer
│   └── utils.ts         # Utility functions
└── public/              # Static assets
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm
- PostgreSQL database (or Neon account)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/issue-tracker.git
cd issue-tracker
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Edit `.env.local` with your database URL and secret key:
```env
DATABASE_URL=your_postgresql_connection_string
SECRET_KEY=your_jwt_secret_key
```

4. Run database migrations:
```bash
npm run db:push
```

5. Start the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run db:generate` - Generate database migrations
- `npm run db:push` - Push schema to database
- `npm run db:studio` - Open Drizzle Studio

## 🔒 Authentication

The app uses JWT tokens for authentication with the following features:
- Secure password hashing with bcrypt
- Session management with HTTP-only cookies
- Protected routes and API endpoints
- User registration and login

## 🗄️ Database Schema

The application uses the following main entities:
- **Users**: Authentication and profile information
- **Issues**: Issue tracking with status, priority, and assignments
- **Sessions**: User session management

## 🎨 UI Components

Custom components built with Tailwind CSS:
- Responsive navigation
- Form components with validation
- Loading states and skeletons
- Toast notifications
- Modal dialogs
- Button variants and states

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Other Platforms
The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- Docker containers

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first approach
- Drizzle team for the excellent ORM
- Neon for the serverless PostgreSQL database
