import BlogCategory from "./blogCategory";
import BlogStatus from "./blogStatus";

export interface IBlog {
  _id: string;
  user: {
    _id: string;
    name: string;
    email: string;
  };
  title: string;
  byliner: string;
  slug: string;
  status: BlogStatus;
  category_id: BlogCategory;
  cover: string;
  views: number;
  likes: number;
  metaDescription: string;
  metaTitle: string;
  published_at: string;
  createdAt: string;
  updatedAt: string;
}

export interface BlogDetails extends IBlog {
  body: string;
}
