import { AxiosResponse } from 'axios';
import { Response } from 'types/index';

import { client } from './client';

export const deleteMyTest = async (id: number): Promise<boolean> => {
  try {
    const { data }: AxiosResponse<Response> = await client.delete('/member/choice', {
      data: { id },
    });
    return data.success;
  } catch (e) {
    return false;
  }
};
