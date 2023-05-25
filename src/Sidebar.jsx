import "./Sidebar.css";
import { AiFillCloseSquare } from "react-icons/ai";
import { useAppContext } from "./contextAPI";

const Sidebar = () => {
  const { isSidebarOpen, setIsSidebarOpen,setQuery } = useAppContext();

  const handleSidebar = (e) => {
    const value = e.target.dataset.item;
    if (value) {
      setQuery(value);
      setIsSidebarOpen(false);
    }
  };

  return (
    <div
      className={`sidebar-container ${
        isSidebarOpen ? "show-sidebar" : "hide-sidebar"
      }`}
    >
      <div className="sidebar-header">
        <h1>Daily news</h1>
        <button onClick={() => setIsSidebarOpen(false)}>
          <AiFillCloseSquare />
        </button>
      </div>
      <div className="side-items">
        <button onClick={handleSidebar} data-item="university student news">
          Education
        </button>
        <button onClick={handleSidebar} data-item="sports news">
          sports
        </button>
        <button onClick={handleSidebar} data-item="  politics news">
          politics
        </button>

        <button onClick={handleSidebar} data-item="world economy news">
          Economic
        </button>
        <button onClick={handleSidebar} data-item="hollywood news">
          Hollywood
        </button>
      </div>
    </div>
  );
};
export default Sidebar;
