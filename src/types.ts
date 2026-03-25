export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
}

export interface GalleryItem {
  id: string;
  image: string;
  alt: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
}
