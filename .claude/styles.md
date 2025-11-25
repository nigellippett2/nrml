# Design System Style Guide

Use this guide to enforce consistent styling across all components and pages in the NRML application.

## Core Principles

1. **Always use design tokens** - No hard-coded colors or spacing
2. **Dark mode support** - Every component must work in both light and dark modes
3. **Accessibility first** - Proper focus states, ARIA labels, and semantic HTML
4. **Consistency** - Reuse patterns, don't reinvent styling

---

## 1. BUTTONS

### Usage

```tsx
import { Button } from "@/components/ui/button";

// Primary - Main actions (submit, save, create)
<Button variant="primary" size="md">Save Changes</Button>

// Secondary - Alternative actions
<Button variant="secondary" size="md">Cancel</Button>

// Outline - Tertiary actions, less emphasis
<Button variant="outline" size="md">Learn More</Button>

// Ghost - Minimal actions, text-like
<Button variant="ghost" size="md">Skip</Button>
```

### Variants

- **primary**: `bg-primary-500 text-white hover:bg-primary-600`
- **secondary**: `bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100`
- **outline**: `border-2 border-primary-500 text-primary-500`
- **ghost**: `text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800`

### Sizes

- **sm**: `px-3 py-1.5 text-sm` - Headers, inline actions
- **md**: `px-4 py-2 text-base` - Standard forms, cards
- **lg**: `px-6 py-3 text-lg` - Hero sections, important CTAs

### Rules

✅ Use `variant="primary"` for the main action on a page
✅ Always include `size` prop for clarity
✅ Use `disabled` prop, not custom opacity
❌ Don't create custom button styles - extend the component instead

---

## 2. TYPOGRAPHY

### Display Sizes (Large headings, hero text)

```tsx
<h1 className="text-display-2xl font-bold text-gray-900 dark:text-gray-50">
  Hero Heading
</h1>

<h2 className="text-display-lg font-bold text-gray-900 dark:text-gray-50">
  Section Heading
</h2>
```

Sizes: `text-display-2xl`, `text-display-xl`, `text-display-lg`, `text-display-md`, `text-display-sm`, `text-display-xs`

### Body Text Sizes

```tsx
<p className="text-xl text-gray-900 dark:text-gray-50">Extra large body</p>
<p className="text-lg text-gray-700 dark:text-gray-300">Large body</p>
<p className="text-md text-gray-700 dark:text-gray-300">Default body</p>
<p className="text-sm text-gray-600 dark:text-gray-400">Small body</p>
<p className="text-xs text-gray-500">Extra small / captions</p>
```

### Text Color Hierarchy

- **Primary text**: `text-gray-900 dark:text-gray-50` - Main content, headings
- **Secondary text**: `text-gray-700 dark:text-gray-300` - Body copy, descriptions
- **Tertiary text**: `text-gray-600 dark:text-gray-400` - Supporting text
- **Quaternary text**: `text-gray-500` - Captions, placeholders (same in both modes)

### Font Weights

- **Normal**: `font-normal` (400) - Body text
- **Medium**: `font-medium` (500) - Sub-headings, emphasis
- **Semibold**: `font-semibold` (600) - Buttons, labels, headings
- **Bold**: `font-bold` (700) - Important headings

### Rules

✅ Always specify dark mode variant for text colors
✅ Use semantic hierarchy (primary > secondary > tertiary)
✅ Headings should be `font-bold` or `font-semibold`
❌ Don't use arbitrary text sizes - stick to the scale

---

## 3. FORMS

### Text Input

```tsx
<div>
  <label className="block text-sm font-medium text-gray-900 dark:text-gray-50 mb-1.5">
    Label Text
  </label>
  <input
    type="text"
    placeholder="Placeholder text"
    className={cx(
      'w-full px-3.5 py-2.5 rounded-lg',
      'bg-white dark:bg-gray-950',
      'border border-gray-300 dark:border-gray-700',
      'text-gray-900 dark:text-gray-50 placeholder:text-gray-500',
      'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent',
      'transition-colors'
    )}
  />
</div>
```

