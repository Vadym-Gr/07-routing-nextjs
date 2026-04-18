import { ReactNode } from 'react';

export default function NotesLayout(props: {
  children: ReactNode;
  sidebar?: ReactNode; // ✅ ОБОВʼЯЗКОВО optional
  modal?: ReactNode;   // ✅ ОБОВʼЯЗКОВО optional
}) {
  return (
    <div style={{ display: 'flex' }}>
      <aside>{props.sidebar}</aside>
      <main>{props.children}</main>
      {props.modal}
    </div>
  );
}