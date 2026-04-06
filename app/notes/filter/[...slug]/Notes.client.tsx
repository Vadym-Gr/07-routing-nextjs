'use client';

import { useQuery } from '@tanstack/react-query';
import { fetchNotes } from '@/lib/api/notes';

export default function NotesClient({ tag }: { tag?: string }) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['notes', tag],
    queryFn: () =>
      fetchNotes({ tag: tag === 'all' ? undefined : tag }),
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading notes</p>;

  return (
    <ul>
      {data?.notes.map(note => (
        <li key={note.id}>{note.title}</li>
      ))}
    </ul>
  );
}