import { useAuth } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import ChatList from "../components/ChatList";
import SidebarToggleButton from "../components/SidebarToggleButton";

const DashBoardLayout = () => {
  const { userId, isLoaded } = useAuth();
  const navigate = useNavigate();
  const [isSidebarOpen, setSidebarOpen] = useState(true); 

  useEffect(() => {
    const handleResize = () => {
      const breakpoint = window.matchMedia('(max-width: 786px)');
      setSidebarOpen(!breakpoint.matches);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // if (isLoaded && !userId) {
    //   navigate("/sign-in");
    // }
  }, [isLoaded, userId, navigate]);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  if (!isLoaded) return "Loading...";

  return (
    <div className="dashboardLayout flex h-full">
      {isSidebarOpen && (
        <div className={`menu z-10 max-w-fit sidebar  `}>
          <ChatList />
        </div>
      )}

      <div className="z-0 content flex flex-row gap-1 pt-1 pl-1 bg-[#242424] w-full h-full">
        <SidebarToggleButton isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <Outlet />
      </div>
    </div>
  );
};

export default DashBoardLayout;
