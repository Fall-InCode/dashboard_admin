import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import StoreMallDirectoryIcon from '@mui/icons-material/StoreMallDirectory';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import BarChartIcon from '@mui/icons-material/BarChart';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import SettingsIcon from '@mui/icons-material/Settings';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const Sidebar = () => {
  return (
   <div className="sidebar">
       <div className="top">
           <span className="logo">
               Fall
           </span>
        </div>
        <hr />
       <div className="center">
           <ul>
               <p className="title">MAIN</p>
               <li> <DashboardIcon className="icon" /><span>Dashboard</span></li>
               <p className="title">Lists</p>
               <li><PersonIcon className="icon" /><span>Users</span></li>
               <li><StoreMallDirectoryIcon className="icon" /><span>Products</span></li>
               <li><CreditCardIcon className="icon" /><span>Orders</span></li>
               <li><LocalShippingIcon className="icon" /><span>Delivery</span></li>
               <p className="title">USEFULL</p>
               <li><BarChartIcon className="icon"/><span>Stats</span></li>
               <li><NotificationsIcon className="icon"/><span>Notifications</span></li>
               <p className="title">SERVICE</p>
               <li><HealthAndSafetyIcon className="icon"/><span>System Health</span></li>
               <li><VpnKeyIcon className="icon"/><span>Logs</span></li>
               <p className="title">USER</p>
               <li><SettingsIcon className="icon"/><span>Settings</span></li>
               <li><ManageAccountsIcon className="icon"/><span>Profile</span></li>
               <li><ExitToAppIcon className="icon"/><span>Logout</span></li>
           </ul>
       </div>
       <div className="bottom">
           <div className="colorOption"></div>
           <div className="colorOption"></div>
       </div>
   </div>
  )
}

export default Sidebar