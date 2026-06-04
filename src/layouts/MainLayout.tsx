import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import type { User } from "../types/User";
import Footer from "../components/Footer/Footer";
import "./MainLayout.css";
import SubscribeUser from "../pages/SubscribeUser/SubscribeUser";
import { useState } from "react";
import LoginUser from "../pages/LoginUser/LoginUser";

type Props = {
  setEditUser: React.Dispatch<React.SetStateAction<User | null>>;
};

function MainLayout({ setEditUser }: Props) {

  // state para checar se o usuario esta logado
  const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean>(true);
  const [isUserSubscribed, setIsUserSubscribed] = useState<boolean>(false);

  return (
    <>
      {isUserLoggedIn ? (<LoginUser/>) : null}
      {isUserSubscribed ? (<SubscribeUser/>) : null}
      
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
