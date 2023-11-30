import React, { useEffect, useState } from "react";
import './style.scss';

import { UserService } from "../../../modules/user/services/user.service";
const userService = new UserService();

const Header: React.FC = () => {
  const [userImageLink, setUserImageLink] = useState<string>('/images/user-avatar.png');

  useEffect(() => {
    getUserPicture();
  }, []);

  const getUserPicture = async () => {
    const userImage = await userService.getUserPicture();
    setUserImageLink(userImage);
  }

  const goToAdd = (): void => {
    alert('Clicou no botão adicionar!');
  }

  const goToFavorite = (): void => {
    alert('Clicou no botão favoritos!');
  }

  const goToProfile = (): void => {
    alert('Clicou no avatar!');
  }

  return (
    <nav id="header">
      <div className="header-container flex flex-row justify-end md:pr-[1.5rem]">
        <div className="container max-md:center flex flex-row items-center justify-between">
          <img src="/images/logo.png" className="brand mr-5" alt="company logotype" />
          <div className="search-container hidden lg:block">
            <input className="input-search" placeholder="Busque um livro" />
            <img src="images/icon-search.svg" alt="search icon" className="icon-search" />
          </div>
          <div className="hidden lg:flex flex-row items-center flex-nowrap ml-5" role="button" onClick={goToAdd}>
            <img src="images/icon-plus.svg" alt="plus icon" />
            <div className="ml-2 text-[#555555] font-[700]">Adicionar</div>
          </div>
          <div className="hidden lg:flex flex-row items-center flex-nowrap ml-5" role="button" onClick={goToFavorite}>
            <img src="images/icon-hearth.svg" alt="hearth icon" />
            <div className="ml-2 text-[#555555] font-[700]">Favoritos</div>
          </div>
          <div className="flex flex-row items-center ml-5" role="button" onClick={goToProfile}>
            <img src={userImageLink} alt='user avatar' className="user-avatar" />
            <div className="ml-2 hidden lg:block text-[#555555] font-[700]">Jucicreide</div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export { Header };
