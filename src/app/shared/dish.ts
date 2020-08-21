export class IDish {
  id: string;
  name: string;
  image: string;
  category: string;
  featured: boolean;
  label: string;
  price: string;
  description: string;
  comments: IComment[];
}

export class IComment {
  rating?: number;
  comment: string;
  author: string;
  date: string;
}