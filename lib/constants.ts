export const SITE_CONFIG = {
  name: 'Jaemde Dessources',
  title: 'Frontend Software Engineer - TypeScript/React.js',
  description: 'Experienced frontend developer specializing in React, TypeScript, and modern web technologies. Building performant, scalable applications with clean code and exceptional user experiences.',
  url: 'https://jaemdessources.com',
  ogImage: '/images/og-image.jpg',
  author: {
    name: 'Jaemde Dessources',
    email: 'contact@jaemdessources.com',
    phone: '+1 954 816 5338',
    location: 'Florida, USA',
    timezone: 'EST'
  },
  social: {
    github: 'https://github.com/dessources',
    linkedin: 'https://linkedin.com/in/dessources',
    email: 'mailto:contact@jaemdessources.com'
  }
};

export const SKILLS_DATA = [
  {
    name: 'TypeScript',
    category: 'frontend' as const,
    level: 5,
    icon: 'typescript'
  },
  {
    name: 'React.js',
    category: 'frontend' as const,
    level: 5,
    icon: 'react'
  },
  {
    name: 'Next.js',
    category: 'frontend' as const,
    level: 4,
    icon: 'nextjs'
  },
  {
    name: 'Vue.js',
    category: 'frontend' as const,
    level: 4,
    icon: 'vue'
  },
  {
    name: 'JavaScript',
    category: 'frontend' as const,
    level: 5,
    icon: 'javascript'
  },
  {
    name: 'CSS/SCSS',
    category: 'frontend' as const,
    level: 5,
    icon: 'css'
  },
  {
    name: 'Node.js',
    category: 'backend' as const,
    level: 4,
    icon: 'nodejs'
  },
  {
    name: 'Git',
    category: 'tools' as const,
    level: 5,
    icon: 'git'
  }
];

export const PROJECTS_DATA = [
  {
    id: 'ichat',
    title: 'iChat - React App',
    description: 'Real-time chat application built with React and modern web technologies. Features include live messaging, user authentication, and responsive design.',
    image: '/images/ichat-poster.png',
    url: 'https://ichat-cra.jaemdessources.com',
    githubUrl: 'https://github.com/dessources/ichat',
    technologies: ['React', 'TypeScript', 'WebSocket', 'CSS'],
    featured: true,
    category: 'web-app'
  },
  {
    id: 'deathwish-coffee',
    title: 'Death Wish Coffee',
    description: 'E-commerce website showcasing coffee products with modern design and smooth user experience.',
    image: '/images/deathwish-poster.png',
    url: 'https://deathwishcoffee.jaemdessources.com/',
    technologies: ['React', 'Next.js', 'CSS', 'JavaScript'],
    featured: true,
    category: 'e-commerce'
  },
  {
    id: 'corporate-site',
    title: 'Corporate Website',
    description: 'A corporate website built using WordPress for a business that provides digital services to small businesses.',
    image: '/images/corporate-site-poster.png',
    url: 'https://corporate-site.jaemdessources.com/',
    technologies: ['WordPress', 'PHP', 'CSS', 'JavaScript'],
    featured: false,
    category: 'business'
  }
];

export const LANGUAGES_DATA = [
  {
    language: 'English',
    level: 'native' as const,
    code: 'en'
  },
  {
    language: 'Spanish',
    level: 'fluent' as const,
    code: 'es'
  }
];