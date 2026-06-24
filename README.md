# Excellence College Website

A modern, responsive college website showcasing programs, faculty, admissions, and more.

## 🎓 Features

### Core Sections
- **Home Page**: Engaging hero section with call-to-action
- **Courses Section**: Comprehensive program listings with details
  - Computer Science
  - Business Administration
  - Medical Sciences
  - Fine Arts
  - Engineering
  - Liberal Arts
- **Faculty Profiles**: Detailed information about distinguished educators
- **Student Testimonials**: Carousel showcasing success stories
- **Admission Form**: Complete application form with validation
- **About Us**: Mission, vision, values, and statistics
- **Contact Page**: Multiple contact methods and inquiry form

### Technical Features
- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Smooth scrolling navigation
- ✅ Interactive testimonials carousel
- ✅ Form validation (admission & contact forms)
- ✅ Mobile-friendly hamburger menu
- ✅ Scroll animations
- ✅ Modern gradient designs
- ✅ Clean, semantic HTML5
- ✅ CSS Grid and Flexbox layouts
- ✅ Accessible and SEO-friendly

## 📁 Project Structure

```
Excellence-College-Website/
├── index.html          # Main HTML file with all sections
├── style.css           # Complete styling and responsive design
├── script.js           # Interactive features and form handling
└── README.md           # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No build tools or dependencies required

### How to Run the Project
follow these steps to run the project locally:
1. Clone the repository
  ```
git clone

2. Open the project folder
3. Open index.html in any modern web browser.
4. The website will start running locally.


## 💻 Usage

### Navigation
- Click on navigation links to smoothly scroll to different sections
- On mobile devices, use the hamburger menu (☰) to access navigation

### Admission Form
- Fill out all required fields marked with asterisks (*)
- Email and phone number validation is automatic
- Accept terms and conditions before submitting
- Form data is logged to console (in production, would be sent to server)

### Contact Form
- Submit inquiries through the contact form
- All fields are required and validated
- Success/error messages appear after submission

### Testimonials
- Automatically rotates every 5 seconds
- Use arrow buttons (‹ ›) to manually navigate
- Swipe on mobile devices

## 🎨 Customization

### Colors
The website uses a professional blue and gold color scheme:
- Primary Blue: `#1e3c72`
- Secondary Blue: `#2a5298`
- Accent Gold: `#ffd700`

To change colors, update the CSS variables in `style.css`.

### Content
- **Courses**: Edit the `.courses-grid` section in `index.html`
- **Faculty**: Modify the `.faculty-grid` section
- **Testimonials**: Update the `.testimonial-card` elements
- **Contact Info**: Change details in the `.contact-info` section

### Images
Currently using emoji placeholders. To add real images:
1. Create an `images/` folder
2. Add your images
3. Replace emoji with `<img>` tags:
```html
<img src="images/faculty-photo.jpg" alt="Faculty Name">
```

## 📱 Responsive Breakpoints

- **Desktop**: > 968px
- **Tablet**: 481px - 968px
- **Mobile**: ≤ 480px

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## 📝 Form Validation

### Admission Form
- All fields with (*) are required
- Email format validation
- Phone number format validation
- Terms and conditions must be accepted
- Real-time field validation on blur

### Contact Form
- Name, email, subject, and message required
- Email format validation
- Success/error feedback messages

## 🌟 Features in Detail

### Smooth Scrolling
All anchor links smoothly scroll to their target sections with offset for the fixed navigation bar.

### Mobile Navigation
Responsive hamburger menu that slides in from the left on mobile devices.

### Carousel
Auto-advancing testimonials carousel with manual controls and smooth transitions.

### Scroll Animations
Cards fade in and slide up as they enter the viewport using Intersection Observer API.

### Form Handling
Client-side validation with visual feedback and success/error messages.

## 📄 License

This project is open source and available for educational purposes.

## 👥 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Contact

For questions or support:
- Email: info@excellence.edu
- Website: [Excellence College](https://gitlab.com/nishu5291521-group/nishu5291521-project)

## 🙏 Acknowledgments

- Modern CSS Grid and Flexbox layouts
- Responsive design best practices
- Accessibility guidelines (WCAG)
- Clean code principles

---

**Excellence College** - Empowering minds, shaping futures since 1985
