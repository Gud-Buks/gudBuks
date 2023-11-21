export type BooksVolume = {
  id: string;
  volumeInfo: {
    title: string;
    authors: string[];
    description: string;
    publishedDate: string;
    categories: string[];
    imageLinks?: {
      thumbnail: string;
      smallThumbnail: string;
    };
  };
};

export type BooksVolumes = {
  items: BooksVolume[];
};
