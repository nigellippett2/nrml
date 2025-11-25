# Claude Code Guide

This file provides guidance for Claude Code when working with this project.

## Project Overview

NRML (Strategic Initiative Advisory & Management) is a comprehensive platform for strategic initiative assessment, prioritization, and management. Built with Next.js 16, React 19, Supabase, and Tailwind CSS 4, it provides organizations with tools to evaluate initiatives across multiple dimensions (strategic alignment, outcomes, governance, capabilities, and costs) and make data-driven decisions about resource allocation and sequencing.

## Key Directories

- `/app` - Next.js application with pages and API routes
  - `/app/api` - API endpoints and routes
  - `/pages` - Application pages and layouts
- `/components` - React components
  - `/components/ui` - Reusable UI components (Button, ThemeToggle, DropdownMenu, etc.)
  - `/components/providers` - Context providers (ThemeProvider)
- `/lib` - Utility functions and helpers
  - `/lib/utils` - Utility functions like cx for class merging
- `/public` - Static assets (images, icons, fonts)
- `/tests` - Test files (unit, integration, E2E)
- `/docs` - Project documentation
  - `/docs/1-prd` - Product requirements and specifications
  - `/docs/1-prd/1-0-architecture` - Architecture documentation
- `/.claude` - Claude Code configuration
  - `/.claude/styles.md` - Design system and styling guidelines
  - `/.claude/deploy.md` - Deployment workflow documentation

## Important Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run test     # Run tests
```

## Architecture Notes

- **Framework**: Next.js 16 with React 19 for server-side rendering, static generation, and API routes
- **Backend**: Supabase for PostgreSQL database, authentication, real-time features, and storage
- **Styling**: Tailwind CSS 4 with PostCSS integration (@tailwindcss/postcss plugin)
- **Theme System**: next-themes for light/dark mode support with class-based switching
- **UI Components**: @headlessui/react for accessible, unstyled component primitives
- **Type Safety**: TypeScript for full type checking and IntelliSense support
- **Class Utilities**: clsx and tailwind-merge (via cx utility) for intelligent class merging
- **Database**: Supabase PostgreSQL with environment-specific configurations (nrml-dev, nrml-test, nrml-prod)

## Design System

The NRML application includes a comprehensive design system with reusable components, utilities, and theming support.

### Available Components

Located in `/components/ui/`:

- **Button** - Primary UI component with variants (primary, secondary, outline, ghost) and sizes (sm, md, lg)
  ```tsx
  import { Button } from '@/components/ui/Button';

  <Button variant="primary" size="md">Click me</Button>
  ```

- **ThemeToggle** - Dark/light mode toggle with next-themes integration
  ```tsx
  import { ThemeToggle } from '@/components/ui/theme-toggle';

  <ThemeToggle />
  ```

- **DropdownMenu** - Accessible dropdown menu using @headlessui/react
  ```tsx
  import { DropdownMenu } from '@/components/ui/dropdown-menu';

  <DropdownMenu
    trigger={<span>Menu</span>}
    items={[
      { label: 'Option 1', href: '/page1' },
      { label: 'Option 2', onClick: handleClick },
      { separator: true },
      { label: 'Option 3', href: '/page3' }
    ]}
  />
  ```

### Utilities

- **cx** - Class merging utility at `/lib/utils/cx.ts`
  - Combines clsx and tailwind-merge for intelligent Tailwind class deduplication
  - Use instead of template literals or className concatenation
  ```tsx
  import { cx } from '@/lib/utils/cx';

  const buttonClass = cx(
    'px-4 py-2 rounded',
    active && 'bg-blue-500',
    'bg-gray-100'  // This won't conflict with above
  );
  ```

### Icon System

NRML uses **@untitledui/icons** (v0.0.19) for all SVG icons throughout the application. The package provides 1,172+ professionally designed icons.

**Installation:**
```bash
npm install @untitledui/icons
```

**Usage:**
Import icon components directly and use them as React components:
```tsx
import { BarChart01, Target01, Users01, Lock01 } from '@untitledui/icons';

