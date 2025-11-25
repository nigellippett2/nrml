# NRML Application

A modern web application built with Next.js, React, and Supabase.

## Technology Stack

- **Frontend**: Next.js 16, React 19, TypeScript
- **Components**: Untitled UI Icons, Tailwind CSS
- **Backend**: Supabase (PostgreSQL, Storage, Vector)
- **Deployment**: Vercel

## Project Structure

```
nrml/
├── app/                 # Next.js App Router pages and layouts
│   ├── api/            # API routes
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/         # React components
│   └── ui/            # UI components (Untitled UI based)
├── lib/               # Utility libraries
│   └── supabase.ts   # Supabase client initialization
├── utils/             # Helper functions
├── services/          # API services
├── public/            # Static assets
├── docs/              # Documentation
│   └── 1-prd/        # Product Requirements
│       ├── 1-0-architecture/  # Architecture
│       └── 1-1-requirements/  # Requirements
├── .env.local        # Development environment variables
├── tsconfig.json     # TypeScript configuration
├── next.config.js    # Next.js configuration
├── tailwind.config.js # Tailwind CSS configuration
└── postcss.config.js # PostCSS configuration
```

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Supabase account (for database setup)

### Installation

1. Install dependencies:

```bash
npm install
```

2. Configure environment variables:

Create `.env.local` with your Supabase credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
NEXT_PUBLIC_APP_ENV=development
```

3. Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Development Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Environment Configuration

### Development Environment

- **Branch**: `develop`
- **Database**: `nrml-dev`
- **URL**: `localhost:3000`

### Staging Environment

- **Branch**: `staging`
- **Database**: `nrml-test`
- **Deployment**: Vercel Preview

### Production Environment

- **Branch**: `main`
- **Database**: `nrml-prod`
- **Deployment**: Vercel Production

## Deployment

### Development

Changes are tested locally before committing:

```bash
git add .
git commit -m "Your commit message"
git push origin develop
```

### Staging

Deploy to staging environment:

```bash
git checkout staging
git merge develop
git push origin staging
```

### Production

Deploy to production (requires explicit approval):

```bash
git checkout main
git merge develop
git push origin main
```

See [Deploy Command](.claude/deploy.md) for detailed deployment workflow.

## Supabase Integration

### Database Connection

Supabase client is initialized in `lib/supabase.ts`. Use it in your components:

```typescript
import { supabase } from '@/lib/supabase';

const { data, error } = await supabase
  .from('table_name')
  .select('*');
```

### Authentication

Helper functions are available in `utils/supabase-helpers.ts`:

```typescript
import { getCurrentUser, signOut } from '@/utils/supabase-helpers';

const user = await getCurrentUser();
await signOut();
```

## Component Library

### Button Component

```tsx
import Button from '@/components/ui/Button';

<Button variant="primary" size="md">Click me</Button>
<Button variant="secondary" isLoading>Loading...</Button>
```

### Variants

- `primary` - Main actions
- `secondary` - Alternative actions
- `outline` - Tertiary actions
- `ghost` - Minimal actions

### Sizes

- `sm` - Small
- `md` - Medium (default)
- `lg` - Large

## Styling with Tailwind CSS

The project uses Tailwind CSS with custom theme colors:

- `primary` - Brand color
- `success` - Success states
- `error` - Error states
- `warning` - Warning states

Dark mode is supported with `dark:` prefix.

## Documentation

- [Architecture Documentation](docs/1-prd/1-0-architecture/architecture.md)
- [Design System](docs/.claude/styles.md)
- [Deployment Guide](.claude/deploy.md)

## Features

- ✅ TypeScript for type safety
- ✅ Dark mode support
- ✅ Responsive design
- ✅ Supabase integration
- ✅ API routes
- ✅ Component library
- ✅ Environment-based configuration

## Development Guidelines

### Code Style

- Use TypeScript for all new code
- Follow the existing project structure
- Use Tailwind CSS for styling
- Component names should be PascalCase
- File names should be kebab-case (except components)

### Git Workflow

1. Create a feature branch from `develop`
2. Make your changes
3. Test locally
4. Create a pull request
5. Merge to `develop` after review
6. Deploy to staging/production when ready

## Troubleshooting

### Supabase Connection Issues

1. Verify `.env.local` has correct credentials
2. Check Supabase project is active
3. Ensure API key has correct permissions

### Build Errors

1. Clear `.next` directory: `rm -rf .next`
2. Reinstall dependencies: `npm install`
3. Try building again: `npm run build`

## License

MIT

## Support

For issues and questions, please check the [documentation](./docs) or create an issue on GitHub.
