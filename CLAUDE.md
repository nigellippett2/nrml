# Claude Code Guide

This file provides guidance for Claude Code when working with this project.

## Project Overview

NRML is a initiative and advisory service built with Next.js, Supabase, and React.

## Key Directories

- `/app` - Next.js application
- `/components` - React components
- `/lib` - Utility functions and helpers
- `/tests` - Test files (unit, integration, E2E)
- `/docs` - Project documentation
- `/styles` - Global styles and theme configuration

## Important Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run test     # Run tests
```

## Architecture Notes

- Built with Next.js 14+ for server-side rendering and API routes
- Supabase for backend (database, authentication, real-time features)
- React for component-based UI
- TypeScript for type safety
- Tailwind CSS for styling

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

- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## Documentation Index

- CLAUDE.md - This file (Claude Code guide)
- package.json - Project dependencies and scripts
