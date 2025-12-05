# 🚀 Shahriar - Professional Portfolio

![Project Banner](https://via.placeholder.com/1200x400?text=Shahriar+Portfolio+Banner) 
*(Note: Replace this link with a screenshot of your website landing page)*

A modern, high-performance, and fully responsive Personal Portfolio website built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion**. This project showcases a seamless user experience with dark/light mode support, interactive animations, and a functional contact form.

🔗 **Live Demo:** [https://your-project-name.vercel.app](https://your-project-name.vercel.app)

---

## ✨ Key Features

*   🎨 **Modern UI/UX:** Clean, minimalist, and pixel-perfect design.
*   🌓 **Dark & Light Mode:** Fully supported theme switching with persistent state.
*   ⚡ **High Performance:** Built with Next.js App Router for optimal speed and SEO.
*   📱 **Fully Responsive:** Optimized for Mobile, Tablet, and Desktop devices.
*   🎬 **Smooth Animations:**
    *   Custom Preloader with "Welcome" shuffle effect.
    *   Scroll-reveal animations using Framer Motion.
    *   Floating technologies icons.
    *   Interactive hover effects.
*   🛠 **Dynamic Components:**
    *   **Services Modal:** Detailed popup for each service.
    *   **Projects Pagination:** Functional pagination for project showcase.
    *   **Experience Tabs:** Toggle between Education and Experience timeline.
    *   **Testimonial Slider:** Auto-playing infinite slider.
*   📧 **Functional Contact Form:** Integrated with **EmailJS** for real-time email delivery.

---

## 🛠 Tech Stack

| Category | Technologies |
| :--- | :--- |
| **Framework** | [Next.js 14 (App Router)](https://nextjs.org/) |
| **Styling** | [Tailwind CSS v3](https://tailwindcss.com/) |
| **Language** | JavaScript (ES6+) |
| **Animation** | [Framer Motion](https://www.framer.com/motion/) |
| **Icons** | [Lucide React](https://lucide.dev/), Simple Icons |
| **Form Handling** | [EmailJS](https://www.emailjs.com/) |
| **Theme Management** | next-themes |
| **Deployment** | Vercel |

---

## ⚙️ Environment Variables 

To run this project locally, you need to set up environment variables for **EmailJS**.
Create a `.env.local` file in the root directory and add the following keys:

```bash
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```
---

```bash
# **Note:** You can obtain these keys by signing up at EmailJS.
```
## 🚀 Getting Started

**1. Clone the repository**

Follow these steps to run the project on your local machine:
```bash
git clone https://github.com/your-username/portfolio-shahriar.git

cd portfolio-shahriar
```
**2. Install dependencies**

```bash
npm install
# or
yarn install
```
**3. Run the development server**

```bash
npm run dev
```
