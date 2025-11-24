Generate new React components following the Consillio design system and style guidelines. Uses Untitled UI icons, proper TypeScript types, and dark mode support.

# Component Generator

## Component Creation Workflow

### Step 1: Gather Requirements

Ask user:

1. **Component name** (e.g., "UserProfile", "ConversationCard")
2. **Component type**:
   - **Page** - Full page component (`app/[name]/page.tsx`)
   - **Layout** - Layout wrapper (`components/layouts/[name]-layout.tsx`)
   - **UI** - Reusable UI component (`components/ui/[name].tsx`)
   - **Feature** - Feature-specific component (`components/[feature]/[name].tsx`)
3. **Component purpose** - Brief description of what it does
4. **Props needed** - What data does it receive?

### Step 2: Determine Directory

Based on component type:

| Type    | Location                | Example                                    |
| ------- | ----------------------- | ------------------------------------------ |
| Page    | `app/[route]/page.tsx`  | `app/profile/page.tsx`                     |
| Layout  | `components/layouts/`   | `components/layouts/profile-layout.tsx`    |
| UI      | `components/ui/`        | `components/ui/badge.tsx`                  |
| Feature | `components/[feature]/` | `components/conversation/message-card.tsx` |

### Step 3: Generate Component

#### Base Component Structure

```tsx
"use client"; // Only if component uses client-side features (hooks, interactivity)

import { cx } from "@/lib/utils/cx";
// Import other dependencies

interface [ComponentName]Props {
  // Define props with TypeScript types
  className?: string; // Always include for styling flexibility
}

export default function [ComponentName]({
  className,
  // ... other props
}: [ComponentName]Props) {
  return (
    <div className={cx(
      // Base styles
      "bg-white dark:bg-gray-950",
      "border border-gray-200 dark:border-gray-800",
      "rounded-lg p-6",
      className
    )}>
      {/* Component content */}
    </div>
  );
}
```

### Step 4: Apply Style Guidelines

**MUST follow** `.claude/commands/styles.md`:

#### Colors

- ✅ Use design tokens: `text-gray-900 dark:text-gray-50`
- ✅ Always include dark mode variants
- ❌ No hex codes or arbitrary colors

#### Typography

```tsx
// Headings
<h2 className="text-xl font-bold text-gray-900 dark:text-gray-50 mb-4">

// Body text
<p className="text-gray-700 dark:text-gray-300">

// Secondary text
<p className="text-sm text-gray-600 dark:text-gray-400">
```

#### Icons

```tsx
// Use Untitled UI icons (NOT emojis!)
import { Lightbulb01, Settings01 } from '@untitledui/icons'

// Feature icons
<Lightbulb01 className="h-10 w-10 text-primary-400" />

// Navigation icons
<Settings01 className="h-5 w-5" />

// Empty state icons
<MessageIcon className="h-16 w-16 text-gray-400 dark:text-gray-600" />
```

#### Spacing & Layout

```tsx
// Card spacing
<div className="space-y-4"> // For vertical stacking
<div className="flex items-center gap-3"> // For horizontal layout
<div className="p-6"> // Standard card padding
```

#### Interactive States

```tsx
// Buttons and links
<button className={cx(
  "px-4 py-2 rounded-lg",
  "bg-primary-500 text-white",
  "hover:bg-primary-600",
  "focus:outline-none focus:ring-2 focus:ring-primary-500",
  "transition-colors"
)}>
```

### Step 5: Add TypeScript Types

```tsx
// Define props interface
interface ComponentProps {
  title: string;
  description?: string; // Optional props marked with ?
  onSubmit: (data: FormData) => void;
  isLoading?: boolean;
  className?: string;
}

// Use type for children
children: React.ReactNode

// Use type for events
onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
```

### Step 6: Add Export (if needed)

For UI components, add export to `components/ui/index.ts`:

```typescript
export { default as ComponentName } from './component-name';
```

## Component Templates

### Template: Card Component

```tsx
'use client';

import { cx } from '@/lib/utils/cx';

interface CardProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
}

export default function Card({ title, description, children, className }: CardProps) {
  return (
    <div
      className={cx(
        'bg-white dark:bg-gray-950',
        'rounded-lg border border-gray-200 dark:border-gray-800',
        'p-6',
        className
      )}
    >
      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50 mb-2">{title}</h3>
      {description && (
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{description}</p>
      )}
      {children}
    </div>
  );
}
```

### Template: Page Component

```tsx
import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import DashboardLayout from '@/components/layouts/dashboard-layout';

export default async function PageName() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/signup');
  }

  return (
    <DashboardLayout userName={user.email} userEmail={user.email!}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-50 mb-8">Page Title</h1>
        {/* Page content */}
      </div>
    </DashboardLayout>
  );
}
```

### Template: Form Component

```tsx
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { cx } from '@/lib/utils/cx';

interface FormProps {
  onSubmit: (data: FormData) => Promise<void>;
}

export default function Form({ onSubmit }: FormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const formData = new FormData(e.currentTarget);
      await onSubmit(formData);
    } catch (err: any) {
      setError(err.message || 'Something went wrong');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="bg-error-50 dark:bg-error-900/20 border border-error-200 dark:border-error-800 rounded-lg p-4">
          <p className="text-sm text-error-700 dark:text-error-400">{error}</p>
        </div>
      )}

      {/* Form fields */}
      <div>
        <label className="block text-sm font-medium text-gray-900 dark:text-gray-50 mb-1.5">
          Label
        </label>
        <input
          type="text"
          name="fieldName"
          required
          className={cx(
            'w-full px-3.5 py-2.5 rounded-lg',
            'bg-white dark:bg-gray-950',
            'border border-gray-300 dark:border-gray-700',
            'text-gray-900 dark:text-gray-50',
            'placeholder:text-gray-500',
            'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent',
            'transition-colors'
          )}
        />
      </div>

      <Button type="submit" size="lg" disabled={isLoading}>
        {isLoading ? 'Submitting...' : 'Submit'}
      </Button>
    </form>
  );
}
```

## Icon Selection Guide

When component needs an icon:

1. **Import from Untitled UI**:

```tsx
import { Lightbulb01, Settings01, MessageChatCircle } from '@untitledui/icons';
```

2. **Choose appropriate icon** based on context:
   - Conversation: `MessageChatCircle`, `MessageCircle01`
   - Settings: `Settings01`, `Settings02`
   - User: `User01`, `UserCircle`
   - Document: `File01`, `FileText01`
   - Decision: `Dataflow04`, `GitBranch01`
   - Resources: `BookOpen01`, `Book01`

3. **Apply correct color**:
   - Feature icons: `text-primary-400`
   - Empty states: `text-gray-400 dark:text-gray-600`
   - Navigation: inherit from parent

## Accessibility Checklist

- [ ] Semantic HTML (`button` for actions, `a` for links)
- [ ] Proper heading hierarchy (h1 → h2 → h3)
- [ ] ARIA labels for icon-only buttons
- [ ] Labels with `htmlFor` for inputs
- [ ] Focus states on interactive elements
- [ ] Keyboard navigation support

## Testing Checklist

After generating component:

- [ ] Component compiles without errors
- [ ] Displays correctly in both light and dark modes
- [ ] Responsive on mobile and desktop
- [ ] TypeScript types are correct
- [ ] Follows styles.md guidelines
- [ ] Icons are from Untitled UI (no emojis)
- [ ] Accessibility requirements met

## Related Documentation

- Design system: `.claude/commands/styles.md`
- Existing UI components: `components/ui/`
- Layout components: `components/layouts/`
- Color tokens: `styles/theme.css`
