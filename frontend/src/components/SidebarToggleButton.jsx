import { Menu, X } from "lucide-react";

const SidebarToggleButton = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <button
      onClick={toggleSidebar}
      className={`p-2 z-10 absolute transition-transform duration-300 ${
        isSidebarOpen ? "rotate-90" : "rotate-0"
      }`}
    >
      {isSidebarOpen ? <X  size={24} color="white" /> : <Menu size={24} color="white" />}
    </button>
  );
};

export default SidebarToggleButton;