// Use icons in components
<BarChart01 className="h-10 w-10 text-primary-400" />
```

**Icon Sizing:**
- `h-5 w-5` - Small (16px) - Used in inline text, badges
- `h-6 w-6` - Medium (24px) - Used in navigation, headers
- `h-10 w-10` - Large (40px) - Used in feature cards, prominent sections

**Icon Coloring:**
Use Tailwind color classes with icons:
```tsx
<IconComponent className="text-primary-400 dark:text-primary-300" />
<IconComponent className="text-gray-500 dark:text-gray-400" />
<IconComponent className="text-error-500" />
```

**Common Icons in NRML:**
- `BarChart01` - Charts, analytics, data
- `Target01` - Targeting, goals, prioritization
- `TrendUp01` - Growth, performance tracking, trends
- `Lock01` - Security, data protection
- `Users01` - Users, stakeholders, teams
- `Zap` - Lightning, energy, execution

**Finding Icons:**
Browse all available icons at [Untitled UI Icon Gallery](https://www.untitledui.com/icons) or check the [@untitledui/icons package](https://www.npmjs.com/package/@untitledui/icons).

### Theme Management

- **ThemeProvider** - Wraps the entire app at `app/layout.tsx`
  - Provides context for theme switching via next-themes
  - Supports 'light' and 'dark' themes with class-based switching
  - Default theme: 'dark'

- **Dark Mode Support** - All components support dark mode with `dark:` prefix
  ```tsx
  className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-50"
  ```

### Styles Showcase

Visit `/styles` (development only) to see all components, color palettes, typography styles, and patterns.

## Common Tasks

### Adding a feature
1. Create feature branch: `git checkout -b feature/feature-name`
2. Implement feature in appropriate directory (components, app, or lib)
3. Add tests in `/tests` directory
4. Run tests: `npm run test`
5. Commit changes with descriptive message

### Fixing a bug
1. Identify the bug and create test case that reproduces it
2. Make minimal changes to fix the issue
3. Run tests to ensure fix works and doesn't break other tests
4. Commit with reference to issue (if applicable)

### Before committing or pushing to GitHub
**IMPORTANT:** Always push commits to the `develop` branch only. Never push directly to `staging` or `main` branches - those are reserved for deployments through the deployment workflow. Check [deploy.md](./deploy.md) for deployment instructions and requirements.

### Running tests
```bash
npm run test              # Run all tests
npm run test -- --watch   # Watch mode
```

## Code Conventions

- Use TypeScript for type safety
- Follow ESLint and Prettier formatting rules
- Use functional components with hooks
- Keep components small and focused (single responsibility)
- Use descriptive variable and function names
- Add JSDoc comments for complex logic only

### Styling Guidelines
**IMPORTANT:** Check [styles.md](./styles.md) for instructions on how to enforce consistent styling across all components and pages in the NRML application.

## Useful Links

### Framework & Runtime
- [Next.js 16 Documentation](https://nextjs.org/docs)
- [React 19 Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

### Styling & Theme
- [Tailwind CSS 4 Documentation](https://tailwindcss.com/docs)
- [next-themes Documentation](https://github.com/pacocoursey/next-themes)
- [Headless UI Documentation](https://headlessui.com)
- [@untitledui/icons Package](https://www.npmjs.com/package/@untitledui/icons) - 1,172+ professionally designed SVG icons
- [Untitled UI Icon Gallery](https://www.untitledui.com/icons) - Browse all available icons

### Backend & Database
- [Supabase Documentation](https://supabase.com/docs)
- [PostgreSQL Documentation](https://www.postgresql.org/docs)

### Utilities
- [clsx Documentation](https://github.com/lukeed/clsx)
- [tailwind-merge Documentation](https://github.com/dcastil/tailwind-merge)

## Documentation Index

- **CLAUDE.md** - This file (Claude Code guide)
- **[docs/1-prd/1-0-architecture/architecture.md](docs/1-prd/1-0-architecture/architecture.md)** - System architecture and technology stack
- **[.claude/deploy.md](.claude/deploy.md)** - Deployment workflow and environment management
- **[.claude/styles.md](.claude/styles.md)** - Design system and styling guidelines
- **README.md** - Project setup and quick start guide
- **package.json** - Project dependencies and scripts

## Architecture & Deployment Reference

When implementing features or making changes:

1. **Architecture Details**: See [Architecture Documentation](docs/1-prd/1-0-architecture/architecture.md) for:
   - Technology stack overview (Next.js 16, React 19, Supabase, Tailwind CSS 4)
   - Frontend, application, and data layer components
   - Styling and CSS architecture (Tailwind CSS 4 with PostCSS)
   - Environment configuration (nrml-dev, nrml-test, nrml-prod)
   - Performance and security considerations

2. **Design System**: See the [Design System](#design-system) section above or visit `/styles` (development) to:
   - Use reusable UI components (Button, ThemeToggle, DropdownMenu)
   - Apply consistent styling with Tailwind CSS 4 and the cx utility
   - Implement dark mode support with next-themes
   - View all available components, colors, and typography patterns

3. **Deployment Process**: See [Deploy Guide](.claude/deploy.md) for:
   - Development workflow and git branches (develop, staging, main)
   - Staging and production deployment steps
   - Required safety checks before deployment
   - Environment-specific Supabase database configuration

4. **Styling Guidelines**: See [Style Guide](.claude/styles.md) for:
   - Design tokens and color system
   - Component patterns (buttons, forms, cards, navigation)
   - Dark mode implementation
   - Accessibility requirements
