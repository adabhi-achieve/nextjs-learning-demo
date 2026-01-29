# Next.js Learning Demo - Comprehensive Guide

A comprehensive Next.js demo application covering all essential topics for team learning. This project serves as a practical reference for developers learning Next.js and React.

## 🚀 Features

This demo application covers:

### Phase 1 – Foundations
- ✅ Modern JavaScript (ES6+)
- ✅ HTML + Flexbox
- ✅ React Components
- ✅ Props & State

### Phase 2 – Core React
- ✅ Hooks (useState, useEffect, useMemo, useCallback, useRef)
- ✅ API Integration
- ✅ Routing
- ✅ Forms & Validation

### Phase 3 – Production React
- ✅ Error Handling
- ✅ Performance Basics
- ✅ Folder Structure
- ✅ Environment Configuration

### Next.js Features
- ✅ File-Based Routing
- ✅ API Routes
- ✅ Server vs Client Components
- ✅ SSR / SSG / ISR
- ✅ Third-Party Integration
- ✅ Authentication & Routing

## 📦 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd nextjs-learning-demo
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Edit `.env.local` with your configuration:
```env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
nextjs-learning-demo/
├── app/                      # App Router directory
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   ├── api/                 # API routes
│   │   ├── hello/
│   │   ├── users/
│   │   ├── posts/
│   │   ├── auth/
│   │   └── weather/
│   ├── foundations/         # Phase 1 topics
│   │   ├── modern-javascript/
│   │   ├── html-flexbox/
│   │   ├── react-components/
│   │   └── props-state/
│   ├── core/                # Phase 2 topics
│   │   ├── hooks/
│   │   ├── api-integration/
│   │   └── forms-validation/
│   ├── routing/             # Routing examples
│   │   └── dynamic/
│   ├── nextjs/              # Next.js features
│   │   ├── file-routing/
│   │   ├── api-routes/
│   │   ├── server-client/
│   │   ├── ssr-ssg/
│   │   └── third-party/
│   ├── auth/                # Authentication
│   │   └── dashboard/
│   └── production/          # Phase 3 topics
│       ├── error-handling/
│       ├── performance/
│       ├── folder-structure/
│       └── env-config/
├── components/              # Reusable components
│   ├── Navigation.tsx
│   ├── ServerComponent.tsx
│   ├── ClientComponent.tsx
│   ├── ErrorBoundary.tsx
│   └── ...
├── public/                  # Static assets
├── .env.local              # Environment variables (gitignored)
├── .env.example            # Environment template
└── package.json            # Dependencies
```

## 🎯 Learning Path

### Phase 1: Foundations

1. **Modern JavaScript (ES6+)**
   - Arrow functions
   - Destructuring
   - Spread operator
   - Template literals
   - Promises & Async/Await
   - Route: `/foundations/modern-javascript`

2. **HTML + Flexbox**
   - Flexbox layouts
   - Responsive design
   - HTML5 semantic elements
   - Route: `/foundations/html-flexbox`

3. **React Components**
   - Functional components
   - Component composition
   - Conditional rendering
   - List rendering
   - Route: `/foundations/react-components`

4. **Props & State**
   - Passing props
   - Managing state with useState
   - Props vs State
   - Route: `/foundations/props-state`

### Phase 2: Core React

1. **Hooks**
   - useState
   - useEffect
   - useRef
   - useMemo
   - useCallback
   - Route: `/core/hooks`

2. **API Integration**
   - Fetch API
   - GET/POST requests
   - Error handling
   - Loading states
   - Route: `/core/api-integration`

3. **Routing**
   - Link component
   - Programmatic navigation
   - Dynamic routes
   - Query parameters
   - Route: `/routing`

4. **Forms & Validation**
   - Form handling
   - Validation with Zod
   - React Hook Form
   - Error messages
   - Route: `/core/forms-validation`

### Phase 3: Production React

1. **Error Handling**
   - Error boundaries
   - Try-catch blocks
   - Error pages
   - Route: `/production/error-handling`

2. **Performance**
   - Code splitting
   - Memoization
   - Image optimization
   - Route: `/production/performance`

3. **Folder Structure**
   - Project organization
   - Best practices
   - Route: `/production/folder-structure`

4. **Environment Configuration**
   - Environment variables
   - .env files
   - Server vs Client variables
   - Route: `/production/env-config`

### Next.js Features

1. **File-Based Routing**
   - App Router
   - Dynamic routes
   - Route groups
   - Route: `/nextjs/file-routing`

2. **API Routes**
   - Creating endpoints
   - HTTP methods
   - Request/Response handling
   - Route: `/nextjs/api-routes`

3. **Server vs Client Components**
   - Server Components
   - Client Components
   - When to use each
   - Route: `/nextjs/server-client`

4. **SSR / SSG / ISR**
   - Server-Side Rendering
   - Static Site Generation
   - Incremental Static Regeneration
   - Route: `/nextjs/ssr-ssg`

5. **Third-Party Integration**
   - External APIs
   - API proxies
   - Best practices
   - Route: `/nextjs/third-party`

6. **Authentication**
   - Login/Register
   - JWT tokens
   - Protected routes
   - Route: `/auth`

## 🛠️ Technologies Used

- **Next.js 16** - React framework
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Zod** - Schema validation
- **React Hook Form** - Form management
- **bcryptjs** - Password hashing
- **jsonwebtoken** - JWT authentication

## 📚 API Routes

The application includes several example API routes:

- `GET /api/hello` - Basic API endpoint
- `GET /api/users` - Fetch users
- `POST /api/users` - Create user
- `GET /api/posts` - Fetch posts
- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration
- `GET /api/weather` - Weather API example
- `GET /api/error-example` - Error handling example

## 🔐 Authentication

The authentication system demonstrates:

- User registration and login
- JWT token generation
- Protected routes
- Session management
- Route protection

**Demo Credentials:**
- Email: `demo@example.com`
- Password: Any password (for demo purposes)

## 🎨 Styling

The application uses Tailwind CSS for styling with:
- Dark mode support
- Responsive design
- Modern UI components
- Consistent color scheme

## 📝 Code Examples

Each page includes:
- Working code examples
- Interactive demos
- Code snippets with explanations
- Best practices
- Common patterns

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

### Deploy to Vercel

The easiest way to deploy is using [Vercel](https://vercel.com):

```bash
npm i -g vercel
vercel
```

## 📖 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## 🤝 Contributing

This is a learning resource. Feel free to:
- Add more examples
- Improve existing demos
- Fix bugs
- Enhance documentation

## 📄 License

This project is open source and available for educational purposes.

## 🎓 Learning Tips

1. **Start with Foundations** - Build a solid base before moving to advanced topics
2. **Practice** - Try modifying the examples
3. **Experiment** - Break things and fix them
4. **Read the Code** - Understand how each example works
5. **Build Projects** - Apply what you learn in real projects

## 🐛 Troubleshooting

### Common Issues

1. **Port already in use**
   - Change port: `npm run dev -- -p 3001`

2. **Environment variables not loading**
   - Ensure `.env.local` exists
   - Restart the dev server

3. **TypeScript errors**
   - Run `npm install` to ensure all types are installed

## 📞 Support

For questions or issues, please refer to the Next.js documentation or create an issue in the repository.

---

**Happy Learning! 🎉**
