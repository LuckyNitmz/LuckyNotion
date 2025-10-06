# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

LuckyNotion is a full-stack online learning platform built with the MERN stack. It features user authentication, course management, video streaming, payment integration (Razorpay), and role-based dashboards for both students and instructors.

## Architecture

### Frontend (React)
- **Main App**: `src/App.js` - Root component with React Router setup and role-based routing
- **State Management**: Redux Toolkit with slices for auth, profile, cart, course, and viewCourse
- **Styling**: Tailwind CSS with custom color palette and responsive design
- **Key Features**: Role-based access (Student/Instructor), course enrollment, video player, payment gateway

### Backend (Node.js/Express)
- **Server Entry**: `server/index.js` - Express server with middleware setup
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT-based auth with cookies
- **File Storage**: Cloudinary integration for media uploads
- **Payment**: Razorpay integration for course purchases
- **Email**: Nodemailer for notifications and OTP verification

### Database Models
Core entities include User, Course, Section, SubSection, Category, RatingAndReview, CourseProgress, and OTP.

## Development Commands

### Frontend Development
```bash
# Install dependencies
npm install

# Start development server (frontend only)
npm start

# Build for production
npm run build

# Start both frontend and backend concurrently
npm run dev
```

### Backend Development
```bash
# Navigate to server directory
cd server

# Install server dependencies
npm install

# Start server in development mode (with nodemon)
npm run dev

# Start server in production mode
npm start
```

### Full Stack Development
```bash
# From root directory - runs both client and server
npm run dev
```

## Environment Setup

### Frontend Environment
- Base API URL configured in `.env`: `REACT_APP_BASE_URL = "http://localhost:4000/api/v1"`

### Backend Environment
Required environment variables in `server/.env`:
- `PORT` (default: 4000)
- Database connection string
- JWT secrets
- Cloudinary credentials
- Razorpay keys
- Email service configuration

## Key Architecture Patterns

### Authentication Flow
- JWT tokens stored in localStorage and cookies
- Route protection using `PrivateRoute` and `OpenRoute` components
- Role-based access control (STUDENT/INSTRUCTOR constants in `utils/constants.js`)
- Auto-login on app initialization via `getUserDetails` action

### State Management Structure
- `authSlice`: Authentication state and user session
- `profileSlice`: User profile data
- `cartSlice`: Shopping cart for course purchases
- `courseSlice`: Course creation and management
- `viewCourseSlice`: Video playback and progress tracking

### API Architecture
Server follows RESTful conventions with routes:
- `/api/v1/auth/*` - Authentication endpoints
- `/api/v1/course/*` - Course management
- `/api/v1/profile/*` - User profile operations
- `/api/v1/payment/*` - Payment processing
- `/api/v1/reach/*` - Contact form handling

### Component Organization
- `components/core/` - Main feature components (Auth, Dashboard, ViewCourse)
- `components/common/` - Reusable UI components (Navbar, Footer, Modal)
- `pages/` - Route-level page components
- `hooks/` - Custom React hooks
- `services/` - API integration utilities

### Role-Based Features
**Student Dashboard:**
- Enrolled courses management
- Shopping cart functionality
- Course progress tracking
- Video playback with progress saving

**Instructor Dashboard:**
- Course creation and editing
- Analytics and student management
- Content upload via Cloudinary
- Revenue tracking

## Development Workflow

### Adding New Features
1. Create Redux slice if new state is needed
2. Add API endpoints in appropriate server route file
3. Implement corresponding controller in `server/controllers/`
4. Create/update React components in appropriate directory
5. Update routing in `App.js` if new pages are needed

### File Upload Handling
- Uses `express-fileupload` middleware
- Cloudinary integration for persistent storage
- Temporary files stored in `./tmp` directory

### Payment Integration
- Razorpay for course purchases
- Payment verification and course enrollment automation
- Email notifications for successful purchases

## Testing and Quality

### Current Setup
- ESLint configuration via Create React App defaults
- No custom testing configuration found
- Manual testing workflow recommended

### Code Style
- Tailwind CSS for consistent styling
- Custom color palette defined in `tailwind.config.js`
- Component-based architecture with functional components and hooks