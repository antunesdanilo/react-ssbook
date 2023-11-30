import React, { useEffect, useMemo, useState } from 'react';
import { Link } from "react-router-dom";

import { BookDto } from '../../dtos/book.dto';

import { Header } from '../../../../app/components/header';
import { Footer } from '../../../../app/components/footer';
import { AuthorDto } from '../../dtos/author.dto';

import classNames from 'classnames';

import './style.scss';

import { BookService } from '../../services/book.service';
import Skeleton from '../../../../app/components/skeleton';
import { CategoryEnum } from '../../enums/category.enum';
const bookService = new BookService();

const BooksList: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'borrowed' | 'my'>('my');
  const [allBooksFilter, setAllBooksFilter] = useState<'ALL' | CategoryEnum>('ALL');

  const [favoriteBooks, setFavoriteBooks] = useState<BookDto[]>([]);
  const [allBooks, setAllBooks] = useState<BookDto[]>([]);
  const [authors, setAuthors] = useState<AuthorDto[]>([]);

  const [loadingFavoriteBooks, setLoadingFavoriteBooks] = useState<boolean>(true);
  const [loadingFavoriteAuthors, setLoadingFavoriteAuthors] = useState<boolean>(true);
  const [loadingAllBooks, setLoadingAllBooks] = useState<boolean>(true);

  useEffect(() => {
    getFavoriteBooks();
    getAllBooks();
    getAuthors();
  }, []);

  const goToAuthor = (authorId: number): void => {
    alert(`Clicou no link do author de id: ${authorId}!`);
  }

  const goToSeeAllBooks = (): void => {
    alert(`Clicou em ver todos os livros!`);
  }

  const goToSeeAllAuthors = (): void => {
    alert(`Clicou em ver todos os artistas!`);
  }

  const getFavoriteBooks = async (): Promise<void> => {
    const books = await bookService.getFavoriteBooks();
    setFavoriteBooks(books);
    setLoadingFavoriteBooks(false);
  }

  const getAllBooks = async (): Promise<void> => {
    const books = await bookService.getAllBooks();
    setAllBooks(books);
    setLoadingAllBooks(false);
  }

  const getAuthors = async (): Promise<void> => {
    const authors = await bookService.getFavoriteAuthors();
    setAuthors(authors);
    setLoadingFavoriteAuthors(false);
  }

  const filteredBooks = useMemo((): BookDto[] => {
    if (allBooksFilter !== 'ALL') {
      return allBooks.filter((book: BookDto) => book.category === allBooksFilter)
    }

    return allBooks;
  }, [allBooks, allBooksFilter]);

  return (
    <div id="books-list">
      <Header />

      <div className='container center flex flex-row  border-b border-b-[#E7E7E7] mt-1 mb-5 pt-5'>
        <div>
          <div className='px-6 md:px-8 py-3 text-[#555555] text-lg font-[700]' role="button" onClick={() => setActiveTab('my')}>Meus livros</div>
          {activeTab === 'my' && <div className='h-[4px] rounded-t-[2px] bg-[#A076F2]'></div>}
        </div>
        <div>
          <div className='px-8 py-3 text-[#555555] text-lg font-[700]' role="button" onClick={() => setActiveTab('borrowed')}>Emprestados</div>
          {activeTab === 'borrowed' && <div className='h-[4px] rounded-t-[2px] bg-[#A076F2]'></div>}
        </div>
      </div>

      <div className='container center'>
        <div className='flex flex-row justify-between items-center'>
          <div className='text-[28px] font-[700] text-[#555555]'>Livros favoritos</div>
          <div className='text-[16px] font-[700] text-[#A076F2]' role='button' onClick={goToSeeAllBooks}>ver todos</div>
        </div>
        <div className='favorite-books-container overflow-auto'>
          {loadingFavoriteBooks && <Skeleton repeat={9} width='136px' height='240px' />}
          {!loadingFavoriteBooks &&
            <div className='flex flex-row gap-3 mt-2 min-w-min'>
              {favoriteBooks.map((book: BookDto) => (
                <div key={book.id} className='favorite-books-card'>
                  <Link to={book.id.toString()}>
                    <div className='favorite-books-image'>
                      <img src={book.cover} alt={book.name} />
                    </div>
                    <div className='favorite-books-title font-[700] text-[#555555] text-[16px] h-[50px]'>{book.name}</div>
                    <div className='font-[400] text-[#757575] text-[14px]'>{book.author.name}</div>
                  </Link>
                </div>
              ))}
            </div>
          }
        </div>
      </div>

      <div className='flex flex-row justify-end'>
        <div className="authors-container flex flex-row justify-start md:pl-[1.5rem]">
          <div className="container max-md:center">
            <div className='flex flex-row justify-between items-center mt-4'>
              <div className='text-[28px] font-[700] text-[#555555]'>Artistas favoritos</div>
              <div className='text-[16px] font-[700] text-[#A076F2]' role='button' onClick={goToSeeAllAuthors}>ver todos</div>
            </div>
            <div className='mb-[1rem] pb-[1rem] flex flex-row overflow-auto'>
              {loadingFavoriteAuthors && <Skeleton repeat={3} width='300px' height='68px' />}
              {!loadingFavoriteAuthors &&
                <div className='flex flex-row gap-3 mt-2 min-w-min'>
                  {authors.map((author: AuthorDto) => (
                    <div key={author.id} onClick={() => goToAuthor(author.id)} className='favorite-authors-card' role='button'>
                      <img src={author.picture} alt={author.picture} className='w-[68px] h-[68px]' />
                      <div className='w-[228px] h-[68px] flex flex-col justify-center pl-3'>
                        <div className='font-[700] text-[#555555] text-[16px]'>{author.name}</div>
                        <div className='font-[400] text-[#757575] text-[14px]'>{author.booksCount} livro{author.booksCount > 1 ? 's' : ''}</div>
                      </div>
                    </div>
                  ))}
                </div>
              }
            </div>

            <div className='mt-8'>
              <div className='text-[28px] font-[700] text-[#555555]'>Biblioteca</div>
            </div>
            <div className='max-md:mb-[1rem] max-md:pb-[1rem] flex flex-row overflow-auto'>
              <div className='flex flex-row my-5 min-w-min'>
                <div role='button' className={classNames({'all-books-filter': true, 'active': allBooksFilter === 'ALL' })} onClick={() => setAllBooksFilter('ALL')}>Todos</div>
                <div role='button' className={classNames({'all-books-filter': true, 'active': allBooksFilter === CategoryEnum.ROMANCE })} onClick={() => setAllBooksFilter(CategoryEnum.ROMANCE)}>Romance</div>
                <div role='button' className={classNames({'all-books-filter': true, 'active': allBooksFilter === CategoryEnum.ADVENTURE })} onClick={() => setAllBooksFilter(CategoryEnum.ADVENTURE)}>Aventura</div>
                <div role='button' className={classNames({'all-books-filter': true, 'active': allBooksFilter === CategoryEnum.COMEDY })} onClick={() => setAllBooksFilter(CategoryEnum.COMEDY)}>Comédia</div>
                <div role='button' className={classNames({'all-books-filter': true, 'active': allBooksFilter === CategoryEnum.HORROR })} onClick={() => setAllBooksFilter(CategoryEnum.HORROR)}>Horror</div>
                <div role='button' className={classNames({'all-books-filter': true, 'active': allBooksFilter === CategoryEnum.TECHNOLOGY })} onClick={() => setAllBooksFilter(CategoryEnum.TECHNOLOGY)}>Tecnologia</div>
                <div role='button' className={classNames({'all-books-filter': true, 'active': allBooksFilter === CategoryEnum.TRAVEL })} onClick={() => setAllBooksFilter(CategoryEnum.TRAVEL)}>Viagens</div>
              </div>
            </div>
            <div className='flex flex-row gap-3 flex-wrap max-lg:mb-24 mb-12'>
              {loadingAllBooks &&
                <>
                  <div className='w-full md:hidden'>
                    <Skeleton repeat={12} width='100%' height='100px' />
                  </div>
                  <div className='w-full hidden md:block lg:hidden'>
                    <Skeleton repeat={12} width='48%' height='100px' />
                  </div>
                  <div className='w-full hidden lg:block'>
                    <Skeleton repeat={12} width='32%' height='100px' />
                  </div>
                </>
              }
              {!loadingAllBooks &&
                <>
                  {filteredBooks.map((book: BookDto) => (
                    <Link to={book.id.toString()} key={book.id} className='all-books-card'>
                      <img src={book.cover} alt={book.name} className='w-[68px] h-[100px] rounded-[8px]' />
                      <div className='h-[100px] flex flex-col justify-center pl-3 flex-1'>
                        <div className='font-[700] text-[#555555] text-[16px]'>{book.name}</div>
                        <div className='font-[400] text-[#757575] text-[14px]'>{book.author.name}</div>
                      </div>
                    </Link>
                  ))}
                </>
              }
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export { BooksList };
