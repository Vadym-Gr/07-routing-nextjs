import axios, { AxiosResponse } from 'axios';
import type { Note, NoteTag } from '../types/note';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const TOKEN = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;

/*const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
});

export interface FetchNotesResponse {
  notes: Note[];
  totalPages: number;
}

export const fetchNotes = async (
  page: number,
  perPage: number,
  search?: string
): Promise<FetchNotesResponse> => {
  const res: AxiosResponse<FetchNotesResponse> = await api.get('/notes', {
    params: { page, perPage, search },
  });
  return res.data;
};

export const fetchNoteById = async (id: string): Promise<Note> => {
  const res: AxiosResponse<Note> = await api.get(`/notes/${id}`);
  return res.data;
};

export const createNote = async (data: {
  title: string;
  content: string;
  tag: NoteTag;
}): Promise<Note> => {
  const res: AxiosResponse<Note> = await api.post<Note>('/notes', data);
  return res.data;
};

export const deleteNote = async (id: string): Promise<Note> => {
  const res: AxiosResponse<Note> = await api.delete<Note>(`/notes/${id}`);
  return res.data;
};*/

const api = axios.create({
  baseURL: 'https://your-api-url.com',
});

export const fetchNotes = async (
  page: number,
  perPage: number,
  search?: string,
  tag?: string
) => {
  const res = await api.get('/notes', {
    params: {
      page,
      perPage,
      search,
      ...(tag ? { tag } : {}),
    },
  });

  return res.data;
};

export const fetchNoteById = async (id: string) => {
  const res = await api.get(`/notes/${id}`);
  return res.data;
};