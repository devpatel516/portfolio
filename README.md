# 🚀 Dev Patel — Developer Portfolio

A modern, highly interactive, and responsive personal portfolio website built to showcase my skills, projects, and achievements.

## ✨ Features
- **Modern Tech Stack**: Fast and optimized building with **React 19** and **Vite**.
- **3D Interactive Elements**: Integrated **Three.js** (via `@react-three/fiber` & `drei`) for visually stunning 3D graphics in the browser.
- **Smooth Animations**: Powered by **Framer Motion** for seamless page transitions and scroll animations.
- **Elegant UI & Theming**: Includes dynamic theme color switching (Green, Mac Yellow, GitHub Orange) and a clean, GitHub-inspired dark mode aesthetic.
- **Functional Contact Form**: Direct email integration using **EmailJS** with strict field and validation checks.
- **Fully Responsive**: Carefully designed layouts that look great on both desktop and mobile devices.

## 🛠️ Built With
- **Frontend**: React, React Router
- **Styling**: Tailwind CSS (implied via class names), Framer Motion
- **3D Graphics**: Three.js, React Three Fiber
- **Tooling**: Vite, ESLint

## 🚀 How to Run Locally

Follow these steps to set up and run the project on your local machine:

### 1. Clone the Repository
```bash
git clone https://github.com/devpatel516/portfolio.git
cd portfolio
```

### 2. Install Dependencies
Ensure you have [Node.js](https://nodejs.org/) installed, then run:
```bash
npm install
```

### 3. Environment Variables
This project uses **EmailJS** for the contact form. You will need to create a `.env` file in the root directory and add your EmailJS credentials:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### 4. Start the Development Server
```bash
npm run dev
```
The application will be available at `http://localhost:5173/`.
