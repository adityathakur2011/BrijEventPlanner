# Image Placeholders

This directory contains placeholder SVG images for the Brij Event Planner website. These are temporary placeholders that should be replaced with actual high-quality WebP images for production.

## Image List

### Hero Images
- `hero-bg.svg` - Main hero background (1920x1080)
- `hero-bg-mobile.svg` - Mobile hero (640x960)
- `hero-bg-tablet.svg` - Tablet hero (1024x768)
- `hero-bg-2x.svg` - Retina hero (3840x2160)

### Portfolio Images
- `portfolio-1.svg` through `portfolio-6.svg` (800x600)

### Wedding Gallery
- `wedding-1.svg` through `wedding-6.svg` (800x600)

### Corporate Gallery
- `corporate-1.svg` through `corporate-6.svg` (800x600)

### Birthday Gallery
- `birthday-1.svg` through `birthday-6.svg` (800x600)

### Service Images
- `service-wedding.svg` (800x600)
- `service-corporate.svg` (800x600)
- `service-birthday.svg` (800x600)

### Page Hero Images
- `about-hero.svg` (1920x600)
- `about-story.svg` (800x600)
- `contact-hero.svg` (1920x600)
- `services-hero.svg` (1920x600)

### Branding
- `logo.svg` (200x60)
- `og-image.svg` (1200x630) - Open Graph image

## Converting to WebP

To convert these SVG placeholders to WebP format for better performance:

1. Use an image conversion tool like:
   - Online: https://cloudconvert.com/svg-to-webp
   - CLI: `cwebp input.svg -o output.webp`
   - ImageMagick: `magick input.svg output.webp`

2. Recommended WebP settings:
   - Quality: 80-85
   - Lossless: false
   - Preserve aspect ratio: yes

## Image Requirements

When replacing placeholders with actual images:

- **Format**: WebP (preferred) or JPG/PNG
- **Hero images**: High quality, optimized for web
- **Gallery images**: 800x600px minimum, aspect ratio 4:3
- **Logo**: SVG or PNG with transparent background
- **OG Image**: 1200x630px for social media sharing
- **File sizes**: Keep under 200KB per image when possible
- **Alt text**: Already defined in code, ensure images match descriptions

## Color Scheme

Current placeholder colors match the site's blush pastel theme:
- Primary: Rose (#fce7f3, #fbcfe8, #f9a8d4)
- Accent: Deep Rose (#be185d, #9f1239)

Replace with actual event photography that matches this aesthetic.

