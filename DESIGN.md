---
name: Kinetic Raw
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f3'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#4b4731'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f1f1f1'
  outline: '#7c775f'
  outline-variant: '#cdc7aa'
  surface-tint: '#6a5f00'
  primary: '#6a5f00'
  on-primary: '#ffffff'
  primary-container: '#ffe600'
  on-primary-container: '#726600'
  inverse-primary: '#dec800'
  secondary: '#a90097'
  on-secondary: '#ffffff'
  secondary-container: '#d300bd'
  on-secondary-container: '#fffbff'
  tertiary: '#004ee7'
  on-tertiary: '#ffffff'
  tertiary-container: '#dfe3ff'
  on-tertiary-container: '#0054f8'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#fde400'
  primary-fixed-dim: '#dec800'
  on-primary-fixed: '#201c00'
  on-primary-fixed-variant: '#504700'
  secondary-fixed: '#ffd7f0'
  secondary-fixed-dim: '#fface8'
  on-secondary-fixed: '#3a0033'
  on-secondary-fixed-variant: '#840076'
  tertiary-fixed: '#dce1ff'
  tertiary-fixed-dim: '#b6c4ff'
  on-tertiary-fixed: '#001550'
  on-tertiary-fixed-variant: '#003ab2'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  display:
    fontFamily: Montserrat
    fontSize: 84px
    fontWeight: '900'
    lineHeight: '1.0'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Montserrat
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '800'
    lineHeight: '1.1'
  headline-md:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  body-lg:
    fontFamily: Archivo Narrow
    fontSize: 20px
    fontWeight: '500'
    lineHeight: '1.5'
  body-md:
    fontFamily: Archivo Narrow
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-bold:
    fontFamily: Archivo Narrow
    fontSize: 14px
    fontWeight: '700'
    lineHeight: '1.0'
  caption:
    fontFamily: Archivo Narrow
    fontSize: 12px
    fontWeight: '400'
    lineHeight: '1.2'
spacing:
  border-thick: 4px
  border-thin: 2px
  shadow-offset: 8px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
  stack-gap: 16px
---

## Brand & Style

This design system is built on the principles of **Neobrutalism**, prioritizing raw energy, structural honesty, and high-impact visual communication. It is designed for creative portfolios that need to stand out through unapologetic confidence and industrial clarity.

The aesthetic rejects the "softness" of modern SaaS interfaces in favor of heavy strokes, high-contrast intersections, and vibrant, clashing colors. The emotional response is one of urgency, creativity, and technical precision.

**Key Stylistic Pillars:**
- **Structural Integrity:** Layouts are defined by visible borders and rigid grids.
- **High-Energy Contrast:** Vibrant primary hues set against stark black ink.
- **Dimensionality via Offset:** Depth is achieved through hard-edged shadows and physical offsets rather than gradients or blurs.

## Colors

The palette utilizes a "CMYK-adjacent" logic to evoke a print-industrial feel. All colors are used at full saturation to ensure maximum vibration against the background.

- **Primary (Vibrant Yellow):** Used for main action areas and highlighting key information.
- **Secondary (Bright Pink):** Reserved for secondary interactions and experimental layout elements.
- **Tertiary (Electric Blue):** Used for links, informational callouts, and technical details.
- **Neutral:** A light grey background provides a slightly softer base than pure white, allowing the high-contrast elements to pop without causing excessive eye strain.
- **Ink Black:** Used for all borders, shadows, and primary text.

## Typography

Typography in this design system is treated as a structural element. **Montserrat** provides the heavy, geometric weight required for headlines, while **Archivo Narrow** ensures that body copy remains legible and efficient, even when packed into tight grid cells.

- **Headlines:** Must always be bold or black weights. Use tight letter spacing for large display sizes to create a "blocky" feel.
- **Body:** Use the narrow variant to maintain an industrial, data-heavy aesthetic.
- **Hierarchy:** Lean into extreme scale differences between display text and body copy to create visual rhythm.

## Layout & Spacing

The layout follows a **Rigid Grid** philosophy. Content is contained within visible borders, and spacing is mathematical and consistent.

- **Grid:** A 12-column grid on desktop with 24px gutters. All major sections should be separated by a 4px black horizontal rule.
- **Padding:** Elements inside cards or containers should use a consistent 24px or 32px padding to ensure content does not touch the heavy borders.
- **Offsets:** Use the `shadow-offset` value to displace elements from their backgrounds, creating a physical "layered paper" effect.
- **Mobile:** Transition to a 4-column grid. Reduce heavy borders to 2px if the layout feels too cramped, but maintain the 4px borders for primary buttons.

## Elevation & Depth

Depth is conveyed through **Hard-Edged Shadows** rather than Z-axis blurs. 

- **Shadow Character:** All shadows are 100% opacity black (`#000000`). They are not blurred.
- **Direction:** Shadows are cast at a 45-degree angle (bottom-right).
- **Interaction:** On hover, elements should "press down"—this is achieved by reducing the shadow offset and translating the element's position towards the shadow (e.g., `translate(4px, 4px)` with a 4px shadow).
- **Layering:** Use primary or secondary colors as background fills for the shadow "wells" to add an extra pop of color.

## Shapes

The shape language is strictly **Sharp**. 

- **Corner Radius:** 0px across all components (buttons, cards, inputs).
- **Strokes:** Every container must have a black border. Use `border-thick` (4px) for top-level containers and `border-thin` (2px) for nested elements or form fields.
- **Consistency:** Do not mix rounded and sharp corners. Even "pill" style indicators should be rendered as rectangles with heavy borders.

## Components

### Buttons
Buttons are the primary interactive element.
- **Style:** 4px black border, solid color fill (Primary or Secondary).
- **Shadow:** 8px hard black shadow.
- **Hover:** Translate button 4px towards the shadow and reduce shadow size to 4px.
- **Active:** Translate button 8px (fully flush) and remove shadow.

### Cards
- **Style:** 4px black border with a 24px internal padding.
- **Header:** Often separated by a 2px horizontal rule.
- **Shadow:** Static 8px hard black shadow.

### Input Fields
- **Style:** 2px black border, white background.
- **Focus:** Change border to 4px or change background to a very light tint of the primary color. Do not use soft glows.

### Chips/Tags
- **Style:** 2px black border, 12px horizontal padding.
- **Typography:** `label-bold`.

### Navigation
- **Style:** A fixed top bar with a 4px bottom border.
- **Links:** Use `headline-md` at a smaller scale or `label-bold`. On hover, add a Primary color background block behind the text.

### Additional Components
- **Marquee:** Use a scrolling horizontal text bar with a Primary color background and black borders for announcements or social proof.
- **Industrial Dividers:** Use thick black lines with arrowheads or "plus" signs at intersections to denote grid corners.