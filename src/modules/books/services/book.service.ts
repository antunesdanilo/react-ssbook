import { ApiService } from "../../../app/services/api.service";
import { AuthorDto } from "../dtos/author.dto";

import { BookDto } from "../dtos/book.dto";

import { BOOK_QUERY } from "../queries/book.query";
import { BOOKS_ALL_QUERY } from "../queries/books-all.query";
import { BOOKS_FAVORITE_QUERY } from "../queries/books-favorite.query";
import { AUTHORS_FAVORITE_QUERY } from "../queries/authors-favorite.query";

class BookService extends ApiService {
  async getAllBooks(): Promise<BookDto[]> {
    return this.apollo.query({
      query: BOOKS_ALL_QUERY,
    }).then((res: any) => res.data.allBooks);
  }

  async getFavoriteBooks(): Promise<BookDto[]> {
    return this.apollo.query({
      query: BOOKS_FAVORITE_QUERY,
    }).then((res: any) => res.data.favoriteBooks);
  }

  async getBookDetails(id: number): Promise<BookDto> {
    return this.apollo.query({
      query: BOOK_QUERY,
      variables: {
        id,
      }
    }).then((res: any) => res.data.book);
  }

  async getFavoriteAuthors(): Promise<AuthorDto[]> {
    return this.apollo.query({
      query: AUTHORS_FAVORITE_QUERY,
    }).then((res: any) => res.data.favoriteAuthors);
  }
}

export { BookService };
