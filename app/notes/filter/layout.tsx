import { ReactNode } from 'react';

export default function NotesLayout({
  children,
  sidebar,
  modal,
}: {
  children: ReactNode;
  sidebar?: ReactNode; 
  modal?: ReactNode;
}) {
  return (
    <div style={{ display: 'flex' }}>
      <aside>{sidebar}</aside>
      <main>{children}</main>
      {modal}
    </div>
  );
}