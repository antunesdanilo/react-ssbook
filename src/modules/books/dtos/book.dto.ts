import { CategoryEnum } from "../enums/category.enum";
import { AuthorDto } from "./author.dto";

export interface BookDto {
  id: number;
  name: string;
  cover: string;
  author: AuthorDto;
  description: string;
  isFavorite: boolean;
  category: CategoryEnum;
}