### Select Dropdown

```tsx
<select
  className={cx(
    'w-full px-3.5 py-2.5 rounded-lg',
    'bg-white dark:bg-gray-950',
    'border border-gray-300 dark:border-gray-700',
    'text-gray-900 dark:text-gray-50',
    'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent',
    'transition-colors'
  )}
>
  <option value="">Select an option</option>
  <option value="1">Option 1</option>
</select>
```

### Validation States

#### Error State

```tsx
<input
  className={cx(
    "w-full px-3.5 py-2.5 rounded-lg",
    "bg-white dark:bg-gray-950",
    "border-2 border-error-500",
    "text-gray-900 dark:text-gray-50",
    "focus:outline-none focus:ring-2 focus:ring-error-500"
  )}
/>
<p className="mt-1.5 text-sm text-error-600 dark:text-error-400">
  Error message here
</p>
```

#### Success State

```tsx
<input
  className={cx(
    "w-full px-3.5 py-2.5 rounded-lg",
    "bg-white dark:bg-gray-950",
    "border-2 border-success-500",
    "text-gray-900 dark:text-gray-50",
    "focus:outline-none focus:ring-2 focus:ring-success-500"
  )}
/>
<p className="mt-1.5 text-sm text-success-600 dark:text-success-400">
  Success message here
</p>
```

### Checkboxes

```tsx
<label className="flex items-center gap-2 cursor-pointer">
  <input
    type="checkbox"
    className="h-4 w-4 rounded border-gray-300 text-primary-500 focus:ring-2 focus:ring-primary-500"
  />
  <span className="text-sm text-gray-700 dark:text-gray-300">Checkbox label</span>
</label>
```

### Rules

✅ Labels always use `text-sm font-medium`
✅ Inputs always have `px-3.5 py-2.5` padding
✅ Always include `transition-colors` for smooth interactions
✅ Always use `focus:ring-2 focus:ring-primary-500`
❌ Don't use different padding or border radius - keep it consistent

---

## 4. COLORS

### Primary Palette

Use for: Brand elements, primary actions, active states

```tsx
bg - primary - 50; // Subtle backgrounds
bg - primary - 100; // Light backgrounds
bg - primary - 500; // Primary actions, brand color
bg - primary - 600; // Hover states
bg - primary - 700; // Active/pressed states
```

### Semantic Colors

#### Success (Green)

```tsx
bg-success-50 border-success-200 text-success-700 dark:text-success-400  // Alerts
bg-success-500  // Success actions
```

#### Error (Red)

```tsx
bg-error-50 border-error-200 text-error-700 dark:text-error-400  // Alerts
bg-error-500  // Error indicators
```

#### Warning (Orange/Yellow)

```tsx
bg-warning-50 border-warning-200 text-warning-700 dark:text-warning-400  // Alerts
bg-warning-500  // Warning indicators
```

#### Info (Primary/Blue)

```tsx
bg-primary-50 border-primary-200 text-primary-700 dark:text-primary-400  // Info alerts
```

### Text Colors (Light/Dark Mode)

```tsx
// Always specify both modes:
text-gray-900 dark:text-gray-50      // Primary text
text-gray-700 dark:text-gray-300     // Secondary text
text-gray-600 dark:text-gray-400     // Tertiary text
text-gray-500                         // Quaternary (same in both modes)
```

### Rules

✅ Always use semantic color names (success, error, warning)
✅ Always specify dark mode variants for text/backgrounds
✅ Use 50/100 shades for backgrounds, 500/600 for foregrounds
❌ Don't use arbitrary gray shades - stick to the defined hierarchy

---

## 5. CARDS & CONTAINERS

### Basic Card

```tsx
<div className="bg-white dark:bg-gray-950 rounded-lg border border-gray-200 dark:border-gray-800 p-6">
  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50 mb-2">Card Title</h3>
  <p className="text-gray-600 dark:text-gray-400">Card content goes here.</p>
</div>
```

