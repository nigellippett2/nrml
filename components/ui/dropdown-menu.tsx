'use client';

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { cx } from '@/lib/utils/cx';

interface DropdownMenuProps {
  trigger: React.ReactNode;
  items: Array<
    | {
        label: string;
        href?: string;
        onClick?: () => void;
        separator?: false;
      }
    | {
        separator: true;
      }
  >;
}

export function DropdownMenu({ trigger, items }: DropdownMenuProps) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <MenuButton className="inline-flex items-center gap-2">{trigger}</MenuButton>

      <MenuItems
        className={cx(
          'absolute right-0 z-10 mt-2 w-56 origin-top-right',
          'rounded-lg bg-white dark:bg-gray-900',
          'border border-gray-200 dark:border-gray-800',
          'shadow-lg ring-1 ring-black ring-opacity-5',
          'focus:outline-none'
        )}
      >
        <div className="py-1">
          {items.map((item, idx) => {
            if (item.separator) {
              return (
                <div key={`separator-${idx}`} className="my-1 h-px bg-gray-200 dark:bg-gray-800" />
              );
            }

            return (
              <MenuItem key={idx}>
                {({ focus }) => (
                  <a
                    href={item.href || '#'}
                    onClick={item.onClick}
                    className={cx(
                      'block px-4 py-2 text-sm transition-colors',
                      focus
                        ? 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-50'
                        : 'text-gray-700 dark:text-gray-300'
                    )}
                  >
                    {item.label}
                  </a>
                )}
              </MenuItem>
            );
          })}
        </div>
      </MenuItems>
    </Menu>
  );
}
