---
name: Nexora Digital Interface
colors:
  surface: '#08141e'
  surface-dim: '#08141e'
  surface-bright: '#2f3a45'
  surface-container-lowest: '#040f19'
  surface-container-low: '#111d27'
  surface-container: '#15212b'
  surface-container-high: '#202b36'
  surface-container-highest: '#2a3641'
  on-surface: '#d8e4f2'
  on-surface-variant: '#c0caad'
  inverse-surface: '#d8e4f2'
  inverse-on-surface: '#26323c'
  outline: '#8b947a'
  outline-variant: '#414a34'
  surface-tint: '#8edb00'
  primary: '#ffffff'
  on-primary: '#203600'
  primary-container: '#a3fa00'
  on-primary-container: '#467000'
  inverse-primary: '#426900'
  secondary: '#c1c7d3'
  on-secondary: '#2b313a'
  secondary-container: '#414751'
  on-secondary-container: '#b0b5c1'
  tertiary: '#ffffff'
  on-tertiary: '#2c3138'
  tertiary-container: '#dee2ed'
  on-tertiary-container: '#60656d'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#a3fa00'
  primary-fixed-dim: '#8edb00'
  on-primary-fixed: '#112000'
  on-primary-fixed-variant: '#304f00'
  secondary-fixed: '#dde3ef'
  secondary-fixed-dim: '#c1c7d3'
  on-secondary-fixed: '#161c25'
  on-secondary-fixed-variant: '#414751'
  tertiary-fixed: '#dee2ed'
  tertiary-fixed-dim: '#c2c7d0'
  on-tertiary-fixed: '#171c23'
  on-tertiary-fixed-variant: '#42474f'
  background: '#08141e'
  on-background: '#d8e4f2'
  surface-variant: '#2a3641'
typography:
  display-lg:
    fontFamily: Space Grotesk
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 40px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Raleway
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Raleway
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Space Grotesk
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1.0'
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  container-margin: 64px
  gutter: 24px
---

## Brand & Style

The design system embodies an ultra-premium, futuristic aesthetic tailored for a high-end architectural coworking environment. It targets innovators and visionaries, evoking a sense of technical precision, exclusivity, and forward-looking intelligence.

The visual style is a fusion of **Dark Minimalism** and **High-Tech Glassmorphism**. It utilizes a deep, "obsidian" base palette punctuated by vibrant, neon-flecked accents. The interface should feel like a high-end operating system for a physical space—crisp, responsive, and deeply atmospheric.

**Key Stylistic Pillars:**
- **Technological Precision:** Sharp lines, monospaced-adjacent geometry, and mathematical spacing.
- **Architectural Depth:** Use of translucent layers and backdrop blurs to simulate physical glass partitions found in luxury interiors.
- **Luminous Energy:** Subtle "glow" effects (bloom) around primary interactive elements and data visualizations.

## Colors

This design system is natively **Dark Mode**. The palette is designed to minimize eye strain in high-tech environments while highlighting critical navigation points with high-energy luminescence.

- **Nexora Black (#080F14):** The foundational void. Used for main backgrounds to provide maximum contrast for neon accents.
- **Nexora Green (#A6FF00):** The primary brand signal. Used sparingly for high-priority CTAs, active states, and critical highlights. It should feel like light emitting from a screen.
- **Layering Grays (#222831, #393E46):** Used for structural depth. These colors define surfaces, input fields, and "glass" containers.
- **Steel & Cloud (#8D99A6, #F5F7FA):** Used for secondary information and primary body text to ensure legibility against the dark background.

## Typography

Typography balances the geometric technicality of **Space Grotesk** with the elegant, humanistic flow of **Raleway**.

- **Space Grotesk** is the voice of the architecture. It is used for all headlines and UI labels. High-weight headlines should utilize tight letter spacing for a more "designed" feel.
- **Raleway** is the voice of the community. Its light and regular weights are used for long-form content and body descriptions to provide a sophisticated, premium reading experience.
- **Labeling:** Small labels should always be uppercase with increased letter-spacing to mimic technical blueprints or architectural signage.

## Layout & Spacing

The layout follows a **Strict Fluid Grid** model, rooted in a 4px baseline unit. 

- **Desktop:** 12-column grid with wide 64px outer margins to create an "airy," luxury feel.
- **Tablet:** 8-column grid with 32px margins.
- **Mobile:** 4-column grid with 20px margins.

Spacing should be generous to maintain a minimalist aesthetic. Elements are grouped using internal padding that scales in multiples of 8px. Use white space as a structural element to separate different functional zones rather than heavy dividers.

## Elevation & Depth

Hierarchy is established through **Glassmorphism** and **Tonal Stacking** rather than traditional drop shadows.

- **Level 0 (Base):** Nexora Black background.
- **Level 1 (Cards/Sections):** Dark Gray (#222831) with a 1px Steel Gray (#393E46) border.
- **Level 2 (Overlays/Popups):** Semi-transparent Steel Gray with a `backdrop-filter: blur(20px)`. 
- **Neon Accents:** Primary buttons and active states utilize a "bloom" effect—a soft, low-opacity outer glow using the Nexora Green color (`box-shadow: 0 0 15px rgba(166, 255, 0, 0.3)`).

## Shapes

The shape language is **Technical & Structured**. 

A "Soft" roundedness (4px-8px) is applied to maintain a modern feel without becoming "bubbly" or overly casual. This mimics the precision-cut corners of modern architectural glass and metal. Large containers may use the `rounded-lg` token (8px) for a subtle softening, while buttons and inputs remain at the base `rounded` (4px) level.

## Components

### Buttons
- **Primary:** Nexora Green background, black text. On hover, apply a "magnetic" scale effect (1.05x) and increase the bloom glow intensity.
- **Secondary:** Ghost style. 1px Steel Gray border, white text. On hover, the border transitions to Nexora Green.

### Input Fields
- Dark Gray background with a subtle inner shadow. Focus state triggers a Nexora Green bottom border or glow. Labels sit above the field in `label-caps` typography.

### Cards
- Use the Level 1 elevation (Dark Gray). Feature a 1px border. For premium features, add a subtle top-to-bottom gradient (Dark Gray to Nexora Black).

### Chips & Tags
- Small, rectangular with 2px corner radius. Dark backgrounds with Steel Gray text. Active tags use Nexora Green text and a subtle green border.

### Interactive Transitions
- All hovers should utilize a `cubic-bezier(0.4, 0, 0.2, 1)` timing function for a "weighty" yet smooth high-tech feel. 
- Component entry should use a slight vertical slide-in with a fade for an architectural unveiling effect.