import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';

import { fetchNotes } from '../../../../lib/api';
import NotesClient from './Notes.client';

export default async function Page({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug } = await params;

  const tag = slug?.[0] === 'all' ? undefined : slug?.[0];

  const qc = new QueryClient();

  await qc.prefetchQuery({
    queryKey: ['notes', 1, '', tag],
    queryFn: () => fetchNotes(1, 12, '', tag),
  });

  return (
    <HydrationBoundary state={dehydrate(qc)}>
      <NotesClient tag={tag} />
    </HydrationBoundary>
  );
}