import React from "react";
import './style.scss';

const Footer: React.FC = () => {
  const goToHome = (): void => {
    alert('Clicou no botão Início!');
  }

  const goToAdd = (): void => {
    alert('Clicou no botão adicionar!');
  }

  const goToSearch = (): void => {
    alert('Clicou no botão buscar!');
  }

  const goToFavorite = (): void => {
    alert('Clicou no botão favoritos!');
  }

  return (
    <>
      <div id="footer" className="hidden md:flex">
        <div className="container center flex flex-row justify-between">
          <div className="flex flex-row items-center">
            <img src="/images/logo-monocolor.png" alt="company logotype" />
          </div>
          <div>
            <div className="text-end text-white text-sm">Todos os direitos reservados.</div>
            <div className="text-end text-white text-sm">Studio Sol Books © 2023</div>
          </div>
        </div>
      </div>
      <div id="footer-mobile" className="flex md:hidden">
        <div className="container center flex flex-row md:hidden justify-between items-center">
          <div className="flex-column justify-center items-center flex-1" role="button" onClick={goToHome}>
            <div className="flex flex-row justify-center">
              <img src="images/icon-home.svg" alt="home icon" />
            </div>
            <div className="text-[#A076F2] text-sm flex flex-row justify-center">Início</div>
          </div>
          <div className="flex-column justify-center items-center flex-1" role="button" onClick={goToAdd}>
            <div className="flex flex-row justify-center">
              <img src="images/icon-plus-light.svg" alt="plus icon" />
            </div>
            <div className="text-[#9E9E9E] text-sm flex flex-row justify-center">Adicionar</div>
          </div>
          <div className="flex-column justify-center items-center flex-1" role="button" onClick={goToSearch}>
            <div className="flex flex-row justify-center">
              <img src="images/icon-search.svg" alt="search icon" />
            </div>
            <div className="text-[#9E9E9E] text-sm flex flex-row justify-center">Buscar</div>
          </div>
          <div className="flex-column justify-center items-center flex-1" role="button" onClick={goToFavorite}>
            <div className="flex flex-row justify-center">
              <img src="images/icon-hearth-light.svg" alt="hearth icon" />
            </div>
            <div className="text-[#9E9E9E] text-sm flex flex-row justify-center">Favoritos</div>
          </div>
        </div>
      </div>
    </>
  );
}

export { Footer };
