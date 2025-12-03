# Scrap Yard

A comprehensive React-based web application for scrap yard management, built with modern technologies to provide a seamless user experience for buying and selling scrap materials. The application features user authentication, blog management, contact forms, and responsive design.

## Features

### User Authentication & Management

- **Secure Registration**: User registration with comprehensive form validation using Zod schema validation and React Hook Form.
- **Login System**: User login with JWT token-based authentication, storing credentials in Redux state.
- **User Profiles**: My Account page for managing user information and transaction history.
- **Role-based Access**: Support for different user roles (buyers/sellers) with appropriate permissions.

### Content Management

- **Blogs System**: Comprehensive blog platform with 6 detailed articles covering environmental impact, scrap monetization, household items, recycling innovations, success stories, and recycling importance. Features rich content display with structured articles, images, and navigation.
- **Products Section**: Comprehensive product management with a listing page displaying scrap yard products in a responsive grid layout, including images, titles, descriptions, and prices. Individual product detail pages provide full product information and navigation back to the product listing.
- **About Us**: Information page about the scrap yard business.
- **Contact Us**: Interactive contact form with email sending capability using EmailJS.

### Technical Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS for consistent UI across devices.
- **Client-side Routing**: Multi-page application with React Router DOM for seamless navigation.
- **State Management**: Global state handling with Redux Toolkit and RTK Query for API interactions.
- **Form Handling**: Advanced form validation and submission with React Hook Form and Zod.
- **Error Handling**: Custom 404 Not Found page for invalid routes.
- **Email Integration**: Contact form submissions sent via EmailJS service.

## Tech Stack & Usage

### Frontend Framework

- **React 19**: Latest version of React for building the user interface with modern hooks and concurrent features.
- **Vite**: Fast build tool and development server for React applications, providing hot module replacement and optimized production builds.

### Styling & UI

- **Tailwind CSS**: Utility-first CSS framework for rapid UI development and responsive design. Used throughout the application for consistent styling, dark mode support, and custom gradients.

### State Management & API

- **Redux Toolkit**: Simplified Redux implementation for global state management, including user authentication state and app-wide data.
- **RTK Query**: Part of Redux Toolkit for efficient API data fetching, caching, and synchronization. Used for user authentication endpoints (login, register).

### Routing & Navigation

- **React Router DOM**: Declarative routing for React applications. Configured with nested routes and protected routes for authenticated sections.

### Forms & Validation

- **React Hook Form**: Performant forms with easy validation. Used for login and registration forms with minimal re-renders.
- **Zod**: TypeScript-first schema validation library. Defines validation schemas for form data with detailed error messages.

### Additional Libraries

- **EmailJS**: Client-side email sending service. Integrated in the contact form to send user inquiries directly to business email.
- **ESLint**: Code linting and formatting for maintaining code quality and consistency.

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/alihamza-12/Scrap-Yard
   cd scrap-yard
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Environment Setup** (if needed):

   - Configure EmailJS credentials in the contact form component
   - Set up API endpoints for authentication if using external services

4. **Start the development server**:

   ```bash
   npm run dev
   ```

5. **Access the application**:
   Open your browser and navigate to `http://localhost:5173` (default Vite port).

## Project Structure & File Descriptions

