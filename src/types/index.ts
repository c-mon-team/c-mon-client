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

export interface Response {
  status: number;
  success: boolean;
  message: string;
  data: any;
}
