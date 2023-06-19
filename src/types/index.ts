export interface Movie {
  id: string;
  ageRestriction: string;
  category: 'Movie' | 'TV Series';
  favouriteUsers: string[];
  images: {
    small: string;
    medium: string;
    large: string;
  };
  releaseYear: number;
  title: string;
  isTrending: boolean;
  isBookmarked?: boolean;
}
