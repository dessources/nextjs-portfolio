# Portfolio Website - Next.js

A modern, performant portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- ⚡ **Next.js 14** - Latest React framework with App Router
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 📱 **Responsive Design** - Mobile-first approach
- ♿ **Accessibility** - WCAG compliant
- 🚀 **Performance** - Optimized images and lazy loading
- 🎭 **Animations** - Smooth scroll animations
- 📊 **SEO Optimized** - Meta tags and structured data
- 🔧 **TypeScript** - Type safety throughout

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Font Awesome, Lucide React
- **Deployment**: Vercel (recommended)

## Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/dessources/portfolio-nextjs.git
   cd portfolio-nextjs
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
portfolio-nextjs/
├── components/           # Reusable UI components
│   ├── portfolio/       # Portfolio-specific components
│   ├── ui/             # General UI components
│   └── layout/         # Layout components
├── pages/              # Next.js pages
├── styles/             # Global styles and CSS
├── lib/                # Utility functions and constants
├── types/              # TypeScript type definitions
├── public/             # Static assets
└── hooks/              # Custom React hooks
```

## Component Usage

Import and use the components in your pages:

```tsx
import {
  HeroSection,
  SkillsSection,
  PortfolioSection
} from '@/components/portfolio';

export default function Home() {
  return (
    <main>
      <HeroSection {...heroData} />
      <SkillsSection {...skillsData} />
      <PortfolioSection {...portfolioData} />
    </main>
  );
}
```

## Customization

1. **Update site configuration** in `lib/constants.ts`
2. **Modify color scheme** in `tailwind.config.js`
3. **Add your projects** to `PROJECTS_DATA`
4. **Update skills** in `SKILLS_DATA`
5. **Replace images** in the `public/images/` directory

## Performance Optimizations

- Image optimization with Next.js Image component
- Code splitting and lazy loading
- Minified CSS and JavaScript
- Optimized fonts and icons
- Progressive Web App (PWA) ready

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Deploy with zero configuration

### Manual Deployment

```bash
npm run build
npm run export
```

## License

MIT License - see [LICENSE](LICENSE) file for details.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## Support

If you have any questions or need help, please open an issue on GitHub.