import { AxiosResponse } from 'axios';
import { Group, GroupResponse, Response, Result, ResultResponse } from 'types/index';

import { client } from './client';

export const getGroup = async (code: string): Promise<Group | null> => {
  try {
    const { data }: AxiosResponse<GroupResponse> = await client.get(`/group/${code}`);
    return data.data;
  } catch (e) {
    return null;
  }
};

// id가 0일 경우 모든 멤버
export const getResult = async (code: string, id: number[]): Promise<Result[] | null> => {
  try {
    const { data }: AxiosResponse<ResultResponse> = await client.get(
      `/group/${code}/choice/member?id=${id.join(',')}`,
    );
    return data.data.categoryList;
  } catch (e) {
    return null;
  }
};

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
