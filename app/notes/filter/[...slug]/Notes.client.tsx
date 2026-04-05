'use client';

import { useState } from 'react';
import { useQuery, keepPreviousData } from '@tanstack/react-query';
import { fetchNotes } from '../../../../lib/api';

export default function NotesClient({ tag }: { tag?: string }) {
  const [page, setPage] = useState(1);

  const { data, isLoading } = useQuery({
    queryKey: ['notes', page, '', tag],
    queryFn: () => fetchNotes(page, 12, '', tag),
    placeholderData: keepPreviousData,
  });

  if (isLoading) return <p>Loading...</p>;

  return (
    <ul>
      {data?.notes.map((note: any) => (
        <li key={note.id}>
          <a href={`/notes/${note.id}`}>{note.title}</a>
        </li>
      ))}
    </ul>
  );
}