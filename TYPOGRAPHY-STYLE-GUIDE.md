# Typography Style Guide

This style guide documents the typography system used throughout the Voyager Blog, with a focus on the bold, editorial-style typography featured on article pages.

## Philosophy

The typography system emphasizes:
- **Scale & Impact**: Large, bold headlines that command attention
- **Fluid Sizing**: Typography that scales naturally across all screen sizes
- **Editorial Quality**: Professional, magazine-style typography
- **Hierarchy**: Clear visual distinction between content levels
- **Readability**: Comfortable line heights and spacing for body text

## Font Families

### Display Font (`font-display`)
Used for headlines, titles, and major headings. Should be bold and have strong visual presence.

### Sans Font (`font-sans`)
Used for body text, metadata, and supporting content. Should be clean and highly readable.

## Typography Scale

### Hero/Page Titles (.fluid-title)

The signature style of the blog - massive, bold titles that scale fluidly.

**CSS Implementation:**
```css
.fluid-title {
  font-size: clamp(2.5rem, 8vw + 0.625rem, 12.5rem);
  line-height: 0.9;
  letter-spacing: -0.03em;
}

@media (min-width: 768px) {
  .fluid-title {
    font-size: clamp(5rem, 10vw + 1.25rem, 15rem);
  }
}

@media (min-width: 1024px) {
  .fluid-title {
    font-size: clamp(6.25rem, 12vw + 1.875rem, 18.75rem);
  }
}
```

**Tailwind Classes:**
```html
<h1 class="font-display font-bold fluid-title">
  YOUR TITLE
</h1>
```

**Use Cases:**
- Article page main titles
- Landing page hero headlines
- Major section dividers

**Characteristics:**
- Font size: 2.5rem (mobile) → 18.75rem (desktop max)
- Line height: 0.9 (tight, dramatic)
- Letter spacing: -0.03em (slightly condensed)
- Font weight: bold
- Display each word on its own line for maximum impact

### H1 - Primary Headlines (Article Titles)

**Size Scale:**
- Mobile: `text-[2rem]` (32px)
- Tablet: `md:text-[2.625rem]` (42px)
- Desktop: `lg:text-[3.75rem]` (60px)
- Large Desktop: `3xl:text-[5rem]` (80px at 1920px+)

**Styling:**
```html
<h1 class="text-[2rem] md:text-[2.625rem] lg:text-[3.75rem] 3xl:text-[5rem] font-display font-semibold tracking-[-0.01em] leading-[1.2] md:leading-[1]">
```

**Characteristics:**
- Font family: Display
- Font weight: Semibold (600)
- Line height: 1.2 (mobile) → 1.0 (desktop)
- Letter spacing: -0.01em
- Progressive scaling for optimal impact at all screen sizes
- Use for article page titles

### H2 - Section Headers

**Size Scale:**
- Mobile: `text-[1.125rem]` (18px)
- Tablet: `md:text-[1.3125rem]` (21px)
- Desktop: `lg:text-[1.6875rem]` (27px)

**Styling:**
```html
<h2 class="text-[1.125rem] md:text-[1.3125rem] lg:text-[1.6875rem] font-display font-semibold tracking-[-0.02em] leading-[1.6] lg:leading-[1.4]">
```

**Spacing:**
- Margin top: `mt-[1.666em]`
- Margin bottom: `mb-[0.666em]`

**Characteristics:**
- Font family: Display
- Font weight: Semibold (600)
- Designed for article section headers

### H3 - Subsection Headers

**Size Scale:**
- Standard heading size with bold weight

**Styling:**
```html
<h3 class="font-display font-bold">
```

**Spacing:**
- Margin top: `mt-[1.875em]`
- Margin bottom: `mb-[0.75em]`

### Subtitle/Lead Text

**Size Scale:**
- Mobile: `text-[1.125rem]` (18px)
- Tablet: `md:text-[1.375rem]` (22px)

**Styling:**
```html
<p class="font-sans text-[1.125rem] md:text-[1.375rem] text-muted-foreground leading-relaxed">
```

**Use Cases:**
- Article subtitles
- Lead paragraphs
- Important descriptive text

**Characteristics:**
- Font family: Sans
- Color: Muted foreground
- Line height: relaxed (1.625)

### Body Text

**Size Scale (Article Content):**
- Mobile: `1.125rem` (18px)
- Tablet (768px+): `1.5rem` (24px)
- Desktop (1024px+): `1.625rem` (26px)
- Large Desktop (1536px+): `2.25rem` (36px)

