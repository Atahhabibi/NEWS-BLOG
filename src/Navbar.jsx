import "./Nav.css";
import { HiOutlineBars4 } from "react-icons/all";
import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import { useAppContext } from "./contextAPI";

const Navbar = () => {
  const { setQuery, setIsSidebarOpen } = useAppContext();

  const [classType, setClassType] = useState("show-nav");
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > 50) {
      if (window.scrollY > lastScrollY) {
        setClassType("hide-nav");
      } else {
        setClassType("show-nav");
      }
    } else {
      setClassType("nav-home");
    }

    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  const handleNavbar = (e) => {
    const value = e.target.dataset.item;
  
    if (value) {
      setQuery(value);
    }
  };

  return (
    <section className={`navbar ${classType}`}>
      <nav>
        <div className="nav-header">
          <h1 className="heading text-3xl">DAILY NEWS</h1>
          <button onClick={() => setIsSidebarOpen(true)}>
            <HiOutlineBars4 />
          </button>
        </div>
        <ul className="menuItems ">
          <button onClick={handleNavbar} data-item="university student news">
            Education
          </button>
          <button onClick={handleNavbar} data-item="sports news">
            sports
          </button>
          <button onClick={handleNavbar} data-item="  politics news">
            politics
          </button>

          <button onClick={handleNavbar} data-item="world economy news">
            Economic
          </button>
          <button onClick={handleNavbar} data-item="hollywood news">
            Hollywood
          </button>
        </ul>
      </nav>
    </section>
  );
};
export default Navbar;
