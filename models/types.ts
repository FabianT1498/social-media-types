export namespace SocialMedia.Models {
  export interface User {
    _id?: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    picturePath?: string;
    friends: string[];
    location: string;
    occupation: string;
    viewedProfile?: number;
    impressions?: number;
    token?: string;
  }

  export interface Comment {
    _id?: string;
    authorId: string;
    postId: string;
    likes: Map<string, boolean>;
    parentComment: string | null;
    content: string;
  }

  export interface Post {
    _id?: string;
    userId: string;
    location?: string;
    description?: string;
    picturePath: string;
    likes: Map<string, boolean>;
  }
}
