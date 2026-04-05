import Link from 'next/link';
import { getNotes } from '@/lib/api/notes';

export default async function Page({ params }: any) {
  const tag = params.slug?.[0];
  const notes = await getNotes(tag === 'all' ? undefined : tag);

  return (
    <ul>
      {notes.map((note: any) => (
        <li key={note.id}>
          <Link href={`/notes/${note.id}`}>{note.title}</Link>
        </li>
      ))}
    </ul>
  );
}
