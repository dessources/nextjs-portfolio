#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const themes = {
  original: `@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;
    --primary: 222.2 47.4% 11.2%;
    --primary-foreground: 210 40% 98%;
    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;
    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 222.2 84% 4.9%;
    --radius: 0.5rem;
    --chart-1: 12 76% 61%;
    --chart-2: 173 58% 39%;
    --chart-3: 197 37% 24%;
    --chart-4: 43 74% 66%;
    --chart-5: 27 87% 67%;
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    --card: 222.2 84% 4.9%;
    --card-foreground: 210 40% 98%;
    --popover: 222.2 84% 4.9%;
    --popover-foreground: 210 40% 98%;
    --primary: 210 40% 98%;
    --primary-foreground: 222.2 47.4% 11.2%;
    --secondary: 217.2 32.6% 17.5%;
    --secondary-foreground: 210 40% 98%;
    --muted: 217.2 32.6% 17.5%;
    --muted-foreground: 215 20.2% 65.1%;
    --accent: 217.2 32.6% 17.5%;
    --accent-foreground: 210 40% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 40% 98%;
    --border: 217.2 32.6% 17.5%;
    --input: 217.2 32.6% 17.5%;
    --ring: 212.7 26.8% 83.9%;
    --chart-1: 220 70% 50%;
    --chart-2: 160 60% 45%;
    --chart-3: 30 80% 55%;
    --chart-4: 280 65% 60%;
    --chart-5: 340 75% 55%;
  }
}`,

  electricBlue: `@layer base {
  :root {
    /* Electric Blue Light Theme */
    --background: 220 20% 97%;
    --foreground: 220 90% 8%;
    --card: 220 20% 99%;
    --card-foreground: 220 90% 8%;
    --popover: 220 20% 99%;
    --popover-foreground: 220 90% 8%;
    --primary: 214 100% 50%; /* Electric Blue */
    --primary-foreground: 220 20% 99%;
    --secondary: 220 30% 90%;
    --secondary-foreground: 220 90% 8%;
    --muted: 220 30% 92%;
    --muted-foreground: 220 20% 45%;
    --accent: 208 100% 85%;
    --accent-foreground: 220 90% 8%;
    --destructive: 0 84% 60%;
    --destructive-foreground: 210 40% 98%;
    --border: 220 20% 85%;
    --input: 220 20% 85%;
    --ring: 214 100% 50%;
    --radius: 0.5rem;
    --chart-1: 214 100% 50%;
    --chart-2: 200 100% 60%;
    --chart-3: 190 100% 65%;
    --chart-4: 180 100% 70%;
    --chart-5: 170 100% 75%;
  }

  .dark {
    /* Electric Blue Dark Theme */
    --background: 220 45% 6%;
    --foreground: 214 100% 85%;
    --card: 220 40% 8%;
    --card-foreground: 214 100% 85%;
    --popover: 220 40% 8%;
    --popover-foreground: 214 100% 85%;
    --primary: 214 100% 65%; /* Bright Electric Blue */
    --primary-foreground: 220 45% 6%;
    --secondary: 220 30% 15%;
    --secondary-foreground: 214 100% 85%;
    --muted: 220 30% 12%;
    --muted-foreground: 220 20% 65%;
    --accent: 208 100% 25%;
    --accent-foreground: 214 100% 85%;
    --destructive: 0 75% 55%;
    --destructive-foreground: 210 40% 98%;
    --border: 220 30% 20%;
    --input: 220 30% 20%;
    --ring: 214 100% 65%;
    --chart-1: 214 100% 65%;
    --chart-2: 200 100% 70%;
    --chart-3: 190 100% 75%;
    --chart-4: 180 100% 80%;
    --chart-5: 170 100% 85%;
  }
}`,

  deepBlue: `@layer base {
  :root {
    /* Deep Blue Light Theme */
    --background: 210 30% 98%;
    --foreground: 210 90% 10%;
    --card: 210 30% 99%;
    --card-foreground: 210 90% 10%;
    --popover: 210 30% 99%;
    --popover-foreground: 210 90% 10%;
    --primary: 210 100% 40%; /* Deep Blue */
    --primary-foreground: 210 30% 98%;
    --secondary: 210 20% 88%;
    --secondary-foreground: 210 90% 10%;
    --muted: 210 20% 90%;
    --muted-foreground: 210 15% 40%;
    --accent: 200 100% 80%;
    --accent-foreground: 210 90% 10%;
    --destructive: 0 84% 60%;
    --destructive-foreground: 210 40% 98%;
    --border: 210 20% 82%;
    --input: 210 20% 82%;
    --ring: 210 100% 40%;
    --radius: 0.5rem;
    --chart-1: 210 100% 40%;
    --chart-2: 195 100% 50%;
    --chart-3: 185 100% 60%;
    --chart-4: 175 100% 65%;
    --chart-5: 165 100% 70%;
  }

  .dark {
    /* Deep Blue Dark Theme */
    --background: 210 50% 4%;
    --foreground: 210 100% 90%;
    --card: 210 45% 6%;
    --card-foreground: 210 100% 90%;
    --popover: 210 45% 6%;
    --popover-foreground: 210 100% 90%;
    --primary: 210 100% 70%; /* Bright Deep Blue */
    --primary-foreground: 210 50% 4%;
    --secondary: 210 25% 12%;
    --secondary-foreground: 210 100% 90%;
    --muted: 210 25% 10%;
    --muted-foreground: 210 15% 70%;
    --accent: 200 100% 20%;
    --accent-foreground: 210 100% 90%;
    --destructive: 0 75% 55%;
    --destructive-foreground: 210 40% 98%;
    --border: 210 25% 18%;
    --input: 210 25% 18%;
    --ring: 210 100% 70%;
    --chart-1: 210 100% 70%;
    --chart-2: 195 100% 75%;
    --chart-3: 185 100% 80%;
    --chart-4: 175 100% 85%;
    --chart-5: 165 100% 90%;
  }
}`,

  neonBlue: `@layer base {
  :root {
    /* Neon Blue Light Theme */
    --background: 200 25% 96%;
    --foreground: 200 90% 12%;
    --card: 200 25% 98%;
    --card-foreground: 200 90% 12%;
    --popover: 200 25% 98%;
    --popover-foreground: 200 90% 12%;
    --primary: 195 100% 55%; /* Neon Blue */
    --primary-foreground: 200 25% 96%;
    --secondary: 200 30% 85%;
    --secondary-foreground: 200 90% 12%;
    --muted: 200 30% 88%;
    --muted-foreground: 200 20% 40%;
    --accent: 180 100% 75%;
    --accent-foreground: 200 90% 12%;
    --destructive: 0 84% 60%;
    --destructive-foreground: 210 40% 98%;
    --border: 200 20% 80%;
    --input: 200 20% 80%;
    --ring: 195 100% 55%;
    --radius: 0.5rem;
    --chart-1: 195 100% 55%;
    --chart-2: 185 100% 65%;
    --chart-3: 175 100% 70%;
    --chart-4: 165 100% 75%;
    --chart-5: 155 100% 80%;
  }

  .dark {
    /* Neon Blue Dark Theme */
    --background: 200 40% 3%;
    --foreground: 195 100% 80%;
    --card: 200 35% 5%;
    --card-foreground: 195 100% 80%;
    --popover: 200 35% 5%;
    --popover-foreground: 195 100% 80%;
    --primary: 195 100% 75%; /* Bright Neon Blue */
    --primary-foreground: 200 40% 3%;
    --secondary: 200 30% 8%;
    --secondary-foreground: 195 100% 80%;
    --muted: 200 30% 6%;
    --muted-foreground: 200 20% 60%;
    --accent: 180 100% 15%;
    --accent-foreground: 195 100% 80%;
    --destructive: 0 75% 55%;
    --destructive-foreground: 210 40% 98%;
    --border: 200 30% 15%;
    --input: 200 30% 15%;
    --ring: 195 100% 75%;
    --chart-1: 195 100% 75%;
    --chart-2: 185 100% 80%;
    --chart-3: 175 100% 85%;
    --chart-4: 165 100% 88%;
    --chart-5: 155 100% 90%;
  }
}`
};

const globalsCssPath = path.join(__dirname, 'app', 'globals.css');

function switchTheme(themeName) {
  if (!themes[themeName]) {
    console.log('Available themes:', Object.keys(themes).join(', '));
    return;
  }

  const theme = themes[themeName];
  const fullCss = `@tailwind base;
@tailwind components;
@tailwind utilities;

${theme}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}
`;

  try {
    fs.writeFileSync(globalsCssPath, fullCss);
    console.log(`✅ Switched to ${themeName} theme!`);
    console.log('💡 Refresh your browser to see changes');
  } catch (error) {
    console.error('❌ Error switching theme:', error.message);
  }
}

const themeName = process.argv[2];
if (!themeName) {
  console.log('Usage: node switch-theme.js <theme>');
  console.log('Available themes:', Object.keys(themes).join(', '));
} else {
  switchTheme(themeName);
}