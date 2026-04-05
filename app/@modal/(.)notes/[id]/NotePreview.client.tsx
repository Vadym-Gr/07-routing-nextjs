'use client';

import { useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { getNoteById } from '@/lib/api/notes';
import Modal from '@/components/Modal/Modal';

export default function NotePreview({ id }: { id: string }) {
  const router = useRouter();

  const { data, isLoading } = useQuery({
    queryKey: ['note', id],
    queryFn: () => getNoteById(id),
  });

  return (
    <Modal>
      {isLoading && <p>Loading...</p>}
      {data && (
        <div>
          <h2>{data.title}</h2>
          <p>{data.content}</p>
          <button onClick={() => router.back()}>Close</button>
        </div>
      )}
    </Modal>
  );
}
