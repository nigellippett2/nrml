'use client';

import { Button } from '@/components/ui/Button';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { DropdownMenu } from '@/components/ui/dropdown-menu';
import { cx } from '@/lib/utils/cx';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function StylesPage() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Redirect to 404 if not in development
    if (process.env.NODE_ENV !== 'development') {
      router.push('/404');
    }
  }, [router]);

  if (!mounted || process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-50">Design System</h1>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Component & Style Showcase (Development Only)
              </p>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Table of Contents */}
        <nav className="mb-12 p-6 bg-white dark:bg-gray-950 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-50 mb-4">
            Quick Navigation
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            {[
              'Buttons',
              'Typography',
              'Forms',
              'Colors',
              'Cards',
              'Navigation',
              'Icons & Badges',
              'Spacing',
            ].map((section) => (
              <a
                key={section}
                href={`#${section.toLowerCase().replace(' & ', '-')}`}
                className="text-primary-600 dark:text-gray-50 hover:underline"
              >
                {section}
              </a>
            ))}
          </div>
        </nav>

        {/* Buttons Section */}
        <Section id="buttons" title="Buttons">
          <SubSection title="Variants">
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" size="md">
                Primary Button
              </Button>
              <Button variant="secondary" size="md">
                Secondary Button
              </Button>
              <Button variant="outline" size="md">
                Outline Button
              </Button>
              <Button variant="ghost" size="md">
                Ghost Button
              </Button>
            </div>
          </SubSection>

          <SubSection title="Sizes">
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="primary" size="sm">
                Small
              </Button>
              <Button variant="primary" size="md">
                Medium
              </Button>
              <Button variant="primary" size="lg">
                Large
              </Button>
            </div>
          </SubSection>

          <SubSection title="States">
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" size="md">
                Default
              </Button>
              <Button variant="primary" size="md" disabled>
                Disabled
              </Button>
            </div>
          </SubSection>

          <SubSection title="All Combinations">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-800">
                    <th className="text-left p-3 text-sm font-semibold text-gray-900 dark:text-gray-50">
                      Variant
                    </th>
                    <th className="text-left p-3 text-sm font-semibold text-gray-900 dark:text-gray-50">
                      Small
                    </th>
                    <th className="text-left p-3 text-sm font-semibold text-gray-900 dark:text-gray-50">
                      Medium
                    </th>
                    <th className="text-left p-3 text-sm font-semibold text-gray-900 dark:text-gray-50">
                      Large
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {(['primary', 'secondary', 'outline', 'ghost'] as const).map((variant) => (
                    <tr key={variant} className="border-b border-gray-200 dark:border-gray-800">
                      <td className="p-3 text-sm text-gray-700 dark:text-gray-300 capitalize">
                        {variant}
                      </td>
                      <td className="p-3">
                        <Button variant={variant} size="sm">
                          Button
                        </Button>
                      </td>
                      <td className="p-3">
                        <Button variant={variant} size="md">
                          Button
                        </Button>
                      </td>
                      <td className="p-3">
                        <Button variant={variant} size="lg">
                          Button
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </SubSection>
        </Section>

        {/* Typography Section */}
        <Section id="typography" title="Typography">
          <SubSection title="Display Sizes">
            <div className="space-y-4">
              <div>
                <p className="text-xs text-gray-500 mb-1">display-2xl (144px)</p>
                <h1 className="text-display-2xl font-bold text-gray-900 dark:text-gray-50">
                  Display 2XL
                </h1>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">display-xl (120px)</p>
                <h1 className="text-display-xl font-bold text-gray-900 dark:text-gray-50">
                  Display XL
                </h1>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">display-lg (96px)</p>
                <h1 className="text-display-lg font-bold text-gray-900 dark:text-gray-50">
                  Display LG
                </h1>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">display-md (72px)</p>
                <h1 className="text-display-md font-bold text-gray-900 dark:text-gray-50">
                  Display MD
                </h1>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">display-sm (60px)</p>
                <h1 className="text-display-sm font-bold text-gray-900 dark:text-gray-50">
                  Display SM
                </h1>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">display-xs (48px)</p>
                <h1 className="text-display-xs font-bold text-gray-900 dark:text-gray-50">
                  Display XS
                </h1>
              </div>
            </div>
          </SubSection>

          <SubSection title="Body Text Sizes">
            <div className="space-y-4">
              <div>
                <p className="text-xs text-gray-500 mb-1">text-xl (40px)</p>
                <p className="text-xl text-gray-900 dark:text-gray-50">
                  Extra Large Text - The quick brown fox jumps over the lazy dog
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">text-lg (36px)</p>
                <p className="text-lg text-gray-900 dark:text-gray-50">
                  Large Text - The quick brown fox jumps over the lazy dog
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">text-md (32px - default)</p>
                <p className="text-md text-gray-900 dark:text-gray-50">
                  Medium Text - The quick brown fox jumps over the lazy dog
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">text-sm (28px)</p>
                <p className="text-sm text-gray-900 dark:text-gray-50">
                  Small Text - The quick brown fox jumps over the lazy dog
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">text-xs (24px)</p>
                <p className="text-xs text-gray-900 dark:text-gray-50">
                  Extra Small Text - The quick brown fox jumps over the lazy dog
                </p>
              </div>
            </div>
          </SubSection>

          <SubSection title="Text Colors">
            <div className="space-y-3">
              <p className="text-gray-900 dark:text-gray-50">Primary Text - Highest emphasis</p>
              <p className="text-gray-700 dark:text-gray-300">Secondary Text - High emphasis</p>
              <p className="text-gray-600 dark:text-gray-400">Tertiary Text - Medium emphasis</p>
              <p className="text-gray-500">Quaternary Text - Low emphasis</p>
            </div>
          </SubSection>

          <SubSection title="Font Weights">
            <div className="space-y-2">
              <p className="font-normal text-gray-900 dark:text-gray-50">Normal Weight (400)</p>
              <p className="font-medium text-gray-900 dark:text-gray-50">Medium Weight (500)</p>
              <p className="font-semibold text-gray-900 dark:text-gray-50">Semibold Weight (600)</p>
              <p className="font-bold text-gray-900 dark:text-gray-50">Bold Weight (700)</p>
            </div>
          </SubSection>
        </Section>

        {/* Forms Section */}
        <Section id="forms" title="Forms">
          <SubSection title="Text Inputs">
            <div className="max-w-md space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-900 dark:text-gray-50 mb-1.5">
                  Label
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

              <div>
                <label className="block text-sm font-medium text-gray-900 dark:text-gray-50 mb-1.5">
                  Required Field*
                </label>
                <input
                  type="email"
                  required
                  placeholder="email@example.com"
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

              <div>
                <label className="block text-sm font-medium text-gray-900 dark:text-gray-50 mb-1.5">
                  Disabled Input
                </label>
                <input
                  type="text"
                  disabled
                  value="Disabled value"
                  className={cx(
                    'w-full px-3.5 py-2.5 rounded-lg',
                    'bg-gray-100 dark:bg-gray-900',
                    'border border-gray-300 dark:border-gray-700',
                    'text-gray-500',
                    'cursor-not-allowed'
                  )}
                />
              </div>
            </div>
          </SubSection>

          <SubSection title="Select Dropdowns">
            <div className="max-w-md">
              <label className="block text-sm font-medium text-gray-900 dark:text-gray-50 mb-1.5">
                Select an option
              </label>
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
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </select>
            </div>
          </SubSection>

          <SubSection title="Validation States">
            <div className="max-w-md space-y-4">
              {/* Error State */}
              <div>
                <label className="block text-sm font-medium text-gray-900 dark:text-gray-50 mb-1.5">
                  Error State
                </label>
                <input
                  type="text"
                  className={cx(
                    'w-full px-3.5 py-2.5 rounded-lg',
                    'bg-white dark:bg-gray-950',
                    'border-2 border-error-500',
                    'text-gray-900 dark:text-gray-50',
                    'focus:outline-none focus:ring-2 focus:ring-error-500',
                    'transition-colors'
                  )}
                />
                <p className="mt-1.5 text-sm text-error-600 dark:text-error-400">
                  This field is required
                </p>
              </div>

              {/* Success State */}
              <div>
                <label className="block text-sm font-medium text-gray-900 dark:text-gray-50 mb-1.5">
                  Success State
                </label>
                <input
                  type="text"
                  className={cx(
                    'w-full px-3.5 py-2.5 rounded-lg',
                    'bg-white dark:bg-gray-950',
                    'border-2 border-success-500',
                    'text-gray-900 dark:text-gray-50',
                    'focus:outline-none focus:ring-2 focus:ring-success-500',
                    'transition-colors'
                  )}
                />
                <p className="mt-1.5 text-sm text-success-600 dark:text-success-400">Looks good!</p>
              </div>
            </div>
          </SubSection>

          <SubSection title="Checkboxes">
            <div className="space-y-3">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-primary-500 focus:ring-2 focus:ring-primary-500"
                />
                <span className="text-sm text-gray-700 dark:text-gray-300">Checkbox option 1</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  defaultChecked
                  className="h-4 w-4 rounded border-gray-300 text-primary-500 focus:ring-2 focus:ring-primary-500"
                />
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  Checkbox option 2 (checked)
                </span>
              </label>
              <label className="flex items-center gap-2 cursor-not-allowed opacity-50">
                <input type="checkbox" disabled className="h-4 w-4 rounded border-gray-300" />
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  Checkbox option 3 (disabled)
                </span>
              </label>
            </div>
          </SubSection>
        </Section>

        {/* Colors Section */}
        <Section id="colors" title="Colors">
          <SubSection title="Primary Palette">
            <div className="grid grid-cols-5 gap-4">
              {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((shade) => (
                <div key={shade}>
                  <div
                    className={`h-20 rounded-lg bg-primary-${shade} border border-gray-200 dark:border-gray-800`}
                  />
                  <p className="mt-2 text-xs text-center text-gray-600 dark:text-gray-400">
                    primary-{shade}
                  </p>
                </div>
              ))}
            </div>
          </SubSection>

          <SubSection title="Semantic Colors">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {/* Success */}
              <div>
                <p className="text-sm font-semibold text-gray-900 dark:text-gray-50 mb-3">
                  Success
                </p>
                <div className="space-y-2">
                  <div className="h-12 rounded-lg bg-success-50 border border-success-200" />
                  <div className="h-12 rounded-lg bg-success-500" />
                  <div className="h-12 rounded-lg bg-success-600" />
                </div>
              </div>

              {/* Error */}
              <div>
                <p className="text-sm font-semibold text-gray-900 dark:text-gray-50 mb-3">Error</p>
                <div className="space-y-2">
                  <div className="h-12 rounded-lg bg-error-50 border border-error-200" />
                  <div className="h-12 rounded-lg bg-error-500" />
                  <div className="h-12 rounded-lg bg-error-600" />
                </div>
              </div>

              {/* Warning */}
              <div>
                <p className="text-sm font-semibold text-gray-900 dark:text-gray-50 mb-3">
                  Warning
                </p>
                <div className="space-y-2">
                  <div className="h-12 rounded-lg bg-warning-50 border border-warning-200" />
                  <div className="h-12 rounded-lg bg-warning-500" />
                  <div className="h-12 rounded-lg bg-warning-600" />
                </div>
              </div>

              {/* Info */}
              <div>
                <p className="text-sm font-semibold text-gray-900 dark:text-gray-50 mb-3">
                  Info/Brand
                </p>
                <div className="space-y-2">
                  <div className="h-12 rounded-lg bg-primary-50 border border-primary-200" />
                  <div className="h-12 rounded-lg bg-primary-500" />
                  <div className="h-12 rounded-lg bg-primary-600" />
                </div>
              </div>
            </div>
          </SubSection>

          <SubSection title="Neutral Grays">
            <div className="grid grid-cols-5 gap-4">
              {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map((shade) => (
                <div key={shade}>
                  <div
                    className={`h-16 rounded-lg bg-gray-${shade} border border-gray-200 dark:border-gray-800`}
                  />
                  <p className="mt-2 text-xs text-center text-gray-600 dark:text-gray-400">
                    gray-{shade}
                  </p>
                </div>
              ))}
            </div>
          </SubSection>
        </Section>

        {/* Cards Section */}
        <Section id="cards" title="Cards & Containers">
          <SubSection title="Basic Card">
            <div className="bg-white dark:bg-gray-950 rounded-lg border border-gray-200 dark:border-gray-800 p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50 mb-2">
                Card Title
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                This is a basic card component with padding, border, and rounded corners.
              </p>
            </div>
          </SubSection>

          <SubSection title="Alert Cards">
            <div className="space-y-4">
              {/* Success Alert */}
              <div className="bg-success-50 dark:bg-success-900/20 border border-success-200 dark:border-success-800 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <svg
                    className="h-5 w-5 text-success-600 dark:text-success-400 flex-shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <div>
                    <p className="text-sm font-medium text-success-700 dark:text-success-400">
                      Success Alert
                    </p>
                    <p className="text-sm text-success-600 dark:text-success-500 mt-1">
                      This is a success message with relevant information.
                    </p>
                  </div>
                </div>
              </div>

              {/* Error Alert */}
              <div className="bg-error-50 dark:bg-error-900/20 border border-error-200 dark:border-error-800 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <svg
                    className="h-5 w-5 text-error-600 dark:text-error-400 flex-shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  <div>
                    <p className="text-sm font-medium text-error-700 dark:text-error-400">
                      Error Alert
                    </p>
                    <p className="text-sm text-error-600 dark:text-error-500 mt-1">
                      This is an error message indicating something went wrong.
                    </p>
                  </div>
                </div>
              </div>

              {/* Warning Alert */}
              <div className="bg-warning-50 dark:bg-warning-900/20 border border-warning-200 dark:border-warning-800 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <svg
                    className="h-5 w-5 text-warning-600 dark:text-warning-400 flex-shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                  <div>
                    <p className="text-sm font-medium text-warning-700 dark:text-warning-400">
                      Warning Alert
                    </p>
                    <p className="text-sm text-warning-600 dark:text-warning-500 mt-1">
                      This is a warning message to draw attention.
                    </p>
                  </div>
                </div>
              </div>

              {/* Info Alert */}
              <div className="bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <svg
                    className="h-5 w-5 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div>
                    <p className="text-sm font-medium text-primary-700 dark:text-primary-400">
                      Info Alert
                    </p>
                    <p className="text-sm text-primary-600 dark:text-primary-500 mt-1">
                      This is an informational message with helpful details.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SubSection>

          <SubSection title="Shadow Variations">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white dark:bg-gray-950 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-800">
                <p className="text-sm text-center text-gray-700 dark:text-gray-300">shadow-sm</p>
              </div>
              <div className="bg-white dark:bg-gray-950 rounded-lg p-6 shadow-md border border-gray-200 dark:border-gray-800">
                <p className="text-sm text-center text-gray-700 dark:text-gray-300">shadow-md</p>
              </div>
              <div className="bg-white dark:bg-gray-950 rounded-lg p-6 shadow-lg border border-gray-200 dark:border-gray-800">
                <p className="text-sm text-center text-gray-700 dark:text-gray-300">shadow-lg</p>
              </div>
              <div className="bg-white dark:bg-gray-950 rounded-lg p-6 shadow-xl border border-gray-200 dark:border-gray-800">
                <p className="text-sm text-center text-gray-700 dark:text-gray-300">shadow-xl</p>
              </div>
            </div>
          </SubSection>
        </Section>

        {/* Navigation Section */}
        <Section id="navigation" title="Navigation Elements">
          <SubSection title="Dropdown Menu">
            <DropdownMenu
              trigger={
                <Button variant="outline" size="md">
                  Open Menu
                </Button>
              }
              items={[
                { label: 'Dashboard', href: '#' },
                { label: 'Settings', href: '#' },
                { separator: true },
                { label: 'Sign Out', href: '#' },
              ]}
            />
          </SubSection>

          <SubSection title="Navigation States">
            <div className="max-w-md space-y-2">
              {/* Active State */}
              <div className="flex items-center gap-3 px-4 py-2 rounded-lg bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                <span className="text-sm font-semibold">Active Item</span>
              </div>

              {/* Hover State */}
              <div className="flex items-center gap-3 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-sm">Hover State</span>
              </div>

              {/* Default State */}
              <div className="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <span className="text-sm">Default State</span>
              </div>
            </div>
          </SubSection>
        </Section>

        {/* Icons & Badges Section */}
        <Section id="icons-badges" title="Icons & Badges">
          <SubSection title="Icon Sizes">
            <div className="flex items-end gap-8">
              <div className="text-center">
                <svg
                  className="h-4 w-4 mx-auto text-gray-900 dark:text-gray-50"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <p className="mt-2 text-xs text-gray-600 dark:text-gray-400">h-4 w-4</p>
              </div>
              <div className="text-center">
                <svg
                  className="h-5 w-5 mx-auto text-gray-900 dark:text-gray-50"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <p className="mt-2 text-xs text-gray-600 dark:text-gray-400">h-5 w-5</p>
              </div>
              <div className="text-center">
                <svg
                  className="h-6 w-6 mx-auto text-gray-900 dark:text-gray-50"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <p className="mt-2 text-xs text-gray-600 dark:text-gray-400">h-6 w-6</p>
              </div>
              <div className="text-center">
                <svg
                  className="h-8 w-8 mx-auto text-gray-900 dark:text-gray-50"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <p className="mt-2 text-xs text-gray-600 dark:text-gray-400">h-8 w-8</p>
              </div>
            </div>
          </SubSection>

          <SubSection title="Badges">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                Default Badge
              </span>
              <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400">
                Primary Badge
              </span>
              <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-success-100 dark:bg-success-900/30 text-success-700 dark:text-success-400">
                Success Badge
              </span>
              <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-error-100 dark:bg-error-900/30 text-error-700 dark:text-error-400">
                Error Badge
              </span>
              <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-warning-100 dark:bg-warning-900/30 text-warning-700 dark:text-warning-400">
                Warning Badge
              </span>
            </div>
          </SubSection>

          <SubSection title="Avatars">
            <div className="flex items-center gap-4">
              <div className="h-8 w-8 rounded-full bg-primary-500 text-white flex items-center justify-center font-semibold text-sm">
                JD
              </div>
              <div className="h-10 w-10 rounded-full bg-primary-500 text-white flex items-center justify-center font-semibold text-sm">
                AB
              </div>
              <div className="h-12 w-12 rounded-full bg-primary-500 text-white flex items-center justify-center font-semibold">
                CD
              </div>
            </div>
          </SubSection>
        </Section>

        {/* Spacing Section */}
        <Section id="spacing" title="Spacing & Layout">
          <SubSection title="Common Spacing Scale">
            <div className="space-y-3">
              {[
                { class: 'gap-2', label: 'gap-2 (8px)' },
                { class: 'gap-3', label: 'gap-3 (12px)' },
                { class: 'gap-4', label: 'gap-4 (16px)' },
                { class: 'gap-6', label: 'gap-6 (24px)' },
                { class: 'gap-8', label: 'gap-8 (32px)' },
                { class: 'gap-12', label: 'gap-12 (48px)' },
              ].map((item) => (
                <div key={item.class}>
                  <p className="text-xs text-gray-500 mb-2">{item.label}</p>
                  <div className={`flex ${item.class}`}>
                    <div className="h-12 w-12 bg-primary-500 rounded" />
                    <div className="h-12 w-12 bg-primary-500 rounded" />
                    <div className="h-12 w-12 bg-primary-500 rounded" />
                  </div>
                </div>
              ))}
            </div>
          </SubSection>

          <SubSection title="Container Padding">
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-lg p-3">
                <p className="text-sm text-gray-700 dark:text-gray-300">p-3 (12px)</p>
              </div>
              <div className="bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-lg p-4">
                <p className="text-sm text-gray-700 dark:text-gray-300">p-4 (16px)</p>
              </div>
              <div className="bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
                <p className="text-sm text-gray-700 dark:text-gray-300">p-6 (24px)</p>
              </div>
              <div className="bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-lg p-8">
                <p className="text-sm text-gray-700 dark:text-gray-300">p-8 (32px)</p>
              </div>
            </div>
          </SubSection>
        </Section>
      </main>
    </div>
  );
}

// Helper Components
function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mb-16 scroll-mt-20">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-50 mb-8 pb-3 border-b border-gray-200 dark:border-gray-800">
        {title}
      </h2>
      <div className="space-y-8">{children}</div>
    </section>
  );
}

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white dark:bg-gray-950 rounded-lg border border-gray-200 dark:border-gray-800 p-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50 mb-4">{title}</h3>
      {children}
    </div>
  );
}
