import { Outlet } from "react-router-dom"
import Header from "../components/header/Header"
import type { User } from "../types/User"
import Footer from "../components/Footer/Footer";

type Props = {
    setEditUser: React.Dispatch<React.SetStateAction<User | null>>;
}

function MainLayout({setEditUser}: Props){

    return(
        <>
        <Header
            setEditUser={setEditUser}
        />
        <Outlet/>
        <Footer/>
        </>
    )
}

export default MainLayout