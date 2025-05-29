# Interview Sensei - AI-Powered Mock Interview Platform

## 🚀 Description

**Interview Sensei** is a sophisticated AI-powered mock interview platform designed to help job seekers master their interview skills and land their dream jobs. Built with modern technologies including Next.js 14, shadcn/ui, Google Gemini AI, PostgreSQL, and Drizzle ORM, it provides an immersive and personalized interview preparation experience.

## ✨ Key Features

### 🤖 AI-Driven Interview Generation

- **Personalized Questions**: AI generates custom interview questions based on job position, description, and experience level
- **Real-time Feedback**: Instant AI-powered analysis of your responses with detailed insights
- **Adaptive Difficulty**: Questions tailored to your experience level for optimal challenge

### 🎥 Interactive Interview Experience

- **Webcam Integration**: Record video responses for comprehensive practice
- **Speech-to-Text**: Automatic transcription of spoken answers
- **Real-time Analysis**: Live feedback on communication skills and content quality

### 📊 Comprehensive Analytics

- **Performance Tracking**: Monitor improvement across multiple interview sessions
- **Detailed Reports**: In-depth analysis of strengths, weaknesses, and areas for improvement
- **Rating System**: Numerical scoring for each response and overall performance
- **Progress Dashboard**: Visual representation of your interview journey

### 🎨 Modern User Experience

- **Dark/Light Mode**: Seamless theme switching for comfortable usage
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Intuitive Interface**: Clean, professional UI built with shadcn/ui components
- **Smooth Animations**: Enhanced user experience with Framer Motion

### 🔐 Secure & Reliable

- **User Authentication**: Secure login and registration via Clerk
- **Data Privacy**: Protected user data and interview records
- **Session Management**: Persistent user sessions across devices

## 🛠️ Tech Stack

### Frontend

- **Next.js 14** - React framework with App Router
- **React 18** - Modern React with hooks and concurrent features
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Modern, accessible UI component library
- **Framer Motion** - Animation library for smooth interactions
- **React Icons** - Comprehensive icon library
- **next-themes** - Dark/Light mode implementation

### Backend & Database

- **PostgreSQL** - Robust relational database
- **Drizzle ORM** - Type-safe database toolkit
- **Neon Database** - Serverless PostgreSQL platform

### AI & Integration

- **Google Gemini AI** - Advanced AI for question generation and feedback
- **React Webcam** - Video recording capabilities
- **React Hook Speech-to-Text** - Voice-to-text conversion
- **UUID** - Unique identifier generation

### Authentication & Security

- **Clerk** - Complete authentication and user management
- **Middleware** - Route protection and session handling

### Development Tools

- **TypeScript** - Type safety and better development experience
- **ESLint** - Code linting and quality assurance
- **Tailwind Merge** - Efficient class name merging
- **Lucide React** - Beautiful icon set

## 🏗️ Project Structure

```
Interview Sensei/
├── app/                          # Next.js App Router
│   ├── (auth)/                   # Authentication routes
│   │   ├── sign-in/              # Sign in page
│   │   └── sign-up/              # Sign up page
│   ├── dashboard/                # Main dashboard
│   │   ├── _components/          # Dashboard components
│   │   ├── interview/            # Interview management
│   │   │   └── [interviewId]/    # Dynamic interview routes
│   │   │       ├── feedback/     # Interview feedback
│   │   │       └── start/        # Interview session
│   │   ├── question/             # Question bank
│   │   ├── upgrade/              # Pricing plans
│   │   └── howit/                # How it works
│   ├── _components/              # Shared components
│   ├── globals.css               # Global styles
│   ├── layout.js                 # Root layout
│   └── page.js                   # Landing page
├── components/                   # Reusable UI components
│   ├── ui/                       # shadcn/ui components
│   ├── ModeToggle.jsx            # Theme switcher
│   └── ThemeProvider.tsx         # Theme context
├── utils/                        # Utility functions
│   ├── db.js                     # Database connection
│   ├── schema.js                 # Database schema
│   └── GeminiAIModal.js          # AI integration
└── lib/                          # Helper libraries
    └── utils.js                  # Utility functions
```

## 📱 Core Features Breakdown

### 1. Dashboard Overview

- **Quick Stats**: Visual cards showing AI interviews, progress tracking, and feedback insights
- **Recent Interviews**: Easy access to past interview sessions
- **Performance Analytics**: Comprehensive view of improvement metrics

### 2. Interview Creation Flow

