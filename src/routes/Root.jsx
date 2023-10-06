import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import SunnyBgImage from "../components/SunnyBgImage";
import MyCard from "../components/MyCard";
const Root = () => {
  return (
    <>
        <Navbar />
        <SunnyBgImage/>
        <MyCard></MyCard>
        <Outlet />
    </>
  )
}

export default Root