### Alert Cards

#### Success Alert

```tsx
<div className="bg-success-50 dark:bg-success-900/20 border border-success-200 dark:border-success-800 rounded-lg p-4">
  <div className="flex items-start gap-3">
    <svg className="h-5 w-5 text-success-600 dark:text-success-400 flex-shrink-0 mt-0.5">
      {/* Icon */}
    </svg>
    <div>
      <p className="text-sm font-medium text-success-700 dark:text-success-400">Success Title</p>
      <p className="text-sm text-success-600 dark:text-success-500 mt-1">
        Success message content.
      </p>
    </div>
  </div>
</div>
```

#### Error Alert

```tsx
<div className="bg-error-50 dark:bg-error-900/20 border border-error-200 dark:border-error-800 rounded-lg p-4">
  {/* Same structure as success, with error-* colors */}
</div>
```

#### Warning Alert

```tsx
<div className="bg-warning-50 dark:bg-warning-900/20 border border-warning-200 dark:border-warning-800 rounded-lg p-4">
  {/* Same structure, with warning-* colors */}
</div>
```

#### Info Alert

```tsx
<div className="bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800 rounded-lg p-4">
  {/* Same structure, with primary-* colors */}
</div>
```

### Shadow Variations

```tsx
shadow - sm; // Subtle elevation (small cards)
shadow - md; // Medium elevation (modals, popovers)
shadow - lg; // High elevation (dropdowns, menus)
shadow - xl; // Very high elevation (major modals)
```

### Container Padding

```tsx
p - 3; // Compact (12px)
p - 4; // Standard (16px)
p - 6; // Spacious (24px) - Most common for cards
p - 8; // Very spacious (32px)
```

### Rules

✅ Cards always use `rounded-lg` (8px)
✅ Cards always have border in both light and dark modes
✅ Use `p-6` for standard card padding
✅ Alert icons always use `flex-shrink-0` to prevent squishing
❌ Don't mix shadow sizes on the same hierarchy level

---

## 6. NAVIGATION

### Navigation Item States

#### Active State

```tsx
<div className="flex items-center gap-3 px-4 py-2 rounded-lg bg-primary-50 dark:bg-primary-900/20 text-gray-600 dark:text-gray-400">
  <svg className="h-5 w-5">{/* Icon */}</svg>
  <span className="text-sm font-semibold">Active Item</span>
</div>
```

**Note**: Active navigation items use muted gray text (`text-gray-600 dark:text-gray-400`) instead of primary color for a more subtle, professional appearance that matches the overall UI tone.

#### Hover State

```tsx
<div className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 transition-colors">
  <svg className="h-5 w-5">{/* Icon */}</svg>
  <span className="text-sm">Hover Item</span>
</div>
```

#### Default State

```tsx
<div className="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300">
  <svg className="h-5 w-5">{/* Icon */}</svg>
  <span className="text-sm">Default Item</span>
</div>
```

### Link Styling

```tsx
// In-content links
<a href="#" className="text-primary-600 dark:text-primary-400 hover:underline">
  Link text
</a>

// Footer links (on dark background)
<a href="#" className="text-gray-50 hover:text-primary-400 transition-colors">
  Footer link
</a>

// Navigation links
<a href="#" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-50">
  Nav link
</a>
```

### Rules

✅ Active items use primary color with light background
✅ Always include `transition-colors` for smooth hover
✅ Navigation icons always `h-5 w-5`
✅ Active items should be `font-semibold`
❌ Don't use different padding for navigation items - keep `px-4 py-2`

---

## 7. ICONS & BADGES

### Icon Library

**Primary Icon Library**: `@untitledui/icons` (v0.0.19) - 1,172+ SVG icons

This is the ONLY icon library to use for NRML. All icons must come from @untitledui/icons.

