export interface User {
  id: number;
  name: string;
}

export interface Result {
  id: number;
  name: string;
  memberList: string[];
}

export interface Group {
  groupId: number;
  groupName: string;
  members: Array<{ id: number; name: string }>;
}

export interface ApplyGroup {
  id: number;
  code: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Response {
  status: number;
  success: boolean;
  message: string;
  data: any;
}

export interface ResultResponse extends Response {
  data: {
    categoryList: Result[];
  };
}

export interface GroupResponse extends Response {
  data: Group;
}

export interface ApplyGroupResponse extends Response {
  data: ApplyGroup;
}

export interface SubCategoryData {
  subCategoryId: number;
  subCategoryName: string;
}
export interface PostSubCategoryResponse extends Response {
  data: SubCategoryData;
}

export interface UserCategory extends User {
  createdAt: Date;
  updatedAt: Date;
  groupId: number;
}

export interface PostTestResponse extends Response {
  data: UserCategory;
}
