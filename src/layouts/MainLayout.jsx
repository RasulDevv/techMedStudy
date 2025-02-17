import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";

export default function MainLayout() {
  return (
    <>
        <Header />
        <div className="wrapper">
            <Outlet />
        </div>
    </>
  )
}