```tsx
import { BarChart01, Target01, TrendUp01, Lock01, Users01, Zap } from '@untitledui/icons';

// Usage
<BarChart01 className="h-10 w-10 text-primary-400" />
```

**Do NOT use:**
- ❌ Emojis
- ❌ HeroIcons or other icon libraries
- ❌ Custom SVG icons (use untitled.ui equivalents instead)

### Common NRML Icons

Used throughout the application:

```tsx
BarChart01          // Initiative Assessment, Analytics, Charts
Target01            // Prioritization Framework, Goals, Targeting
TrendUp01           // Performance Tracking, Growth, Trends
Lock01              // Data Security, Privacy, Protection
Users01             // Stakeholder Management, Teams, Collaboration
Zap                 // Execution, Energy, Quick actions
MessageChatCircle   // Communication, Support, Chat
Settings01          // Configuration, Preferences, Admin
Dataflow04          // Process flows, Integration, Data
BookOpen01          // Documentation, Learning, Resources
```

### Icon Sizes

```tsx
h-4 w-4   // Small icons (inline with small text)
h-5 w-5   // Standard icons (navigation, buttons)
h-6 w-6   // Large icons (headers, feature cards)
h-8 w-8   // Extra large icons (hero sections)
h-10 w-10 // Feature icons (dashboard quick actions)
h-16 w-16 // Empty state icons
```

### Icon Color Guidelines

#### Feature Card Icons (Most Common)

Use primary color for featured/action icons in cards and sections:

```tsx
<BarChart01 className="h-10 w-10 text-primary-400" />
```

#### Navigation Icons

Navigation icons inherit text color from parent:

```tsx
// Active state
<Icon className="h-5 w-5" /> // Inherits text-gray-600 dark:text-gray-400

// Default state
<Icon className="h-5 w-5" /> // Inherits text-gray-700 dark:text-gray-300
```

#### Empty State Icons

Use muted colors for empty states and backgrounds:

```tsx
<Icon className="h-16 w-16 text-gray-400 dark:text-gray-600" />
```

#### Semantic Color Icons

Use semantic colors for status/state icons:

```tsx
<Icon className="h-5 w-5 text-success-500" />  // Success
<Icon className="h-5 w-5 text-error-500" />    // Error
<Icon className="h-5 w-5 text-warning-500" />  // Warning
```

### Icon Usage Examples

```tsx
// Feature card icon (correct)
import { BarChart01 } from '@untitledui/icons';
<BarChart01 className="h-10 w-10 text-primary-400" />

// Navigation icon (inherits color from parent)
import { Settings01 } from '@untitledui/icons';
<div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
  <Settings01 className="h-5 w-5" />
  <span>Settings</span>
</div>

// Status icon
import { CheckCircle01 } from '@untitledui/icons';
<CheckCircle01 className="h-5 w-5 text-success-500" />
```

### Icon Replacement Guidelines

