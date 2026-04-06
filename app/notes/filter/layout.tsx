import { ReactNode } from 'react';

export default function Layout({
  children,
  sidebar,
}: {
  children: ReactNode;
  sidebar: ReactNode;
}) {
  return (
    <div style={{ display: 'flex', gap: 20 }}>
      <aside>{sidebar}</aside>
      <main>{children}</main>
    </div>
  );
}