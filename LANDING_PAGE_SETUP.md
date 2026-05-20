# Hospital Landing Page - Setup Instructions

## Overview
I've successfully extracted all components from the Figma Design folder and created a complete React landing page for the Shlok Hospital project.

## What's Been Created

### Components Created (15 components):
1. **Navbar** - Navigation bar with mobile menu
2. **Hero** - Main hero section with CTA buttons
3. **About** - About section with hospital information
4. **Departments** - 14 specialist departments grid
5. **Doctors** - Doctor profiles with filtering
6. **Facilities** - Hospital facilities showcase
7. **WhyChooseUs** - Key benefits section
8. **Treatments** - Medical treatments and procedures
9. **BedAdmission** - Patient accommodation details
10. **HealthPackages** - Health checkup packages
11. **EmergencyCTA** - Emergency contact section
12. **Testimonials** - Patient reviews
13. **Location** - Location map and contact info
14. **ContactForm** - Appointment booking form
15. **Footer** - Footer with links and information

### Utility Components:
- **ImageWithFallback** - Image component with error handling

### Main Component:
- **LandingPage** - Combines all components together

## Installation Steps

### 1. Install Required Dependencies

Run the following command in your project root:

```bash
npm install lucide-react tailwindcss postcss autoprefixer
```

### 2. Initialize Tailwind CSS

```bash
npx tailwindcss init -p
```

### 3. Configure Tailwind CSS

Update your `tailwind.config.js` file:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0F4C81',
          dark: '#0d3d66',
        },
        secondary: {
          DEFAULT: '#2BB3A3',
          dark: '#249a8b',
        },
        accent: {
          DEFAULT: '#E63946',
          dark: '#d32f3c',
        },
      },
    },
  },
  plugins: [],
}
```

### 4. Update src/index.css

Replace the content with Tailwind directives:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
```

### 5. Start the Development Server

```bash
npm start
```

## File Structure

```
src/
├── components/
│   ├── utils/
│   │   └── ImageWithFallback.jsx
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Departments.jsx
│   ├── Doctors.jsx
│   ├── Facilities.jsx
│   ├── WhyChooseUs.jsx
│   ├── Treatments.jsx
│   ├── BedAdmission.jsx
│   ├── HealthPackages.jsx
│   ├── EmergencyCTA.jsx
│   ├── Testimonials.jsx
│   ├── Location.jsx
│   ├── ContactForm.jsx
│   ├── Footer.jsx
│   └── LandingPage.jsx
├── App.js (updated)
└── index.css (needs Tailwind directives)
```

## Features

### Design Features:
- Fully responsive design
- Modern gradient backgrounds
- Smooth animations and transitions
- Interactive components
- Mobile-friendly navigation

### Sections:
- Hero section with stats
- About hospital
- 14 department cards
- Doctor profiles with filters
- Facilities showcase
- Why choose us section
- Treatments and procedures
- Bed admission information
- Health packages with pricing
- Emergency CTA banner
- Patient testimonials
- Location with Google Maps
- Contact form
- Comprehensive footer

### Icons:
Using `lucide-react` for all icons

### Color Scheme:
- Primary Blue: #0F4C81
- Secondary Teal: #2BB3A3
- Accent Red: #E63946
- Neutrals: Gray scale

## Next Steps

1. Install dependencies
2. Configure Tailwind CSS
3. Update index.css with Tailwind directives
4. Run `npm start`
5. Customize content as needed
6. Add backend integration for forms
7. Update images URLs as needed

## Notes

- All components are functional and JSX-based
- Images use the ImageWithFallback component for error handling
- Forms are ready for backend integration
- Google Maps iframe can be updated with your actual location
- Phone numbers and email addresses should be updated with real contact information

## Customization

To customize the landing page:

1. **Update Colors**: Modify color values in component files
2. **Change Content**: Edit text, images, and data arrays in each component
3. **Add/Remove Sections**: Import/remove components in LandingPage.jsx
4. **Modify Layout**: Adjust Tailwind classes for different layouts
5. **Add Functionality**: Implement form submission and booking logic

The landing page is now ready to use! All components have been extracted and integrated into your main project.
