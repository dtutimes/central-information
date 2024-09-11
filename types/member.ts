import { MainWebsiteRole } from "./mainWebsiteRole";
import Permission from "./permissions";

export interface Member {
  id: string;
  name: string;
  email: string;
  role: string;
  role_id: string;
  bio: string;
  permission: Permission[];
}

export interface TeamMember {
  id: string;
  name: string;
  email: string;
  role: string;
  bio: string;
  team_role: MainWebsiteRole;
  role_id: string;
  created_at: Date;
}

export interface IUser {
  _id: string;
  name: string;
  email: string;
  bio: string;
}
