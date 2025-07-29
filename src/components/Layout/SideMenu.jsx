import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import automationIcon from "../../assets/icons/Automation.svg";
import manageIcon from "../../assets/icons/Group.svg";
import homeIcon from "../../assets/icons/Home.svg";
import logoutIcon from "../../assets/icons/Logout.svg";
import notificationIcon from "../../assets/icons/notification.svg";
import reportsIcon from "../../assets/icons/reports.svg";
import settingsIcon from "../../assets/icons/settings.svg";

function SideMenu() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("login");
    navigate("/login");
  };
  return (
    <section className="sticky top-0 h-screen w-64 bg-white shadow-md overflow-y-auto side-menu select-none shadow-2xl">
      <div className="pt-3 pl-9 text-2xl text-black">Task Manager</div>
      <ul className="flex flex-col mx-auto text-black text-2xl mt-3 gap-1">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "sidemenu-link bg-orange-300" : "sidemenu-link"
            }
          >
            <div className="flex flex-row gap-3">
              <img src={homeIcon} className="h-6 w-6" alt="home-icon" />
              Dashboard
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? "sidemenu-link bg-orange-300" : "sidemenu-link"
            }
          >
            <div className="flex flex-row gap-3">
              <img src={manageIcon} className="h-4 w-4" alt="manage-icon" />
              Projects
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/tasks"
            className={({ isActive }) =>
              isActive ? "sidemenu-link bg-orange-300" : "sidemenu-link"
            }
            onClick={() => setShow(!show)}
          >
            <div className="flex flex-row gap-3">
              <img
                src={automationIcon}
                className="h-4 w-4"
                alt="automation-icon"
              />
              Tasks
            </div>
          </NavLink>
        </li>
        <li>
          <div className="sidemenu-link">
            <div className="flex flex-row gap-3">
              <img
                src={notificationIcon}
                className="h-5 w-4"
                alt="notification-icon"
              />
              Notifications
            </div>
          </div>
        </li>
        <li>
          <div className="sidemenu-link">
            <div className="flex flex-row gap-3">
              <img src={reportsIcon} className="h-5 w-4" alt="reports-icon" />
              Reports
            </div>
          </div>
        </li>
        <li>
          <div className="sidemenu-link">
            <div className="flex flex-row gap-3">
              <img src={settingsIcon} className="h-5 w-4" alt="settings-icon" />
              Settings
            </div>
          </div>
        </li>
        <li>
          {/* <div className="sidemenu-link">
            <div className="flex flex-row gap-3">
              <img src={logoutIcon} className="h-5 w-4" alt="logout-icon" />
              Logout
            </div>
          </div> */}
          <div className="sidemenu-link" onClick={handleLogout} role="button">
            <div className="flex flex-row gap-3 cursor-pointer">
              <img src={logoutIcon} className="h-5 w-4" alt="logout-icon" />
              Logout
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
}

export default SideMenu;
