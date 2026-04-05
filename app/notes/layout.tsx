export default function NotesLayout({
  children,
  sidebar,
  modal,
}: {
  children: React.ReactNode;
  sidebar: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <div style={{ display: 'flex', gap: 20 }}>
      <aside>{sidebar}</aside>
      <main>{children}</main>
      {modal}
    </div>
  );
}