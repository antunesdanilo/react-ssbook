import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

import { BookDto } from '../../dtos/book.dto';

import './style.scss';

import { Header } from '../../../../app/components/header';
import { Footer } from '../../../../app/components/footer';

import { BookService } from '../../services/book.service';
const bookService = new BookService();

import { BsArrowLeftShort } from "react-icons/bs";
import { HiOutlineDotsVertical } from "react-icons/hi";

const BookDetails: React.FC = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const [book, setBook] = useState<BookDto | undefined>();

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (id) {
      getBook(Number(id));
    }
  }, [id]);

  const getBook = async (id: number): Promise<void> => {
    const book = await bookService.getBookDetails(id);
    setBook(book);
    setLoading(false);
  }

  const goToFavorite = (): void => {
    alert('Clicou no botão favoritar!');
  }

  const goToShare = (): void => {
    alert('Clicou no botão compartilhar!');
  }

  const goToSave = (): void => {
    alert('Clicou no botão salvar em uma lista!');
  }

  const goBack = (): void => {
    navigate(-1);
  }

  return (
    <div id="book-details">
      <div className='hidden md:block'>
        <Header />
      </div>

      {book &&
        <>
          <img
            src={book.cover}
            alt={book.name}
            className='book-image-mobile md:hidden'
          />
          <BsArrowLeftShort className='md:hidden' style={{ position: 'absolute', zIndex: 10, top: 15, left: 15}} color='white' size={40} onClick={goBack} />
          <HiOutlineDotsVertical className='md:hidden' style={{ position: 'absolute', zIndex: 10, top: 15, right: 15}} color='white' size={30} />
        </>
      }

      <div className="container center md:mt-3 relative hidden md:flex flex-row">
        {book &&
          <img
            src={book.cover}
            alt={book.name}
            className='book-image'
          />
        }
        <div className='w-[320px]'>&nbsp;</div>
        <div className='flex flex-col mt-3 mb-6 h-[105px] flex-1'>
          <div className="font-[700] text-[34px] text-[#555555] leading-10">{book?.name}</div>
          <div className='font-[400] text-[#757575] text-[14px] mt-2 ml-1'>{book?.author.name}</div>
        </div>
      </div>

      <div className='flex flex-row justify-end'>
        <div className="book-details-container flex flex-col md:flex-row justify-start md:pl-[1.5rem]">
          <div className='container max-md:center pt-6 md:hidden flex flex-row'>
            <div className='flex-1'>
              <div className="font-[700] text-[20px] text-[#555555] leading-6">{book?.name}</div>
              <div className='font-[400] text-[#757575] text-[14px] mt-1 mb-4'>{book?.author.name}</div>
            </div>
            <div className='mx-2'>
              {book?.isFavorite ?
                <img src="images/icon-hearth-filled.svg" alt="hearth icon" />
                :
                <img src="images/icon-hearth-empty.svg" alt="hearth icon" />
              }
            </div>
          </div>
          <div className="container max-md:center flex flex-row mt-6">
            <div className='w-[320px] mt-[315px] mb-12 hidden md:block'>
              <div className="hidden md:flex flex-row items-center flex-nowrap" role="button" onClick={goToFavorite}>
                <img src="images/icon-hearth.svg" alt="hearth icon" />
                <div className="ml-2 text-[18px] text-[#555555] font-[700]">Favoritar</div>
              </div>
              <div className="hidden md:flex flex-row items-center flex-nowrap mt-8" role="button" onClick={goToShare}>
                <img src="images/icon-share.svg" alt="hearth icon" />
                <div className="ml-[12px] text-[18px] text-[#555555] font-[700]">Compartilhar</div>
              </div>
              <div className="hidden md:flex flex-row items-center flex-nowrap mt-8" role="button" onClick={goToSave}>
                <img src="images/icon-save.svg" alt="hearth icon" />
                <div className="ml-2 text-[18px] text-[#555555] font-[700]">Salvar em uma lista</div>
              </div>
            </div>
            <div className='flex-1 mb-20 md:mb-8'>
              <div className='text-[18px] font-[400] text-[#555555]'>{book?.description}</div>
              <div className='font-[700] text-[#555555] text-[28px] mt-6'>Sobre o Autor</div>
              <div className='text-[18px] font-[400] text-[#555555] mt-3'>{book?.author.name}...</div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export { BookDetails };
