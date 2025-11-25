# NRML Architecture

## Overview

NRML is built on a modern, scalable technology stack designed for rapid development, maintainability, and seamless deployment. The architecture leverages industry-standard tools and services to provide a robust foundation for the application.

## Technology Stack

### Frontend & Development

**Next.js & React**
- Full-stack JavaScript/TypeScript framework
- Server-side rendering and static generation
- Built-in API routes for backend functionality
- Optimized performance with automatic code splitting
- Development: TypeScript for type safety

**Untitled UI**
- Comprehensive, customizable component library
- Consistent design system implementation
- Accessibility-first components
- Theme support (light/dark mode)

**Tailwind CSS 4**
- Utility-first CSS framework
- Rapid UI development with pre-defined classes
- Customizable design tokens and color palette
- Dark mode support with `dark:` prefix
- PostCSS integration via `@tailwindcss/postcss` plugin
- Configuration: `tailwind.config.js` with custom theme colors

### Backend & Data

**Supabase**
- PostgreSQL relational database
- Document storage (file management)
- Vector storage (embeddings for AI/ML features)
- Real-time subscriptions
- Authentication and authorization
- Row-level security (RLS) policies

### Code Repository

**GitHub**
- Central version control and collaboration platform
- Source code repository for all project code
- Branch-based workflow: `main` (production), `staging`, `develop`
- Pull request reviews and code collaboration
- Integration with Vercel for continuous deployment
- CI/CD pipeline triggers

### Deployment

**Vercel**
- Serverless deployment platform
- Automatic deployments from GitHub
- Preview deployments for staging
- Edge functions for optimized performance
- Built-in analytics and monitoring
- Custom domains and SSL/TLS

## Architecture Diagram

```
┌─────────────────────────────────────────┐
│         End Users (Browser)              │
└──────────────┬──────────────────────────┘
               │
               ▼
┌─────────────────────────────────────────┐
│    Vercel (Next.js/React App)            │
│  ┌────────────────────────────────────┐  │
│  │    React Components                │  │
│  │  (Untitled UI + Custom)            │  │
│  └────────────────────────────────────┘  │
│  ┌────────────────────────────────────┐  │
│  │    API Routes (/pages/api)         │  │
│  │    Business Logic                  │  │
│  └────────────────────────────────────┘  │
└──────────────┬──────────────────────────┘
               │
               ▼
┌─────────────────────────────────────────┐
│      Supabase (Backend Services)         │
│  ┌────────────────────────────────────┐  │
│  │  PostgreSQL Database               │  │
│  │  • Tables & Relations              │  │
│  │  • Row-Level Security              │  │
│  └────────────────────────────────────┘  │
│  ┌────────────────────────────────────┐  │
│  │  Storage Buckets                   │  │
│  │  • Documents                       │  │
│  │  • Vectors (Embeddings)            │  │
│  └────────────────────────────────────┘  │
│  ┌────────────────────────────────────┐  │
│  │  Authentication & Auth              │  │
│  │  • User Management                 │  │
│  │  • Permissions                     │  │
│  └────────────────────────────────────┘  │
└─────────────────────────────────────────┘
```

## Key Components

### Frontend Layer
- **React Components**: Reusable UI components built with Untitled UI
- **State Management**: Next.js context API and client-side hooks
- **API Integration**: Client-side fetch to Next.js API routes

### Application Layer (Next.js)
- **API Routes**: RESTful endpoints for business logic
- **Server-Side Rendering**: Dynamic pages with server-side data fetching
- **Authentication**: Session management integrated with Supabase
- **Middleware**: Request processing and validation

### Styling & CSS Architecture
- **Tailwind CSS 4**: Utility-first CSS framework
- **PostCSS**: CSS transformation with `@tailwindcss/postcss` plugin
- **Configuration Files**:
  - `tailwind.config.js` - Tailwind theme customization
  - `postcss.config.js` - PostCSS pipeline configuration
  - `app/globals.css` - Global styles and Tailwind directives
- **Design Tokens**: Custom color palette with semantic color names
  - Primary (brand color)
  - Success, Error, Warning (semantic states)
  - Gray palette (text hierarchy)
- **Dark Mode**: CSS class-based dark mode with `dark:` utilities

### Data Layer (Supabase)
- **Relational Database**: PostgreSQL with structured tables
- **Storage**: File storage for documents and vectors
- **Real-time Updates**: Live data synchronization to clients
- **Security**: RLS policies for data access control

### Deployment (Vercel)
- **Production**: Live user-facing application
- **Staging**: Preview environment for testing
- **Development**: Local development environment

## Development Workflow

1. **Local Development**
   - Run `npm run dev` for local testing
   - Connect to Supabase development database
   - Hot-reload for rapid iteration

2. **Staging Deployment**
   - Push to `staging` branch
   - Vercel creates preview deployment
   - Uses `nrml-test` Supabase database

3. **Production Deployment**
   - Push to `main` branch
   - Vercel deploys to production
   - Uses `nrml-prod` Supabase database

## Integration Points

### Next.js ↔ Supabase
- Direct connection from API routes using Supabase client
- Real-time subscriptions from React components
- Authentication tokens managed by Supabase Auth

### Frontend ↔ Next.js API
- RESTful API calls from React components
- JSON request/response format
- Authentication via session/tokens

### Supabase ↔ External Services
- Vector storage for AI/ML features
- Document storage for file management
- Extensibility through webhooks

## Environment Configuration

Each environment uses dedicated Supabase databases:

| Environment | Branch    | Database      | Vercel URL       |
|-------------|-----------|---------------|------------------|
| Development | `develop` | nrml-dev      | localhost:3000   |
| Staging     | `staging` | nrml-test     | preview URL      |
| Production  | `main`    | nrml-prod     | production URL   |

## Security Considerations

- **Row-Level Security (RLS)**: Implemented on all tables
- **API Validation**: Input validation on all endpoints
- **Authentication**: Session-based authentication via Supabase Auth
- **Data Encryption**: Sensitive data encrypted at rest
- **HTTPS**: Enforced on all connections
- **Environment Variables**: Secrets managed via Vercel and local `.env` files

## Performance Optimizations

- **Code Splitting**: Automatic with Next.js
- **Image Optimization**: Built-in Next.js Image component
- **Caching**: Server-side and client-side caching strategies
- **Database Indexing**: Optimized queries with proper indexes
- **Edge Functions**: Vercel Edge Functions for low-latency operations

## Scalability

- **Supabase**: Scales automatically with connection pooling
- **Vercel**: Auto-scaling serverless functions
- **Database**: PostgreSQL with replication capabilities
- **Storage**: S3-compatible object storage via Supabase

## Future Considerations

- Vector embeddings for AI/ML capabilities
- Real-time collaboration features
- Webhook integrations
- Background job processing
- Multi-tenant support
