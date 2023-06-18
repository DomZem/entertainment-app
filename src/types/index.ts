export interface Movie {
  id: string;
  ageRestriction: string;
  category: 'Movie' | 'TV Series';
  images: {
    small: string;
    medium: string;
    large: string;
  };
  releaseYear: number;
  title: string;
  isTrending: boolean;
}
