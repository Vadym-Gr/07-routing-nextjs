import { ReactNode } from 'react';

export default function Layout({ children, sidebar }: any) {
  return (
    <div style={{ display: 'flex' }}>
      <aside>{sidebar}</aside>
      <main>{children}</main>
    </div>
  );
}
