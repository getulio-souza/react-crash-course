import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import type { User } from "../types/User";
import Footer from "../components/Footer/Footer";
import "./MainLayout.css";
import SubscribeUser from "../pages/SubscribeUser/SubscribeUser";
import React, { createContext, useState } from "react";
import LoginUser from "../pages/LoginUser/LoginUser";

type Props = {
  setEditUser: React.Dispatch<React.SetStateAction<User | null>>;
};

type UserStatusType = {
  isUserOnLoginPage: boolean,
  isUserOnSubscribePage: boolean,
  setIsUserOnLoginPage: React.Dispatch<React.SetStateAction<boolean>>,
  setIsUserOnSubscribePage: React.Dispatch<React.SetStateAction<boolean>>
}

type HeaderType = {
  showHeader: boolean,
  setShowHeader: React.Dispatch<React.SetStateAction<boolean>>
}

  
//criando um contexto para armazenar o usuario cadastrado e logado
export const UserStatusContext = createContext<UserStatusType>({
  isUserOnLoginPage: true,
  isUserOnSubscribePage: false,
  setIsUserOnLoginPage: () => {},
  setIsUserOnSubscribePage: () => {}
});

export const HeaderContext = createContext<HeaderType>({
  showHeader: false,
  setShowHeader: () => {}
})

function MainLayout({ setEditUser }: Props) {

  const [isUserOnLoginPage, setIsUserOnLoginPage] = useState<boolean>(true);
  
  const [isUserOnSubscribePage, setIsUserOnSubscribePage] = useState<boolean>(false);

  const [showHeader, setShowHeader] = useState<boolean>(true)

  return (
    <>
      
      <UserStatusContext.Provider 
      value={{ 
        isUserOnLoginPage, 
        setIsUserOnLoginPage, 
        isUserOnSubscribePage, 
        setIsUserOnSubscribePage 
        }}>
        {isUserOnLoginPage ? (<LoginUser />) : null}
        {isUserOnSubscribePage ? (<SubscribeUser />) : null}
      </UserStatusContext.Provider>
      
      {/* essa secao com o header, a lista de usuarios, o formulario e o footer so podem aparecer 
      quando o usuario entrar no sistema com email e senha */}
      
        {/* quando o usuario NAO estiver na tela de login, mostra a tela de home */}
      {!isUserOnLoginPage ? (<section className="main-container">
        <HeaderContext value={{showHeader, setShowHeader}}>
          <Header setEditUser={setEditUser} />
          </HeaderContext>
          <main>
            <Outlet />
          </main>
          <Footer />
        </section>) : null}
        
    </>
  );
}

export default MainLayout;
