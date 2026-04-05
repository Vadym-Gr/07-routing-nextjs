/*import {
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
}*/

type Props = {
  params: {
    slug?: string[];
  };
};

export default function FilterPage({ params }: Props) {
  const slug = params.slug ?? [];

  // Випадок: /notes/filter
  if (slug.length === 0) {
    return (
      <main>
        <h1>Filter page</h1>
        <p>No filters selected</p>
      </main>
    );
  }

  // Випадок: /notes/filter/...
  return (
    <main>
      <h1>Filter results</h1>
      <p>Slug: {slug.join(" / ")}</p>
    </main>
  );
}