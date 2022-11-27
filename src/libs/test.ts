import { AxiosResponse } from 'axios';

import { ApplyGroup, ApplyGroupResponse } from './../types/index';
import { client } from './client';

export const postGroup = async (group: string): Promise<ApplyGroup | null> => {
  try {
    const { data }: AxiosResponse<ApplyGroupResponse> = await client.post('/group', {
      group,
    });
    return data.data;
  } catch (e) {
    return null;
  }
};
