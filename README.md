# Resumatch

Resumatch is a modern web application that helps job seekers optimize their resumes through AI-powered analysis and feedback. Get detailed insights about your resume's ATS compatibility, content quality, and improvement suggestions.

## Features

- 🤖 **AI-Powered Resume Analysis**
  - ATS (Applicant Tracking System) compatibility scoring
  - Detailed feedback on content, structure, and formatting
  - Actionable improvement suggestions

- 📊 **Comprehensive Scoring**
  - Overall resume score
  - Tone & Style evaluation
  - Content quality assessment
  - Structure analysis
  - Skills matching

- 🎯 **Job-Specific Feedback**
  - Tailored analysis based on job description
  - Company and role-specific recommendations
  - Skill gap identification

- � **User-Friendly Interface**
  - Modern, responsive design
  - Intuitive file upload
  - Visual score representation
  - PDF preview support

## Tech Stack

- **Frontend**
  - React with TypeScript
  - React Router v7 for routing
  - TailwindCSS for styling
  - Zustand for state management

- **Core Features**
  - PDF.js for PDF processing
  - React Dropzone for file uploads
  - Puter.js for AI integration
  - Docker support for deployment

## Getting Started

### Prerequisites

- Node.js 20 or higher
- npm or yarn package manager


### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd resumatch
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

### Building for Production

Create a production build:

```bash
npm run build
```

## Environment Setup

The application requires the following environment variables:

- Puter.js API configuration (will be initialized automatically in the application)

## Project Structure

```
├── app/
│   ├── components/    # Reusable UI components
│   ├── constants/     # Application constants
│   ├── lib/          # Utility functions and helpers
│   ├── routes/       # Application routes
│   └── types/        # TypeScript type definitions
├── public/           # Static assets
└── types/           # Global type definitions
```

## Key Features in Detail

### Resume Analysis

- **ATS Compatibility**: Analyzes how well your resume performs with Applicant Tracking Systems
- **Content Analysis**: Evaluates the quality and relevance of your resume content
- **Structure Review**: Checks the organization and formatting of your resume
- **Skills Assessment**: Analyzes the match between your skills and job requirements

### Visual Feedback

- Score gauges and badges
- Color-coded feedback indicators
- Interactive accordion sections for detailed feedback
- PDF preview with image conversion