```
Scrap Yard/
├── public/
│   └── vite.svg                    # Default Vite logo asset
├── src/
│   ├── assets/                     # Static assets for the application
│   │   ├── about.jpg              # About page background image
│   │   ├── banner.jpg             # Main banner image
│   │   ├── banner.webp            # WebP format banner for optimization
│   │   ├── banner2.png            # Secondary banner image
│   │   ├── contact-us.jpg         # Contact page background
│   │   ├── env.jpg                # Environmental image
│   │   ├── envPic.jpg             # Environmental picture
│   │   ├── household.jpg          # Household scrap image
│   │   ├── scrap_to_cash.jpg      # Main branding image
│   │   ├── view-bg.jpg            # Background image for views
│   │   └── blogs/                 # Blog-specific images
│   │   │   ├── bg1.jpg            # Background image for blog 1
│   │   │   ├── bg2.jpg            # Background image for blog 2
│   │   │   ├── bg3.jpg            # Background image for blog 3
│   │   │   ├── bg4.jpg            # Background image for blog 4
│   │   │   ├── bg5.jpg            # Background image for blog 5
│   │   │   └── bg6.png            # Background image for blog 6
│   │   └── Slider/                # Slider images for homepage
│   │       ├── 1.jpg to 10.png    # Slider images
│   ├── components/                # Reusable UI components
│   │   ├── AppLayOut/
│   │   │   └── AppLayOut.jsx      # Main application layout wrapper containing Header, Navbar, Footer, and page outlet
│   │   ├── Blogs/
│   │   │   └── BlogsComponent.jsx # Blogs listing component
│   │   ├── ContactUsForm/
│   │   │   ├── ContactUsForm.jsx  # Main contact form component with EmailJS integration
│   │   │   └── ContactUsFormFooter.jsx  # Footer section of contact form
│   │   ├── Footer/
│   │   │   ├── Footer.jsx         # Main footer component
│   │   │   ├── FooterCopyRight.jsx # Copyright notice section
│   │   │   ├── FooterHeader.jsx   # Footer header with branding
│   │   │   └── FooterNav.jsx      # Footer navigation links
│   │   ├── Header/
│   │   │   ├── Header.jsx         # Top header component
│   │   │   └── Navbar.jsx         # Main navigation bar with routing links
│   │   ├── HomeHeroSection/
│   │   │   └── HeroSection.jsx    # Hero section for homepage
│   │   ├── images/                # Component-specific images
│   │   │   ├── banner3.png        # Additional banner image
│   │   │   ├── logo.png           # Application logo
│   │   │   ├── view-bg.jpg        # Background for image views
│   │   │   ├── blogs/             # Blog images (duplicated from assets)
│   │   │   │   ├── bg1.jpg        # Blog background 1
│   │   │   │   ├── bg2.jpg        # Blog background 2
│   │   │   │   ├── bg3.jpg        # Blog background 3
│   │   │   │   ├── bg4.jpg        # Blog background 4
│   │   │   │   ├── bg5.jpg        # Blog background 5
│   │   │   │   └── bg6.png        # Blog background 6
│   │   │   ├── footer/            # Footer-specific images
│   │   │   │   ├── buyer-icon.png # Buyer role icon
│   │   │   │   ├── download.jpeg  # Download icon
│   │   │   │   ├── instagram.webp # Instagram social icon
│   │   │   │   ├── seller-icon.png # Seller role icon
│   │   │   │   ├── twitter.webp   # Twitter social icon
│   │   │   │   ├── whatsapp.png   # WhatsApp icon
│   │   │   │   ├── whatsapp2.jpg  # Alternative WhatsApp icon
│   │   │   │   └── youtube.jpeg   # YouTube icon
│   │   │   └── social/            # Social media icons
│   │   │       ├── insta.png      # Instagram icon
│   │   │       ├── insta.svg      # Instagram SVG icon
│   │   │       └── linkedin.png   # LinkedIn icon
│   │   ├── NotFound/
│   │   │   └── NotFound.jsx       # 404 error page component
│   │   ├── PagesLayout/
│   │   │   └── PageLayOut.jsx     # Layout wrapper for specific pages
│   │   ├── Products/
│   │   │   └── ProductsComponent.jsx # Products listing component
│   │   └── UserProfile/
│   │       └── UserProfile.jsx    # User profile display component
│   ├── data/                      # Static data files
│   │   ├── data.js               # Blog data and other static content
│   │   └── data.json             # JSON format of static data
│   ├── hooks/                    # Custom React hooks
│   │   ├── useLoginForm.js       # Custom hook for login form logic with validation and API calls
│   │   └── useRegisterForm.js    # Custom hook for registration form logic
│   ├── pages/                    # Page components for routing
│   │   ├── AboutUs.jsx           # About Us page content
│   │   ├── Blogs.jsx             # Blogs listing page with grid layout
│   │   ├── BlogsDetail.jsx       # Detailed blog post page with 6 comprehensive articles on environmental impact, scrap monetization, household items, recycling innovations, success stories, and recycling importance. Features structured content with images, headings, and navigation.
│   │   ├── ContactUs.jsx         # Contact Us page with form
│   │   ├── Home.jsx              # Landing/home page
│   │   ├── Login.jsx             # User login page
│   │   ├── MyAccount.jsx         # User account management page
│   │   ├── ProductDetail.jsx     # Individual product detail page with full product information, image, description, and price
│   │   ├── Products.jsx          # Products listing page displaying scrap yard products in a responsive grid with images, titles, descriptions, and prices
│   │   └── Register.jsx          # User registration page
│   ├── App.jsx                   # Main application component with routing configuration
│   ├── index.css                 # Global CSS styles and Tailwind imports
│   └── main.jsx                  # Application entry point, renders App with Redux Provider
├── store/                        # Redux state management
│   ├── appStore.js               # Redux store configuration with RTK Query middleware
│   ├── apiSlice/
│   │   └── userSlice.js          # RTK Query API slice for user authentication endpoints
│   └── slices/
│       └── authSlice.js          # Redux slice for authentication state management
├── .gitignore                    # Git ignore rules for Node.js and Vite
├── eslint.config.js              # ESLint configuration for code linting
├── index.html                    # Main HTML template with root div
├── package.json                  # Project dependencies, scripts, and metadata
├── package-lock.json             # Lockfile for exact dependency versions
├── README.md                     # This documentation file
└── vite.config.js                # Vite build configuration and plugins
```