- **Job Details Form**: Input job position, description, and experience level
- **AI Question Generation**: Automatic creation of relevant interview questions
- **Session Setup**: Configure webcam and audio settings

### 3. Interview Experience

- **Question Presentation**: Clear, professional question display
- **Video Recording**: Record responses with webcam integration
- **Real-time Transcription**: Automatic speech-to-text conversion
- **Progress Tracking**: Visual progress through interview questions

### 4. Feedback & Analysis

- **Detailed Feedback**: AI-generated insights for each response
- **Performance Ratings**: Numerical scores and grades
- **Improvement Suggestions**: Actionable recommendations
- **Historical Comparison**: Track progress over time

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager
- PostgreSQL database
- Google Gemini API key
- Clerk authentication account

### Installation Steps

1. **Clone the Repository**

   ```bash
   git clone https://github.com/Akshat-Jaiswal-8/interview-sensei.git
   cd interview-sensei
   ```

2. **Install Dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Setup**
   Create a `.env.local` file with the following variables:

   ```env
   # Database
   DATABASE_URL="your_postgresql_connection_string"

   # Clerk Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your_clerk_publishable_key"
   CLERK_SECRET_KEY="your_clerk_secret_key"
   NEXT_PUBLIC_CLERK_SIGN_IN_URL="/sign-in"
   NEXT_PUBLIC_CLERK_SIGN_UP_URL="/sign-up"

   # Google Gemini AI
   NEXT_PUBLIC_GEMINI_API_KEY="your_gemini_api_key"
   ```

4. **Database Setup**

   ```bash
   # Push database schema
   npm run db:push

   # Optional: Open database studio
   npm run db:studio
   ```

5. **Start Development Server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. **Access the Application**
   Open [http://localhost:3000](http://localhost:3000) in your browser

## 📋 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality
- `npm run db:push` - Push database schema changes
- `npm run db:studio` - Open Drizzle Studio for database management

## 🔧 Configuration

### Database Schema

The application uses four main tables:

- **MockInterview** - Interview session data
- **UserAnswer** - User responses and feedback
- **Question** - Question bank for different interview types
- **Newsletter** - Contact form submissions

### AI Integration

- Utilizes Google Gemini AI for question generation and response analysis
- Configurable safety settings and generation parameters
- Real-time feedback processing

## 🌟 Recent Improvements

- ✅ Enhanced dark mode support with proper color variables
- ✅ Modern dashboard design with gradient cards and animations
- ✅ Improved mobile responsiveness across all components
- ✅ Better user experience with loading states and transitions
- ✅ Professional UI overhaul using shadcn/ui components

## 🚀 Future Enhancements

- 📹 Advanced video analysis with body language assessment
- 🏢 Industry-specific question templates
- 👥 Group interview simulations
- 📱 Native mobile application
- 🔗 Integration with job boards and ATS systems
- 📊 Advanced analytics and reporting features

## 🤝 Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues for bugs and feature requests.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Google Gemini AI for powerful AI capabilities
- Clerk for seamless authentication
- shadcn/ui for beautiful component library
- Vercel for hosting and deployment platform

---

**Interview Sensei** - Master Your Interviews with AI 🎯

## Technologies Used

- Next.js: A React framework for building server-side rendered and static web applications.
- Gemini API: Provides an interface for accessing the AI interview functionalities.
- PostgreSQL: A powerful, open-source object-relational database system.
- Neon Serverless: A serverless deployment for PostgreSQL, offering scalability and ease of use.
- Drizzle ORM: An ORM that makes database interactions simpler and more intuitive.

## Usage

To use the AI-Powered Mock Interview Platform, follow these guidelines:

- Create an Account: Sign up to start your mock interview sessions.
- Choose Interview Type: Select the type of interview (e.g., technical, behavioral) and job role
- Start Interview: Begin your mock interview and respond to the AI-generated questions.
- Receive Feedback: After completing the interview, get detailed feedback and insights to improve.
- Review Recent Interviews: Access your most recent interviews directly from the home page for quick review and continued improvement.

## Feedback

If you have any feedback, please reach me at [mohamedamaan319@gmail.com](mailto:mohamedamaan319@gmail.com) or connect with me on [LinkedIn](https://www.linkedin.com/in/mohamedamaan319/).

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork this repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them to your branch.
4. Push your changes to your forked repository.
5. Submit a pull request to the main repository.

## Support

Show your support by 🌟 the project!!
