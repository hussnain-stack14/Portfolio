// lib/data.jsx
import {
  MonitorSmartphone,
  BrainCircuit,
  Mail,
  Phone,
  MapPin,
  Building2,
  Layers3,
  ServerCog,
  Gauge,
} from "lucide-react";

const LinkedInIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.11 20.45H3.56V9h3.55v11.45z" />
  </svg>
);

const GitHubIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.04-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.08 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.93.43.37.81 1.1.81 2.22 0 1.6-.02 2.89-.02 3.29 0 .32.22.7.83.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

export const profile = {
  name: "HUSSNAIN ALI",
  role: "FULL-STACK WEB DEVELOPER",
  image: "/images/hussnain.png",
  email: "hussnain.stack@gmail.com",
  phone: "03155254877",
  location: "Faisalabad, Punjab, Pakistan",
  socials: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/hussnain-ali-01161a3a0/",
      icon: LinkedInIcon,
    },
    {
      label: "GitHub",
      href: "https://github.com/hussnain-stack14",
      icon: GitHubIcon,
    },
    { label: "Email", href: "mailto:hussnain.stack@gmail.com", icon: Mail },
  ],
};

export const tabs = [
  { key: "home", label: "Home", mobileLabel: "Home" },
  { key: "about", label: "About", mobileLabel: "About" },
  { key: "resume", label: "Resume", mobileLabel: "Resume" },
  { key: "portfolio", label: "Portfolio", mobileLabel: "Work" },
  { key: "contact", label: "Contact", mobileLabel: "Contact" },
];

export const sidebarContacts = [
  { label: "Email", value: profile.email, icon: Mail },
  { label: "Phone", value: profile.phone, icon: Phone },
  { label: "Location", value: profile.location, icon: MapPin },
];

export const services = [
  {
    title: "Business Web Development",
    description:
      "Modern, responsive websites that help local businesses, startups, and personal brands in Faisalabad build a strong online presence.",
    icon: <Building2 className="w-14 h-14 text-primary" />,
  },
  {
    title: "Full-Stack Web Development",
    description:
      "Complete web applications with modern frontends, reliable backends, databases, authentication, and APIs.",
    icon: <Layers3 className="w-14 h-14 text-primary" />,
  },
  {
    title: "Responsive UI/UX Design",
    description:
      "Clean, intuitive interfaces designed to deliver a seamless experience across mobile, tablet, and desktop.",
    icon: <MonitorSmartphone className="w-14 h-14 text-primary" />,
  },
  {
    title: "API & Backend Development",
    description:
      "Secure and reliable backend systems, REST APIs, authentication, and database integration using Node.js and Express.",
    icon: <ServerCog className="w-14 h-14 text-primary" />,
  },
  {
    title: "Website Optimization & Maintenance",
    description:
      "Performance improvements, responsive fixes, bug resolution, feature updates, and ongoing website maintenance.",
    icon: <Gauge className="w-14 h-14 text-primary" />,
  },
  {
    title: "AI & Third-Party API Integration",
    description:
      "AI-powered features, chatbots, and third-party API integrations that add smarter functionality to web applications.",
    icon: <BrainCircuit className="w-14 h-14 text-primary" />,
  },
];

export const clients = ["FEAT Technologies Pvt Ltd, Lahore", "DecodeLabs"];

export const education = [
  {
    title: "BS Software Engineering",
    meta: "National University of Modern Languages",
    date: "2023 – 2027",
    location: "Faisalabad, Punjab, Pakistan",
  },
  {
    title: "ICS",
    meta: "GOVT. Municipal Graduate College",
    date: "2020 – 2023",
    location: "Faisalabad, Punjab, Pakistan",
  },
];

export const experience = [
  {
    title: "Full Stack Developer Intern",
    meta: "FEAT Technologies Pvt Ltd",
    date: "Jun 2026 – Sep 2026",
    location: "Remote",
    badge: "Internship",
    details: [
      "Revamped a SaaS application for the Food Safety Quality project, focusing on performance, scalability, and user experience.",
      "Built the frontend using React.js to deliver a smooth, responsive interface.",
      "Developed the backend using Express.js with MongoDB, providing secure and scalable APIs to support evolving application requirements.",
    ],
    
  },
  {
    title: "Full Stack Developer Intern",
    meta: "DecodeLabs",
    date: "Aug 2026 – Sep 2026",
    location: "Remote",
    badge: "Internship",
    details: [
      "Worked as a full-stack developer across 4 different projects.",
      "Contributed to both frontend and backend development using the MERN stack.",
    ],
  },
];

