import { Outlet } from "react-router-dom"
import Footer from "./components/shared/Footer"
import Navbar from "./components/shared/Navbar"



function MainLayout() {


  return (
    <div className="max-w-screen-2xl mx-auto">
      <header>
        <Navbar></Navbar>
      </header>
      <main className=" min-h-[calc(100vh-100px)]">
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  )
}

export default MainLayout
