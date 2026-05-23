import { Outlet } from "react-router-dom"
import Header from "../components/header/Header"
import type { User } from "../types/User"
import Footer from "../components/Footer/Footer";
import "./MainLayout.css"

type Props = {
    setEditUser: React.Dispatch<React.SetStateAction<User | null>>;
}

function MainLayout({setEditUser}: Props){

    return(
        <>
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