export const certifications = [
  {
    title: "Full Stack Developer Intern",
    company: "FEAT Technologies Pvt Ltd",
    slug: "feat-technologies",
    date: "Jun 2026 – Sep 2026",
    location: "Remote",
    type: "Internship",
    focus: "Full Stack Development",
    image: "/images/feat.png",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JavaScript", "REST APIs"],
    intro: "Completed a practical full-stack internship focused on building reliable, scalable web applications and improving product experiences.",
    contributions: [
      {
        title: "Project Delivery",
        description: "Revamped a SaaS application for the Food Safety Quality project, focusing on performance, scalability, and user experience.",
      },
      {
        title: "Frontend Development",
        description: "Built the frontend using React.js to deliver a smooth and responsive interface.",
      },
      {
        title: "Backend Development",
        description: "Developed the backend using Express.js with MongoDB, providing secure and scalable APIs to support evolving application requirements.",
      },
    ],
    description: [
      "Revamped a SaaS application for the Food Safety Quality project, focusing on performance, scalability, and user experience.",
      "Built the frontend using React.js to deliver a smooth, responsive interface.",
      "Developed the backend using Express.js with MongoDB, providing secure and scalable APIs to support evolving application requirements.",
    ],
  },

  {
    title: "Full Stack Developer Intern",
    company: "DecodeLabs",
    slug: "decodelabs",
    date: "Jul 30, 2026 – Aug 30, 2026",
    location: "Remote",
    type: "Internship",
    focus: "Full Stack Development",
    image: "/images/decodelab.png",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JavaScript", "REST APIs", "Full Stack Development"],
    intro: "Successfully completed the DecodeLabs Virtual Internship Program in Full Stack Development, gaining practical experience through real-world projects and collaborative development tasks.",
    contributions: [
      {
        title: "Project Delivery",
        description: "Worked as a full-stack developer across 4 different projects, contributing to real-world development tasks and project delivery.",
      },
      {
        title: "Full-Stack Development",
        description: "Contributed to both frontend and backend development using the MERN stack, working across application features and development workflows.",
      },
    ],
    description: [
      "Worked as a full-stack developer across 4 different projects.",
      "Contributed to both frontend and backend development using the MERN stack.",
    ],
  },
];

export const projects = [
 
  {
    title: "Promtix gallery",
    category: "Web Application",
    description:
      "A media-rich web application for browsing and discovering visual content.",
    thumbnail: "/images/promtix-gallery.png",
    link: "https://promptix-gallery.vercel.app/",
    github: "https://github.com/hussnain-stack14/PromptHub",
    tags: ["React", "Media gallery", "Responsive UI"],
  },
  {
    title: "Echoshop",
    category: "Ecommerce",
    description:
      "A full ecommerce platform with product catalog, cart, and multi-category browsing.",
    thumbnail: "/images/ecommerce.png",
    link: "https://echoshop-hussnain.netlify.app/",
    github: "https://github.com/hussnain-stack14/ecommerce-app",
    tags: ["React", "Ecommerce", "Cart & catalog"],
  },
  {
    title: "POS system",
    category: "Dashboard",
    description:
      "A point-of-sale dashboard for tracking sales, transactions, and business performance in real time.",
    thumbnail: "/images/POS.jpg",
    link: "https://pos-business.netlify.app/",
    github: "https://github.com/hussnain-stack14/POS-sales-of-purchase",
    tags: ["React", "Dashboard", "Sales tracking"],
  },
  {
    title: "Hot Saucy",
    category: "Restaurant",
    description:
      "A restaurant website built for a local Faisalabad pizza business, featuring a digital menu, loyalty offers, and WhatsApp ordering.",
    thumbnail: "/images/hot-sauce.jpg",
    link: "https://hot-saucy-food.vercel.app/",
    github: "https://github.com/hussnain-stack14/hot-saucy-food",
    tags: ["Responsive UI", "Digital menu", "WhatsApp ordering"],
  },
  {
    title: "Forge Smash ",
    category: "Restaurant",
    description:
     "A responsive restaurant website designed with a digital menu, loyalty rewards, and seamless WhatsApp ordering.",
    thumbnail: "/images/forge.jpg",
    link: "https://forge-smash.vercel.app/",
    github: "https://github.com/hussnain-stack14/Forge-res",
    tags: ["Responsive UI", "Loyalty rewards", "WhatsApp ordering"],
  },
  {
    title: "Cafe nova",
    category: "Restaurant",
    description:
      "Cafe Nova  a restaurant website with menu highlights, gallery, and location details for a Faisalabad cafe.",
    thumbnail: "/images/cafenova.jpg",
    link: "https://cafenova-demo.vercel.app/",
    github: "https://github.com/hussnain-stack14/CafeNova",
    tags: ["Responsive UI", "Menu highlights", "Local business"],
  },
  
  {
    title: "Vitsa Real Estate",
    category: "Real Estate",
    description:
      "An immersive real estate platform with scroll-driven 3D video tours, built with Next.js and React Three Fiber.",
    thumbnail: "/images/vitsa.jpg",
    link: "https://vista-red.vercel.app/",
    github: "https://github.com/hussnain-stack14/vista-real-estate",
    tags: ["Next.js", "3D property tours", "React Three Fiber"],
  },
  
   {
    title: "Delaqua Beauty Salon",
    category: "Beauty & Wellness",
    description:
      " A luxury wine-and-gold landing page for Delaqua Beauty Salon, with service menu, gallery, and WhatsApp.",
    thumbnail: "/images/Delaqua.jpg",
    link: "https://delaqua.netlify.app/",
    github: "https://github.com/hussnain-stack14/delaqua-beauty-salon",
    tags: ["Responsive UI", "Service menu", "WhatsApp"],
  },
   {
    title: "Davixa Blogs",
    category: "Blogs",
    description:
      "A modern blogging platform built with MongoDB and clean content architecture.",
    thumbnail: "/images/davixa.png",
    link: "https://devixa-blog.netlify.app/",
    github: "https://github.com/hussnain-stack14/Devixa",
    tags: ["MongoDB", "Content architecture", "Blog platform"],
  },
   
   
];

export const filters = [
  "All",
  "Web Application",
  "Dashboard",
  "Ecommerce",
  "Restaurant",
  "Beauty & Wellness",
  "Real Estate",
  "Blogs"
];