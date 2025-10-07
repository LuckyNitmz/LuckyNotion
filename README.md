# 🎓 LuckyNotion - Online Learning Platform

A comprehensive full-stack EdTech platform that enables seamless online learning experiences for both students and instructors. Built with modern web technologies, LuckyNotion provides course creation, enrollment, video streaming, progress tracking, and payment integration.

##  Features

### 🔐 Authentication & Authorization
- **Role-based Access Control**: Student, Instructor, and Admin roles
- **Secure Authentication**: JWT-based authentication with password reset
- **Email Verification**: OTP-based email verification system
- **Profile Management**: Complete user profile customization

### 📚 Course Management
- **Course Creation**: Rich course builder with sections and subsections
- **Video Content**: Upload and stream video lectures
- **Course Catalog**: Browse courses by categories
- **Progress Tracking**: Track learning progress and completion
- **Course Reviews**: Rating and review system

### 💰 Payment & Enrollment
- **Razorpay Integration**: Secure payment processing
- **Cart**: Add multiple courses before checkout
- **Enrollment Management**: Track enrolled courses and progress

### 📊 Dashboard Features
- **Student Dashboard**: Enrolled courses, progress, and profile settings
- **Instructor Dashboard**: Course analytics, student management, and earnings
- **Admin Panel**: User management and platform analytics

### 🎨 User Experience
- **Responsive Design**: Tailored for all device sizes
- **Dark Theme**: Professional dark mode interface
- **Interactive UI**: Smooth animations and transitions
- **Real-time Updates**: Live progress and notification updates

## 🛠 Tech Stack

### Frontend
- **React 18.2** - Modern React with hooks
- **Redux Toolkit** - State management
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **React Hook Form** - Form handling and validation
- **Axios** - HTTP client
- **Chart.js** - Data visualization
- **React Hot Toast** - Notifications

### Backend
- **Node.js & Express** - Server runtime and framework
- **MongoDB & Mongoose** - Database and ODM
- **JWT** - Authentication tokens
- **Bcrypt** - Password hashing
- **Cloudinary** - Media storage and optimization
- **Razorpay** - Payment gateway
- **Nodemailer** - Email services
- **Express File Upload** - File handling

### Development Tools
- **Concurrently** - Run client and server simultaneously
- **Nodemon** - Auto-restart development server
- **dotenv** - Environment variable management

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB database
- Cloudinary account (for media storage)
- Razorpay account (for payments)

### Installation

1. **Clone the repository**
   ```bash
   git clone
   cd LuckyNotion
   ```

2. **Install dependencies**
   ```bash
   # Install root dependencies
   npm install
   
   # Install server dependencies
   cd server
   npm install
   cd ..
   ```

3. **Environment Setup**
   
   Create `.env` file in the root directory:
   ```env
   # Client environment variables (if needed)
   ```
   
   Create `.env` file in the `server` directory:
   ```env
   # Database
   DATABASE_URL=your_mongodb_connection_string
   
   # JWT
   JWT_SECRET=your_jwt_secret_key
   
   # Cloudinary
   CLOUD_NAME=your_cloudinary_cloud_name
   API_KEY=your_cloudinary_api_key
   API_SECRET=your_cloudinary_api_secret
   
   # Razorpay
   RAZORPAY_KEY=your_razorpay_key_id
   RAZORPAY_SECRET=your_razorpay_secret
   
   # Email
   MAIL_HOST=your_smtp_host
   MAIL_USER=your_email_username
   MAIL_PASS=your_email_password
   
   # Server
   PORT=4000
   ```

4. **Run the application**
   ```bash
   # Development mode (runs both client and server)
   npm run dev
   
   # Or run separately:
   # Client only
   npm start
   
   # Server only
   npm run server
   ```

5. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:4000

## 📦 Available Scripts

### Root Directory
- `npm start` - Start the React development server
- `npm run build` - Build the React app for production
- `npm run dev` - Run both client and server concurrently
- `npm run server` - Start the backend server in development mode

### Server Directory
- `npm start` - Start the production server
- `npm run dev` - Start the development server with nodemon

## 🏗 Project Structure

```
LuckyNotion/
├── src/                          # React frontend
│   ├── components/              # Reusable UI components
│   │   ├── common/             # Shared components
│   │   ├── core/               # Feature-specific components
│   │   └── ContactPage/        # Contact page components
│   ├── pages/                  # Route components
│   ├── services/               # API integration
│   ├── slices/                 # Redux slices
│   ├── utils/                  # Utility functions
│   └── data/                   # Static data and constants
├── server/                     # Node.js backend
│   ├── config/                 # Configuration files
│   ├── controllers/            # Route controllers
│   ├── models/                 # MongoDB models
│   ├── routes/                 # API routes
│   ├── middlewares/            # Custom middleware
│   ├── mail/                   # Email templates
│   └── utils/                  # Utility functions
└── public/                     # Static assets
```

## 🔧 Configuration

### Database Models
- **User**: Student/Instructor profiles with authentication
- **Course**: Course information, content, and metadata
- **Section**: Course sections and organization
- **SubSection**: Individual video lectures and materials
- **Category**: Course categorization
- **Profile**: Extended user profile information
- **CourseProgress**: Learning progress tracking
- **RatingAndReview**: Course feedback system

### API Endpoints
- `/api/v1/auth` - Authentication routes
- `/api/v1/profile` - User profile management
- `/api/v1/course` - Course operations
- `/api/v1/payment` - Payment processing
- `/api/v1/reach` - Contact and communication

## 🎯 Usage

### For Students
1. Sign up and verify your email
2. Browse available courses
3. Add courses to cart and make payments
4. Access enrolled courses and track progress
5. Rate and review completed courses

### For Instructors
1. Create instructor account
2. Build courses with sections and video content
3. Set pricing and publish courses
4. Monitor student enrollments and progress
5. View earnings and analytics

### For Admins
1. Access admin dashboard
2. Manage users and courses
3. Monitor platform analytics
4. Handle customer support requests

## 🐛 Troubleshooting

### Common Issues

**Port already in use**
```bash
# Kill process on port 3000 (Windows)
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Kill process on port 4000
netstat -ano | findstr :4000
taskkill /PID <PID> /F
```

**MongoDB connection issues**
- Ensure MongoDB is running
- Check your DATABASE_URL in the .env file
- Verify network connectivity

**Cloudinary upload failures**
- Verify your Cloudinary credentials
- Check file size limits
- Ensure proper file formats

**Payment issues**
- Verify Razorpay credentials
- Test with Razorpay test keys first
- Check webhook configurations

## 🚀 Deployment

### Frontend (Vercel)
1. Connect your GitHub repository to Vercel
2. Configure environment variables
3. Deploy with automatic builds

### Backend (Railway/Heroku)
1. Create new project on your preferred platform
2. Set environment variables
3. Configure build and start commands
4. Deploy with database connection

### Environment Variables for Production
Ensure all production environment variables are properly configured with actual values (not test/development keys).

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
5. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
6. **Open a Pull Request**

### Development Guidelines
- Follow existing code style and conventions
- Add comments for complex logic
- Test your changes thoroughly
- Update documentation as needed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

- **Documentation**: Check this README and inline code comments
- **Issues**: Report bugs via GitHub Issues
- **Contact**: Reach out through the contact form in the application

## 🙏 Acknowledgments

- **React Team** - For the amazing React framework
- **Tailwind CSS** - For the utility-first CSS framework
- **MongoDB** - For the flexible NoSQL database
- **Cloudinary** - For reliable media management
- **Razorpay** - For seamless payment integration