## API Integration & Data Management

### Authentication Flow

- **Registration**: Users submit form data validated by Zod schema, sent via RTK Query mutation to backend API
- **Login**: Credentials validated and JWT token received, stored in Redux state for authenticated requests
- **State Persistence**: User data and tokens managed through Redux slices for app-wide access

### Blog System

- **Static Data**: Blog content loaded from `src/data/data.js` with images from assets folder
- **Dynamic Routing**: Individual blog posts accessed via `/blogs/:id` route
- **Responsive Display**: Grid layout adapting to different screen sizes

### Products System

- **Dynamic Data**: Product listings fetched from API using RTK Query for real-time data
- **Product Details**: Individual product pages accessed via dynamic routing `/product/:id`
- **Responsive Display**: Grid and detail layouts adapting to different screen sizes with hover effects and transitions

### Contact Form

- **EmailJS Integration**: Form submissions sent directly to business email without backend
- **Validation**: Client-side validation before sending emails
- **User Feedback**: Success/error messages for form submission status

## Usage

1. **Navigation**: Use the navbar to navigate between Home, Products, Blogs, About Us, and Contact Us pages
2. **User Registration**: Visit `/register` to create a new account with form validation
3. **Authentication**: Login at `/login` to access protected features
4. **Blog Reading**: Browse 6 comprehensive blog articles on `/blogs` covering environmental impact, scrap monetization, household items, recycling innovations, success stories, and recycling importance. Click "Read More" for detailed structured content with images and navigation.
5. **Product Browsing**: View available scrap yard products on `/products` with a responsive grid display. Click "View Product" on any item to access detailed information including full description and pricing.
6. **Contact**: Use the contact form on `/contact-us` to send inquiries
7. **Account Management**: Access `/my-account` for user profile and transaction history

## Scripts

- `npm run dev`: Start the Vite development server with hot reload
- `npm run build`: Build the application for production deployment
- `npm run lint`: Run ESLint to check code quality and style
- `npm run preview`: Preview the production build locally before deployment

## Development Notes

- **Dark Theme**: Application uses a black background (`bg-black` in App.jsx) with Tailwind's dark mode classes
- **Responsive Design**: All components are built mobile-first with responsive breakpoints
- **Blog Content**: Comprehensive blog system with 6 detailed articles on scrap yard and recycling topics
- **Performance**: Vite provides fast development and optimized production builds
- **Code Quality**: ESLint ensures consistent code style across the project

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the MIT License.
