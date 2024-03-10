import { revalidatePath } from 'next/cache';

export const customRevalidate = (path: string) => {
  revalidatePath(path);
};
