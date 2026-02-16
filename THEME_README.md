# 🎨 Portfolio Color Themes

This portfolio supports multiple color schemes that can be easily switched and tested.

## Available Themes

- **Original**: The default theme with neutral colors
- **Electric Blue**: Vibrant electric blue with dark mode emphasis
- **Deep Blue**: Professional deep blue tones
- **Neon Blue**: Bright neon blue with high contrast

## Quick Theme Switching

Use these npm scripts to switch themes instantly:

```bash
# Switch to electric blue theme (your current theme)
npm run theme:electric

# Switch to deep blue theme
npm run theme:deep

# Switch to neon blue theme
npm run theme:neon

# Revert to original theme
npm run theme:original
```

## Manual Theme Switching

You can also use the theme switcher directly:

```bash
node switch-theme.js electricBlue
node switch-theme.js deepBlue
node switch-theme.js neonBlue
node switch-theme.js original
```

## How It Works

- All themes are stored in `switch-theme.js`
- The script modifies `app/globals.css` with the selected theme
- Original theme is backed up as `app/globals.css.backup`
- Each theme includes both light and dark mode variants
- Colors use HSL values for better contrast and accessibility

## Dark Mode

All themes support dark mode. Toggle dark mode in your system or through your app's dark mode toggle to see both variants.

## Customization

To create your own theme:

1. Edit `switch-theme.js` and add a new theme object
2. Define CSS custom properties for all color variables
3. Add both light (`:root`) and dark (`.dark`) mode variants
4. Add a new npm script in `package.json`

## Reverting Changes

If something goes wrong, you can always restore the original theme:

```bash
cp app/globals.css.backup app/globals.css
```

## Theme Colors

### Electric Blue Theme
- Primary: `hsl(214, 100%, 65%)` (dark) / `hsl(214, 100%, 50%)` (light)
- Background: `hsl(220, 45%, 6%)` (dark) / `hsl(220, 20%, 97%)` (light)

### Deep Blue Theme  
- Primary: `hsl(210, 100%, 70%)` (dark) / `hsl(210, 100%, 40%)` (light)
- Background: `hsl(210, 50%, 4%)` (dark) / `hsl(210, 30%, 98%)` (light)

### Neon Blue Theme
- Primary: `hsl(195, 100%, 75%)` (dark) / `hsl(195, 100%, 55%)` (light)  
- Background: `hsl(200, 40%, 3%)` (dark) / `hsl(200, 25%, 96%)` (light)