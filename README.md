# Job Board Connect

A modern, responsive job board platform built with HTML, CSS (Bootstrap 5), and JavaScript.

## 📁 Project Structure

```
job-board-connect/
├── index.html          # Homepage with hero, search, featured jobs
├── jobs.html           # Job listings with filters
├── job-details.html    # Individual job page
├── post-job.html       # Employer job posting form
├── employers.html      # Employer landing page with pricing
├── about.html          # About us page
├── contact.html        # Contact form and info
├── login.html          # User authentication page
└── README.md          # This file
```

## 🚀 Features

### For Job Seekers
- **Job Search** - Quick search with keywords, location, and category filters
- **Browse Jobs** - Advanced filtering by job type, experience level, salary range, and date posted
- **Job Details** - Comprehensive job descriptions with requirements, benefits, and company information
- **Save Jobs** - Bookmark favorite opportunities
- **Apply Online** - One-click application process

### For Employers
- **Post Jobs** - Easy-to-use job posting form
- **Pricing Plans** - Flexible packages (Basic, Professional, Enterprise)
- **Candidate Management** - Review and filter applications
- **Featured Listings** - Boost visibility for important roles
- **Analytics** - Track job performance (Enterprise plan)

## 🎨 Design Features

- **Fully Responsive** - Mobile-first design that works on all devices
- **Modern UI** - Clean, professional interface with smooth animations
- **Bootstrap 5** - Utilizes Bootstrap's grid system and components
- **AOS Animations** - Smooth scroll animations for enhanced UX
- **Icon Library** - Bootstrap Icons for consistent iconography

## 📋 Pages Overview

### 1. Homepage (`index.html`)
- Hero section with job search
- Stats overview (jobs, companies, candidates)
- Featured jobs showcase
- Job categories
- How it works section
- Call-to-action

### 2. Jobs Listing (`jobs.html`)
- Advanced search and filters
- Job cards with key information
- Sorting options
- Pagination
- Sidebar filters (type, experience, salary, date)

### 3. Job Details (`job-details.html`)
- Full job description
- Key responsibilities
- Requirements
- Benefits & perks
- Company information
- Similar jobs
- Share functionality
- Application options

### 4. Post a Job (`post-job.html`)
- Comprehensive job posting form
- Job information section
- Location details
- Company information
- Application settings
- Helpful sidebar with benefits

### 5. For Employers (`employers.html`)
- Value proposition
- How it works for employers
- Pricing plans comparison
- Customer testimonials
- Call-to-action

### 6. About Us (`about.html`)
- Mission and vision
- Company statistics
- Core values
- Team members
- Company culture

### 7. Contact (`contact.html`)
- Contact form
- Office information
- Social media links
- Google Maps integration
- Working hours

### 8. Login (`login.html`)
- Email/password authentication
- Remember me option
- Forgot password link
- Social login options (Google, LinkedIn)
- Sign up link

## 🔧 Technology Stack

- **HTML5** - Semantic markup
- **CSS3** - Custom styles
- **Bootstrap 5** - Responsive framework
- **JavaScript** - Interactive functionality
- **Bootstrap Icons** - Icon library
- **AOS (Animate On Scroll)** - Scroll animations
- **Google Fonts** - Inter font family

## 🌐 External Dependencies

All dependencies are loaded from the parent NIP project's assets folder:

```
../assets/vendors/bootstrap/bootstrap.bundle.min.js
../assets/vendors/bootstrap-icons/font/bootstrap-icons.min.css
../assets/vendors/aos/aos.js
../assets/css/style.css
```

## 🎯 Key Features

### Navigation
- Responsive navbar with mobile menu
- Sticky header on scroll
- Consistent across all pages
- Call-to-action buttons (Sign In, Post a Job)

### Forms
- Client-side validation
- User-friendly labels
- Helpful placeholders
- Error handling
- Success messages

### Cards & Components
- Job cards with hover effects
- Company logos
- Badge indicators (Full Time, Part Time, etc.)
- Salary ranges
- Location information
- Date posted

### Interactivity
- Smooth scroll animations
- Hover effects
- Back to top button
- Modal dialogs
- Dropdown menus
- Form validation

## 📱 Responsive Design

The platform is fully responsive with breakpoints for:
- **Mobile** - Single column layout
- **Tablet** - 2-column grid
- **Desktop** - 3-4 column grid
- **Large screens** - Optimized spacing

## 🎨 Color Scheme

- **Primary** - #2563eb (Blue)
- **Secondary** - #10b981 (Green)
- **Dark** - #1e293b
- **Light** - #f8f9fa
- **Success** - #10b981
- **Warning** - #f59e0b
- **Danger** - #ef4444

## 📂 How to Use

1. **Setup**
   - Ensure the NIP project assets are available in the parent directory
   - Open `index.html` in a web browser

2. **Navigation**
   - All links between pages are functional
   - Use the navigation menu to browse different sections

3. **Forms**
   - Forms are currently static (HTML only)
   - To enable functionality, add backend processing (PHP/JavaScript)

4. **Customization**
   - Modify colors in the `<style>` sections
   - Update content in HTML files
   - Add your own images and branding

## 🔄 Next Steps (For PHP Integration)

To convert this to a fully functional job board:

1. **Database Setup**
   - Create MySQL database
   - Add tables: jobs, companies, users, applications
   
2. **Backend Processing**
   - Convert forms to PHP
   - Add authentication system
   - Implement CRUD operations
   
3. **Features to Add**
   - User registration/login
   - Job application tracking
   - Employer dashboard
   - Candidate profiles
   - Resume upload
   - Email notifications
   - Payment integration

## 📧 Support

For questions or issues, contact:
- Email: info@jobboardconnect.co.ke
- Phone: +254 700 123 456

## 📄 License

This project is designed as a template for job board platforms.

---

**Built with ❤️ using Bootstrap 5 and modern web standards**
