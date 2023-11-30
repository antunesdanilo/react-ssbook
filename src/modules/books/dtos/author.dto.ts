import { BookDto } from "./book.dto";

export interface AuthorDto {
  id: number;
  name: string;
  picture: string;
  booksCount: number;
  isFavorite: boolean;
  books: BookDto[];
}
