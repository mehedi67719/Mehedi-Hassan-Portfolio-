# Mehedi Hassan - Frontend Developer Portfolio

This is a React-based portfolio website showcasing the skills, projects, and experience of Mehedi Hassan, a frontend developer specializing in modern web technologies.

## Features

- Responsive design that works on all devices
- Modern UI with animations using AOS library
- Interactive contact form with EmailJS integration
- Project showcase with GitHub integration
- Skills section with progress bars
- Education and experience details
- Social media links

## Technologies Used

- React.js
- Tailwind CSS (via CDN)
- AOS (Animate On Scroll) Library
- EmailJS for contact form
- Google Fonts (Poppins)
- React Router DOM for navigation

## Setup Instructions

1. Clone or download this repository
2. Navigate to the project directory: `cd react-portfolio`
3. Install dependencies: `npm install`
4. Start the development server: `npm start`
5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Configuration

To use the contact form with your own EmailJS account:

1. Sign up for a free account at [EmailJS](https://www.emailjs.com/)
2. Connect your email service (Gmail, Outlook, etc.)
3. Create an email template with the following variables: `user_name`, `user_email`, `subject`, `message`
4. Update the serviceId, templateId, and publicKey in `src/components/Contact.js`
5. For detailed setup instructions, see [EMAIL_SETUP.md](./EMAIL_SETUP.md)

## Project Structure

```
react-portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Hero.js
│   │   ├── About.js
│   │   ├── Skills.js
│   │   ├── Projects.js
│   │   ├── Education.js
│   │   ├── Contact.js
│   │   └── Footer.js
│   ├── App.js
│   └── index.js
```

## Customization

You can easily customize this portfolio by modifying the content in the respective components:

- Update personal information in the Hero and About components
- Modify skills in the Skills component
- Add or modify projects in the Projects component
- Update education and experience in the Education component
- Change contact information in the Contact component

## Deployment

To build the project for production:

```bash
npm run build
```

This creates an optimized production build in the `build` folder that can be deployed to any static hosting service.

## Learn More

To learn React, check out the [React documentation](https://reactjs.org/).