**Styling:**
```html
<p class="text-[1.125rem] md:text-[1.5rem] lg:text-[1.625rem] 2xl:text-[2.25rem] font-normal tracking-[-0.01em] leading-[1.45] mb-[1.25rem]">
```

**Characteristics:**
- Font family: Sans (inherited)
- Font weight: Normal (400)
- Line height: 1.45 (comfortable reading)
- Letter spacing: -0.01em (slightly tighter for large sizes)
- Margin bottom: 1.25rem between paragraphs
- Scales progressively for optimal readability at all screen sizes

### Small Text/Metadata

**Sizes:**
- `text-[0.875rem]` (14px) - Small metadata
- `text-[0.9375rem]` (15px) - Captions
- `text-[1rem]` (16px) - Author names

**Examples:**

Author name:
```html
<p class="text-[1rem] font-semibold text-foreground">
```

Author title:
```html
<p class="text-[0.875rem] text-muted-foreground">
```

Date/time:
```html
<time class="text-[0.875rem] font-sans tracking-wide text-muted-foreground">
```

Caption:
```html
<figcaption class="mt-3 text-sm text-center text-muted-foreground">
```

## Blockquotes

### Large Centered Blockquotes

**Implementation:**
```html
<figure class="blockquote-big">
  <blockquote>Your quote text</blockquote>
  <figcaption>Author Name</figcaption>
</figure>
```

**Styling:**
- Quote text: `text-[calc(5vw+0.375rem)]` → `lg:text-[3.375rem]`
- Font weight: extrabold (800)
- Line height: 1.2
- Text align: center
- Attribution: `text-[calc(2.5vw+0.5rem)]` → `lg:text-[1.875rem]`

### Inline/Border Blockquotes

**Implementation:**
```html
<blockquote class="italic text-lg border-l-4 border-primary pl-6 my-6">
  Your quote text
</blockquote>
```

**Characteristics:**
- Border left: 4px, primary color
- Padding left: 2.4rem (6 in Tailwind)
- Font style: italic
- Margin: 2.4rem vertical

## Grid System

The site uses a flexible CSS Grid system that adapts to different screen sizes:

### Grid Container (.article-grid-container)

**Structure:**
- Base (mobile): 18 columns
- Tablet (768px+): 22 columns
- Desktop (1180px+): 30 columns
- Max width: 1920px
- Auto-centered with margins

**CSS:**
```css
.article-grid-container {
  display: grid;
  grid-template-columns: repeat(18, 1fr);
  max-width: 1920px;
  margin: 4.375rem auto;
}
```

**Usage:**
```html
<section class="article-grid-container">
  <!-- Content uses grid column classes -->
</section>
```

### Content Width Classes

#### Standard Content Width (.article-content-width)

**Column Spans:**
- Mobile: Full width (1 / -1)
- Tablet (768px+): cols 3-20 (18 columns wide)
- Desktop (1180px+): cols 3-21 (19 columns wide)

**Use for:** Article content, hero sections, main content areas

```html
<div class="article-content-width">
  <!-- Your content -->
</div>
```

#### Inset Content Width (.article-content-inset)

**Column Spans:**
- Mobile: Full width (1 / -1)
- Tablet (768px+): cols 3-20 (18 columns wide, same as standard)
- Desktop (1180px+): cols 8-23 (16 columns wide, narrower & centered)

**Use for:** About sections, focused reading content, footers

```html
<div class="article-content-inset">
  <!-- Narrower content for focused reading -->
</div>
```

#### Accordion Content Width (.article-content-accordion)

**Column Spans:**
- Mobile: cols 2-17 (16 columns wide)
- Tablet (768px+): cols 3-20 (18 columns wide)
- Desktop (1180px+): cols 3-21 (19 columns wide)

**Special Features:**
- `align-self: center` - Vertically centers within grid row
- `.ACCORDION` modifier - Overrides all responsive grid columns to span full width (1 / -1) at ALL breakpoints

**Use for:** Feature grids, card layouts, multi-column content sections

```html
<div class="article-content-accordion">
  <!-- Wider content area with internal grid -->
  <div class="accordion-grid">
    <!-- Items automatically arranged in 2-column grid -->
  </div>
</div>

<!-- Full width accordion variant -->
<div class="article-content-accordion ACCORDION">
  <!-- Full grid width at all screen sizes -->
</div>
```

