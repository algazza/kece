import { useEffect, useState } from "react";
import { logoArmor } from "../data";
import { Link } from "react-router-dom";

const Header = () => {
  const [hasShadow, setHasShadow] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY >= 50){
        setHasShadow(true)
      } else {
        setHasShadow(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
  
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
  

  return (
    <header
      className={`fixed w-full top-0 left-0 bg-primary z-[100] duration-300 ${
        hasShadow ? "shadow-[0px_0px_40px_10px_#00000024]" : ""
      }`}
    >
      <nav className="">
        <img src={logoArmor} alt="logo" className="h-20" />

        <ul className="list-none sm:flex justify-end items-center flex-1">
          <li>
            <Link ></Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
