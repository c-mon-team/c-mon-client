import { AxiosResponse } from 'axios';

import {
  ApplyGroup,
  ApplyGroupResponse,
  PostSubCategoryResponse,
  PostTestResponse,
  SubCategoryData,
  UserCategory,
} from './../types/index';
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

export const postSubCategory = async (
  subCategory: string,
  category: string,
): Promise<SubCategoryData | null> => {
  try {
    const { data }: AxiosResponse<PostSubCategoryResponse> = await client.post('/category', {
      subCategory,
      category,
    });
    return data.data;
  } catch (e) {
    return null;
  }
};

export const postTest = async (
  groupId: number,
  userName: string,
  choice: string[],
): Promise<UserCategory | null> => {
  try {
    const { data }: AxiosResponse<PostTestResponse> = await client.post('/member', {
      groupId,
      userName,
      choice,
    });
    return data.data;
  } catch (e) {
    return null;
  }
};