✅ **DO**: Use Untitled UI icons for all new components
✅ **DO**: Replace ALL emojis with appropriate Untitled UI icons
✅ **DO**: Use `text-primary-400` for featured/action icons in cards
✅ **DO**: Use `text-gray-400 dark:text-gray-600` for empty state icons
✅ **DO**: Check [@untitledui/icons icon gallery](https://www.untitledui.com/icons) for available icons
❌ **DON'T**: Use emojis in production UI (NEVER)
❌ **DON'T**: Use any icon library other than @untitledui/icons
❌ **DON'T**: Mix icon libraries in the same component
❌ **DON'T**: Use overly saturated colors like `text-primary-500` or `text-primary-600` for icons

### Badges

```tsx
// Default
<span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
  Badge
</span>

// Primary
<span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400">
  Primary
</span>

// Success
<span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-success-100 dark:bg-success-900/30 text-success-700 dark:text-success-400">
  Success
</span>

// Error
<span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-error-100 dark:bg-error-900/30 text-error-700 dark:text-error-400">
  Error
</span>
```

### Avatars

```tsx
<div className="h-10 w-10 rounded-full bg-primary-500 text-white flex items-center justify-center font-semibold text-sm">
  AB
</div>
```

### Rules

✅ Icons always use `flex-shrink-0` to prevent squishing
✅ Icons inherit color with `currentColor` or specify explicitly
✅ Badges always `rounded-full` and `text-xs font-semibold`
✅ Avatars always `rounded-full` with primary background
❌ Don't use arbitrary icon sizes - stick to the defined scale

---

## 8. SPACING & LAYOUT

### Spacing Scale (Gap, Margin, Padding)

```tsx
gap - 2; // 8px  - Tight spacing
gap - 3; // 12px - Comfortable spacing
gap - 4; // 16px - Standard spacing
gap - 6; // 24px - Spacious
gap - 8; // 32px - Very spacious
gap - 12; // 48px - Section spacing
```

### Common Patterns

```tsx
// Form field spacing
<div className="space-y-4">
  {/* Form fields */}
</div>

// Card grid
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Cards */}
</div>

// Flex layouts
<div className="flex items-center gap-3">
  {/* Items */}
</div>

// Section spacing
<section className="py-12">
  {/* Content */}
</section>

// Container
<div className="max-w-7xl mx-auto px-6">
  {/* Page content */}
</div>
```

### Rules

✅ Use spacing scale, not arbitrary values
✅ Section vertical padding: `py-12` or `py-20`
✅ Container horizontal padding: `px-6`
✅ Max width for content: `max-w-7xl`
❌ Don't use `space-y` and individual `mb` together - choose one approach

---

## 9. ACCESSIBILITY

### Focus States

Always include focus states on interactive elements:

```tsx
focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
```

### Semantic HTML

✅ Use `<button>` for actions, `<a>` for navigation
✅ Use proper heading hierarchy (h1 → h2 → h3)
✅ Include `aria-label` for icon-only buttons
✅ Use `<label>` with `htmlFor` for form inputs

### Keyboard Navigation

✅ All interactive elements must be keyboard accessible
✅ Use proper `tabIndex` when needed
✅ Ensure focus is visible (don't use `outline-none` without replacement)

---

## 10. RESPONSIVE DESIGN

### Breakpoints

```tsx
sm   // 640px
md   // 768px
lg   // 1024px
xl   // 1280px
2xl  // 1536px
```

### Common Patterns

```tsx
// Hide on mobile, show on desktop
<div className="hidden lg:flex">

// Stack on mobile, grid on desktop
<div className="flex flex-col md:grid md:grid-cols-2">

// Different padding on mobile vs desktop
<div className="px-4 sm:px-6 lg:px-8">

// Responsive text size
<h1 className="text-3xl sm:text-4xl lg:text-5xl">
```

### Rules

✅ Design mobile-first, then add responsive variants
✅ Test all breakpoints, especially mobile (375px) and desktop (1440px)
✅ Navigation should be mobile-friendly (hamburger menu if needed)

---

## ENFORCEMENT CHECKLIST

When reviewing or writing code, verify:

- [ ] All colors use design tokens (no hex codes)
- [ ] Dark mode variants included for all text/backgrounds
- [ ] Buttons use the Button component, not custom styles
- [ ] Focus states included on all interactive elements
- [ ] Consistent spacing (using the defined scale)
- [ ] Consistent border radius (`rounded-lg` for cards/inputs)
- [ ] Typography uses the defined hierarchy
- [ ] Icons use `flex-shrink-0`
- [ ] Transitions use `transition-colors` for smooth interactions
- [ ] Responsive design tested on mobile and desktop
- [ ] Semantic HTML used correctly
- [ ] Accessibility requirements met (ARIA labels, keyboard nav)

---

## Quick Reference

View live examples: [http://localhost:3000/styles](http://localhost:3000/styles) (development only)

For questions or additions to this guide, update this file and ensure it aligns with the actual implementation in `components/ui/` and the styles showcase page.
