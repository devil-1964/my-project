import { useAuth } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import ChatList from "../components/ChatList";
import SidebarToggleButton from "../components/SidebarToggleButton";
import LoadingChats from "../components/LoadingChats";
import LoadingList from "../components/LoadingList";

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
    if (isLoaded && !userId) {
      navigate("/sign-in");
    }
  }, [isLoaded, userId, navigate]);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  if (!isLoaded)  return (
    <div className="dashboardLayout flex h-full ">
      {isSidebarOpen && (
        <div className={`menu  max-w-fit sidebar  `}>
          <LoadingList />
        </div>
      )}

      <div className=" content flex flex-row gap-1 pt-1 pl-1 bg-[#242424] w-full h-full">
        <SidebarToggleButton isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <LoadingChats/>
      </div>
    </div>
  );

  return (
    <div className="dashboardLayout flex h-full">
      {isSidebarOpen && (
        <div className={`menu  max-w-fit sidebar  `}>
          <ChatList />
        </div>
      )}

      <div className=" content flex flex-row gap-1 pt-1 pl-1 bg-[#242424] w-full h-full">
        <SidebarToggleButton isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <Outlet />
      </div>
    </div>
  );
};

export default DashBoardLayout;
