import React from 'react';

/**
 * GlobalProviders
 *
 * Place any top-level context providers, global modals, or layout wrappers here.
 * This keeps `layout.tsx` clean while giving you a single place to extend
 * application-wide behavior.
 */
export function GlobalProviders({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

