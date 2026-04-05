import axios from 'axios';

const api = axios.create({ baseURL: 'https://example.com/api' });

export const getNotes = async (tag?: string) => {
  const res = await api.get('/notes', {
    params: tag ? { tag } : {},
  });
  return res.data;
};

export const getNoteById = async (id: string) => {
  const res = await api.get(`/notes/${id}`);
  return res.data;
};
