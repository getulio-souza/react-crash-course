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
  const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean>(true);
  const [isUserSubscribed, setIsUserSubscribed] = useState<boolean>(false);

  return (
    <>
      
      <UserStatusContext.Provider value={{isUserLoggedIn, setIsUserLoggedIn, isUserSubscribed, setIsUserSubscribed}}>
      {isUserLoggedIn ? (<LoginUser />) : null}
      {isUserSubscribed ? (<SubscribeUser/>) : null}
      </UserStatusContext.Provider>
      
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
