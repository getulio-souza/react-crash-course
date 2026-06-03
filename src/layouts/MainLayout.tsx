import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import type { User } from "../types/User";
import Footer from "../components/Footer/Footer";
import "./MainLayout.css";
import SubscribeUser from "../pages/SubscribeUser/SubscribeUser";
import LoginUser from "../pages/LoginUser/LoginUser";
import { useState } from "react";

type Props = {
  setEditUser: React.Dispatch<React.SetStateAction<User | null>>;
};

function MainLayout({ setEditUser }: Props) {

  // state para checar se o usuario esta logado
  const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean>(false);

  return (
    <>
      {/* <LoginUser /> */}
      <SubscribeUser />

      {isUserLoggedIn ? (
        <section className="main-container">
          <Header setEditUser={setEditUser} />
          <main>
            <Outlet />
          </main>
          <Footer />
        </section>
      ) : (
        ""
      )}
    </>
  );
}

export default MainLayout;
