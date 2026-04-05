'use client';

import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';
import { getNotes } from '@/lib/api/notes';

export function NotesClient({ tag }: { tag?: string }) {
  const { data, isLoading } = useQuery({
    queryKey: ['notes', tag],
    queryFn: () => getNotes(tag === 'all' ? undefined : tag),
  });

  if (isLoading) return <p>Loading...</p>;

  return (
    <ul>
      {data?.map((note: any) => (
        <li key={note.id}>
          <Link href={`/notes/${note.id}`}>{note.title}</Link>
        </li>
      ))}
    </ul>
  );
}

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