**ACCORDION Modifier:**
When you add the `.ACCORDION` class to `.article-content-accordion`, it overrides the responsive grid columns and forces full-width (1 / -1) at ALL breakpoints using `!important`. This is useful when you want the accordion to span edge-to-edge regardless of screen size.

### Two-Column Layout

For blog article grids and multi-column layouts:

**Classes:**
- `.grid-item-left` - Left column
- `.grid-item-right` - Right column

**Column Distribution:**
- Base (18 cols): Left=1-9, Right=10-18
- Tablet (22 cols): Left=1-11, Right=12-22
- Desktop (30 cols): Left=1-15, Right=16-30

**Usage:**
```html
<section class="article-grid-container">
  <div class="grid-item-left">Article 1</div>
  <div class="grid-item-right">Article 2</div>
  <div class="grid-item-left">Article 3</div>
  <div class="grid-item-right">Article 4</div>
</section>
```

### Accordion Grid Layout (.accordion-grid)

A responsive two-column grid system (max 2 columns) designed for feature cards, services, or content blocks within `.article-content-accordion`.

**Grid Configuration:**
- Always 2 columns: `repeat(2, minmax(0px, 1fr))`
- Responsive gaps:
  - Base: 48px
  - Tablet (768px+): 70px
  - Desktop (1180px+): 96px
  - Large (1920px+): 128px

**Features:**
- List-style reset (margin, padding, list-style: none)
- Equal-width columns with `minmax(0px, 1fr)`
- Progressive gap sizing for better spacing at larger screens

**Usage:**
```html
<div class="article-content-accordion">
  <h2>Features</h2>
  <div class="accordion-grid">
    <div>Feature 1</div>
    <div>Feature 2</div>
    <div>Feature 3</div>
    <div>Feature 4</div>
  </div>
</div>
```

**Complete Example:**
```html
<section class="article-grid-container">
  <div class="article-content-accordion">
    <h2 class="text-[3.6rem] font-display font-bold mb-12">Services</h2>

    <div class="accordion-grid">
      <div class="space-y-4">
        <h3 class="text-[2.4rem] font-display font-semibold">Service 1</h3>
        <p class="text-[1.6rem] text-muted-foreground">Description...</p>
      </div>

      <div class="space-y-4">
        <h3 class="text-[2.4rem] font-display font-semibold">Service 2</h3>
        <p class="text-[1.6rem] text-muted-foreground">Description...</p>
      </div>
    </div>
  </div>
</section>
```

### Grid Container Component

A more flexible grid system with enhanced margin control and wider content options.

#### GridContainer & GridWrapper

**React Components:**
```tsx
import { GridContainer, GridWrapper } from "@/components/GridContainer";

// Basic usage
<GridContainer>
  <GridWrapper>
    {/* Content spans full width */}
  </GridWrapper>
</GridContainer>

// With FULL modifier
<GridContainer>
  <GridWrapper full>
    {/* Content uses specific column spans */}
  </GridWrapper>
</GridContainer>
```

**Grid Container Specs:**
- Same 18/22/30 column structure as `.article-grid-container`
- Enhanced responsive margins:
  - Base: `2rem` top/bottom
  - Tablet (768px): `4.375rem` top/bottom
  - Desktop (1180px): `6rem` top/bottom
  - Large (1920px): `8rem` top/bottom

**Grid Wrapper Specs:**

*Default (no full prop):*
- Full width: `grid-column: 1 / -1` at all breakpoints

*With full prop (.FULL modifier):*
- Base: `cols 2-17` (16 columns wide)
- Tablet (768px): `cols 3-20` (18 columns wide)
- Desktop (1180px): `cols 3-28` (26 columns wide) - **Wider than other variants**

**Use Cases:**
- When you need more control over vertical spacing
- When you need wider content areas (26 columns vs 19)
- When you want progressive margin scaling

**CSS Classes (if not using component):**
```css
.grid-container /* Container with enhanced margins */
.grid-wrapper /* Full width by default */
.grid-wrapper.FULL /* Wider column spans */
```

**Complete Example:**
```tsx
<GridContainer>
  <GridWrapper full>
    <h2>Wide Content Section</h2>
    <div className="accordion-grid">
      <div>Item 1</div>
      <div>Item 2</div>
    </div>
  </GridWrapper>
</GridContainer>
```

### Custom Breakpoints

Added custom breakpoints to Tailwind config:
- `lgPlus: '1180px'` - For 30-column grid transition
- `3xl: '1920px'` - For large desktop typography and spacing

