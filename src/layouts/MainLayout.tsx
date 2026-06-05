import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import type { User } from "../types/User";
import Footer from "../components/Footer/Footer";
import "./MainLayout.css";
import SubscribeUser from "../pages/SubscribeUser/SubscribeUser";
import { createContext, useState } from "react";
import LoginUser from "../pages/LoginUser/LoginUser";

type Props = {
  setEditUser: React.Dispatch<React.SetStateAction<User | null>>;
};
  
//criando um contexto para armazenar o usuario cadastrado e logado
export const UserStatusContext = createContext(null)

function MainLayout({ setEditUser }: Props) {

  // state para checar se o usuario esta logado
  const [isUserOnLoginPage, setIsUserOnLoginPage] = useState<boolean>(true);
  const [isUserOnSubscribePage, setIsUserOnSubscribePage] = useState<boolean>(false);

  return (
    <>
      
      <UserStatusContext.Provider value={{isUserOnLoginPage, setIsUserOnLoginPage, isUserOnSubscribePage, setIsUserOnSubscribePage}}>
      {isUserOnLoginPage ? (<LoginUser />) : null}
      {isUserOnSubscribePage ? (<SubscribeUser/>) : null}
      </UserStatusContext.Provider>
      
      {/* essa secao com o header, a lista de usuarios, o formulario e o footer so podem aparecer quando o usuario entrar no sistema com email e senha */}

        <section className="main-container">
          <Header setEditUser={setEditUser} />
          <main>
            <Outlet />
          </main>
          <Footer />
        </section>
    </>
  );
}

export default MainLayout;
