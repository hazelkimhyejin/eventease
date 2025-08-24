EventEase Frontend















Overview

EventEase is a modern ticketing platform built with React and Tailwind CSS, designed to deliver a seamless experience for Ticket Purchasers, Organisers, and Administrators. The frontend supports role-specific entry points, event browsing, user registration with OTP verification, and a search bar for discovering events and organizers. This project serves as the capstone for a comprehensive ticketing solution, using a mock backend for demo purposes as of August 25, 2025.

Features

Role-Specific Entry Points:
Ticket Purchaser: Register or log in to browse and purchase event tickets.
Organiser: Register or log in to create and manage events.
Administrator: Register or log in to manage organizers and monitor fraud.
Search Functionality: A header search bar enables all users to search for events and organizers, with unauthenticated users redirected to login.
OTP Verification: Secure registration with mock OTP sent to email, verified via a dedicated UI.
Footer Content: Links to About, Contact, and Terms pages, with Admin Support for administrators.
Responsive Design: Styled with Tailwind CSS for a modern, accessible, and responsive UI across devices.
Error Handling: Robust error boundaries catch runtime issues, ensuring a smooth user experience.

Tech Stack

Category
Technology
Frontend
React 18.2.0, React Router 6.16.0
Styling
Tailwind CSS 3.4.14
Build Tool
Vite 5.4.8
Node.js
v22.18.0
Dependencies



PostCSS 8.4.47, Autoprefixer 10.4.20, ESLint 9.11.1

Project Structure

eventease-frontend/
├── public/
│   ├── favicon.ico
│   └── index.html
├── src/
│   ├── assets/
│   │   ├── images/
│   │   │   └── placeholder.jpg
│   │   └── fonts/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── EventCard.jsx
│   │   │   └── ErrorBoundary.jsx
│   │   ├── auth/
│   │   │   ├── RegisterForm.jsx
│   │   │   ├── LoginForm.jsx
│   │   │   └── OTPVerification.jsx
│   │   ├── purchaser/
│   │   │   ├── SeatSelector.jsx
│   │   │   ├── TicketViewer.jsx
│   │   │   ├── ProfileForm.jsx
│   │   │   ├── OrderHistory.jsx
│   │   │   ├── Socials.jsx
│   │   │   └── ChatInterface.jsx
│   │   ├── organiser/
│   │   │   ├── EventForm.jsx
│   │   │   └── SalesAnalytics.jsx
│   │   ├── admin/
│   │   │   ├── UserManagement.jsx
│   │   │   └── FraudMonitor.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Register.jsx
│   │   ├── Login.jsx
│   │   ├── OTPVerify.jsx
│   │   ├── PurchaserDashboard.jsx
│   │   ├── OrganiserDashboard.jsx
│   │   ├── AdminDashboard.jsx
│   │   ├── EventDetails.jsx
│   │   ├── SearchResults.jsx
│   │   ├── PurchaserPage.jsx
│   │   ├── OrganiserPage.jsx
│   │   ├── AdminPage.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   └── Terms.jsx
│   ├── styles/
│   │   ├── index.css
│   │   └── tailwind.config.js
│   ├── utils/
│   │   ├── api.js
│   │   ├── auth.js
│   │   └── helpers.js
│   ├── App.jsx
│   └── main.jsx
├── .gitignore
├── package.json
├── postcss.config.cjs
├── vite.config.js
└── README.md

Setup Instructions

Prerequisites

Node.js: v22.18.0
npm: v10.x.x
Terminal: PowerShell or equivalent

Installation

Clone the Repository (if using version control):

git clone <repository-url>
cd eventease-frontend

Install Dependencies:
npm install

Run the Development Server:
npm run dev

Open http://localhost:3000 in your browser.

Build for Production:
npm run build

Preview Production Build:
npm run preview

Testing the Application
OTP Flow
Navigate to /register/purchaser, enter name, email (e.g., test@example.com), password, and submit.
Check browser console for Sending OTP to test@example.com for purchaser registration.
Redirects to /otp-verify/purchaser?email=test@example.com. Enter 123456 to simulate OTP verification, then redirect to /login/purchaser.

Search Bar
At /, enter “concert” in the navbar search bar. Unauthenticated users redirect to /login/purchaser?redirect=/search?q=concert.
Temporarily set isAuthenticated: true and getUserRole: 'purchaser' in src/utils/auth.js to test search results at /search?q=concert.

Routes
Test the following routes:

/purchaser
/organiser
/admin
/register/:role
/login/:role
/otp-verify/:role
/event/1
/about
/contact
/terms
/logout
/dashboard
Styling
Tailwind CSS: Configured in src/styles/tailwind.config.js with custom colors (primary, accent.purchaser), shadows, and font sizes.
Custom Classes: Defined in src/styles/index.css (e.g., btn-primary, input-field, card, purchaser-accent) for consistent styling across Navbar.jsx, Footer.jsx, EventCard.jsx, RegisterForm.jsx, and OTPVerification.jsx.
Accessibility: Includes aria-label, high-contrast colors, and :focus-visible outlines for screen reader support and keyboard navigation.

Known Issues and Resolutions
PostCSS Error: Resolved by renaming postcss.config.js to postcss.config.cjs to support CommonJS in an ES Module project ("type": "module").
Missing Exports: Fixed import/export issues in auth.js, Terms.jsx, Register.jsx, Login.jsx, and OTPVerify.jsx.
Routing Errors: Added /logout and /dashboard routes in App.jsx to handle navigation issues.

Future Enhancements
Backend Integration: Replace mock auth.js and api.js functions with a Node.js/Express backend for real OTP email sending (e.g., Nodemailer), user management, and event data.
Advanced Search: Add filters (e.g., category, date) to SearchResults.jsx.
Accessibility: Enhance WCAG compliance with additional ARIA attributes and contrast checks.

Contact
For support, email support@eventease.com or visit /contact.