**Tailwind Usage:**
```html
<div class="text-lg lgPlus:text-xl 3xl:text-2xl">
```

**Complete Breakpoint List:**
- `sm:` - 640px
- `md:` - 768px
- `lg:` - 1024px
- `lgPlus:` - 1180px (custom)
- `xl:` - 1280px
- `2xl:` - 1536px
- `3xl:` - 1920px (custom)

## Spacing System

### Vertical Rhythm

- Paragraphs: `mb-[1.25rem]` (20px)
- Headings: Custom em-based margins for proportional spacing
- Sections: `mt-[1.875rem] md:mt-[3.75rem] lg:mt-[5.625rem]` (progressive spacing)
- Grid containers: `margin-top: 2.734375rem` (base), `3.75rem` (1180px+)

### Horizontal Spacing

The grid system replaces previous fixed-width containers:

**Before (deprecated):**
- Standard content: `max-w-[64rem]`
- Wide content: `max-w-[140rem]`
- Container padding: `px-[calc(18vw-10rem)]`

**Now (grid-based):**
- Use `.article-content-width` for standard content
- Use `.article-content-inset` for narrow focused content
- Use `.article-grid-container` as the main container (margins: 2.734375rem → 3.75rem)
- Grid handles all responsive spacing automatically

## Text Colors

### Hierarchy
- Primary text: `text-foreground` (98% white on dark)
- Secondary text: `text-muted-foreground` (60% gray)
- Accents: `text-primary` (blue)

### Usage
- Headlines: foreground
- Body text: foreground
- Dates, metadata, captions: muted-foreground
- Links (hover): primary

## Best Practices

### Do's ✓
- Use `.fluid-title` for hero sections to create impact
- Maintain consistent spacing using the defined scale
- Use display font for all headings
- Use sans font for body text
- Apply muted-foreground for secondary information
- Break long titles into multiple lines for visual interest

### Don'ts ✗
- Don't mix too many font sizes on one screen
- Don't use display font for body text (poor readability)
- Don't ignore the responsive scaling
- Don't use fixed font sizes without considering mobile
- Don't skip the letter-spacing adjustments on large text

## Implementation Examples

### Hero Section
```html
<div class="relative w-full max-w-[140rem] mx-auto">
  <h1 class="font-display font-bold fluid-title mb-12">
    <span class="block">YOUR</span>
    <span class="block">AMAZING</span>
    <span class="block">TITLE</span>
  </h1>

  <p class="font-sans text-[1.8rem] md:text-[2.2rem] text-muted-foreground max-w-[50rem] leading-relaxed">
    Your compelling subtitle or description goes here.
  </p>
</div>
```

### Article Content
```html
<div class="max-w-[64rem] mx-auto">
  <h2 class="text-[1.8rem] md:text-[2.1rem] lg:text-[2.7rem] font-display font-semibold tracking-[-0.02em] mt-[1.666em] mb-[0.666em]">
    Section Title
  </h2>

  <p class="mb-[2rem]">
    Your body text with comfortable line height and spacing.
  </p>
</div>
```

### Metadata Display
```html
<div class="flex items-center gap-4">
  <img src="avatar.jpg" class="w-[5rem] h-[5rem] rounded-full" />
  <div class="font-sans">
    <p class="text-[1.6rem] font-semibold text-foreground">Author Name</p>
    <p class="text-[1.4rem] text-muted-foreground">Author Title</p>
  </div>
</div>
```

## Accessibility Notes

- Line height of 2.0 for body text exceeds WCAG recommendations (1.5 minimum)
- Large text contrast ratios meet WCAG AA standards
- Font sizes use rem units for browser zoom compatibility
- Semantic HTML (h1, h2, h3) maintains document outline
- Color contrast between foreground/background meets accessibility standards

## Technical Implementation

### HTML Root Font Size
The system uses the browser default root font size of 16px:
```css
/* No custom html font-size - uses browser default */
/* 1rem = 16px */
```

This means:
- 1rem = 16px
- 1.125rem = 18px
- 1.5rem = 24px
- 3.75rem = 60px
- 2.25rem = 36px

### Fluid Typography with clamp()
The fluid-title class uses CSS clamp() for responsive sizing:
```
clamp(minimum, preferred, maximum)
```

This provides:
- Minimum size on small screens
- Fluid scaling in between (using vw units)
- Maximum size on large screens
- No media queries needed for the sizing itself

---

**Version:** 1.0
**Last Updated:** 2024
**Maintained by:** Voyager Blog Design System
