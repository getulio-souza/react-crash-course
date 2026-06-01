import { Outlet } from "react-router-dom"
import Header from "../components/header/Header"
import type { User } from "../types/User"
import Footer from "../components/Footer/Footer";
import "./MainLayout.css"
import { createContext, useState } from "react";
import SubscribeUser from "../pages/SubscribeUser/SubscribeUser";
import LoginUser from "../pages/LoginUser/LoginUser";

type Props = {
    setEditUser: React.Dispatch<React.SetStateAction<User | null>>;
}

function MainLayout({setEditUser}: Props){

    return(
        <>
        <LoginUser/>
        <SubscribeUser/>

        <section className="main-container">
            <Header
                setEditUser={setEditUser}
            />
            <main>
            <Outlet/>
            </main>
            <Footer/>
        </section>
        </>
    )
}

export default MainLayout