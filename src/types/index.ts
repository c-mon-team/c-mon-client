export interface User {
  id: number;
  name: string;
  groupId: number;
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
