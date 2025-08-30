# Moonrider Frontend

A modern React application built with Vite for the Moonrider platform, featuring user authentication, dashboard management, and responsive design.

## 📁 Folder Structure

```
frontend/
├── config/                    # Configuration files
│   └── firebase.js               # Firebase configuration
├── public/                    # Static assets
│   └── vite.svg                  # Vite logo
├── src/                      # Source code
│   ├── assets/                  # Static assets
│   │   └── react.svg               # React logo
│   ├── components/              # React components
│   │   ├── Dashboard/              # Dashboard related components
│   │   │   ├── AddProfileModal.jsx    # Add profile modal
│   │   │   ├── Dashboard.jsx          # Main dashboard component
│   │   │   ├── Header.jsx             # Dashboard header
│   │   │   ├── header.css             # Header styles
│   │   │   └── modal.css              # Modal styles
│   │   ├── UsersPage/              # Users page components
│   │   │   ├── UsersPage.jsx          # Users listing page
│   │   │   └── UsersPage.css          # Users page styles
│   │   ├── SignIn.jsx              # Authentication component
│   │   └── SignIn.css              # Authentication styles
│   ├── context/                 # React context providers
│   │   └── AuthContext.jsx         # Authentication context
│   ├── firebase/                # Firebase integration
│   │   ├── auth.js                 # Authentication functions
│   │   └── config.js               # Firebase config
│   ├── api.js                   # API service functions
│   ├── App.jsx                  # Main App component
│   ├── App.css                  # Global app styles
│   └── main.jsx                 # Application entry point
├── .env                      # Environment variables
├── .gitignore               # Git ignore rules
├── eslint.config.js         # ESLint configuration
├── index.html               # HTML template
├── package.json             # Dependencies and scripts
├── vite.config.js          # Vite configuration
└── README.md               # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager
- Backend API running (see backend README)

### Installation

1. **Navigate to frontend directory**
   ```bash
   cd frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file with:
   ```env
   # Firebase Configuration
   VITE_FIREBASE_API_KEY="your-firebase-api-key"
   VITE_FIREBASE_AUTH_DOMAIN="your-project.firebaseapp.com"
   VITE_FIREBASE_PROJECT_ID="your-project-id"
   VITE_FIREBASE_STORAGE_BUCKET="your-project.firebasestorage.app"
   VITE_FIREBASE_MESSAGING_SENDER_ID="your-sender-id"
   VITE_FIREBASE_APP_ID="your-app-id"
   
   # API Configuration
   VITE_API_URL="http://localhost:4000/api"
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## 🎯 Features

### Authentication
- ✅ Email/Password authentication
- ✅ Google OAuth integration
- ✅ Firebase Authentication
- ✅ Protected routes
- ✅ User session management

### Dashboard
- ✅ User profile management
- ✅ Add new profiles modal
- ✅ Responsive header with user avatar
- ✅ Search functionality
- ✅ User directory

### UI/UX
- ✅ Fully responsive design
- ✅ Mobile-first approach
- ✅ Modern glassmorphism effects
- ✅ Smooth animations and transitions
- ✅ Loading states and error handling

## 🛠️ Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing
- **Firebase** - Authentication and backend services
- **Axios** - HTTP client for API calls
- **Lucide React** - Icon library
- **React Icons** - Additional icons
- **CSS3** - Styling with modern features

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: 320px - 767px

## 🔐 Authentication Flow

1. **Sign In/Sign Up**: Users can authenticate via email/password or Google
2. **Protected Routes**: Dashboard and user pages require authentication
3. **Public Routes**: Sign-in page is accessible to unauthenticated users
4. **Auto Redirect**: Authenticated users are redirected to dashboard
5. **Session Persistence**: User sessions persist across browser refreshes

## 📡 API Integration

### Endpoints Used
- `POST /api/user/register` - User registration
- `GET /api/user/alluser` - Fetch all users
- `POST /api/admin/register` - Admin registration
- `POST /api/admin/login` - Admin login

### API Service (`api.js`)
```javascript
// User operations
addUserData(data)     // Register new user
getUserData()         // Get all users

// Admin operations
adminRegister(data)   // Register admin
```

## 🎨 Styling Architecture

- **Component-scoped CSS** - Each component has its own CSS file
- **CSS Variables** - Consistent color scheme and spacing
- **Flexbox & Grid** - Modern layout techniques
- **Media Queries** - Responsive breakpoints
- **CSS Animations** - Smooth transitions and effects

## 🚦 Routing Structure

```
/ (Public)           → Sign In page
/dashboard (Protected) → Main dashboard
/users (Protected)     → Users directory
```

## 🔧 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_FIREBASE_API_KEY` | Firebase API key | Yes |
| `VITE_FIREBASE_AUTH_DOMAIN` | Firebase auth domain | Yes |
| `VITE_FIREBASE_PROJECT_ID` | Firebase project ID | Yes |
| `VITE_FIREBASE_STORAGE_BUCKET` | Firebase storage bucket | Yes |
| `VITE_FIREBASE_MESSAGING_SENDER_ID` | Firebase messaging sender ID | Yes |
| `VITE_FIREBASE_APP_ID` | Firebase app ID | Yes |
| `VITE_API_URL` | Backend API base URL | Yes |

## 🌐 Deployment

### Netlify/Vercel Deployment
1. **Build Settings**:
   - Build Command: `npm run build`
   - Publish Directory: `dist`

2. **Environment Variables**: Set all `VITE_*` variables in deployment platform

3. **Redirects**: Add `_redirects` file for SPA routing:
   ```
   /*    /index.html   200
   ```

## 📦 Scripts

```json
{
  "dev": "vite",                    // Start development server
  "build": "vite build",            // Build for production
  "lint": "eslint .",               // Run ESLint
  "preview": "vite preview"         // Preview production build
}
```

## 🔍 Key Components

### AuthContext
- Manages authentication state
- Provides user data across components
- Handles Firebase auth state changes

### Dashboard
- Main application interface
- User profile management
- Navigation and layout

### UsersPage
- Display all registered users
- Search and filter functionality
- Responsive user cards

### SignIn
- Authentication interface
- Email/password and Google sign-in
- Form validation and error handling

## 🎯 Performance Optimizations

- ✅ Code splitting with React.lazy
- ✅ Optimized bundle size with Vite
- ✅ Efficient re-renders with proper state management
- ✅ Image optimization and lazy loading
- ✅ Minimal API calls with proper caching

## 🐛 Error Handling

- **Network Errors**: Graceful API error handling
- **Authentication Errors**: User-friendly error messages
- **Form Validation**: Real-time input validation
- **Loading States**: Proper loading indicators
- **Fallback UI**: Error boundaries for component failures

## 👨💻 Development

### Code Style
- ESLint configuration for code quality
- Consistent naming conventions
- Component-based architecture
- Proper prop validation

### Best Practices
- Functional components with hooks
- Custom hooks for reusable logic
- Context for global state management
- Proper error boundaries
- Accessibility considerations

## 📄 License

ISC License

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

---

**Built with ❤️ using React and Vite**