import { RiDashboardFill } from "react-icons/ri";
import { CgNotes } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
import { MdOutlineEditCalendar } from "react-icons/md";
import { AiOutlineNotification } from "react-icons/ai";
import { FaRegFilePdf } from "react-icons/fa";
import { FaRegAddressBook } from "react-icons/fa";
import { FaTasks } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import { v4 as uuidv4 } from 'uuid';

const useMenuSideBarDashboardItems = () => {
    const dashboardMenuLinks = [
        {
            id:uuidv4(),
            item:'Dashboard',
            route:'/dashboard',
            icon:<RiDashboardFill size={24} />
        },
        {
            id:uuidv4(),
            item:'Application Tracker',
            route:'/application',
            icon:<CgNotes size={24}  />
        },
        {
            id:uuidv4(),
            item:'Job Search',
            route:'/jobs',
            icon:<CiSearch size={24} />
        },
        {
            id:uuidv4(),
            item:'Interview Tracking',
            route:'/interviews',
            icon:<MdOutlineEditCalendar size={24} />
        },
        {
            id:uuidv4(),
            item:'Reminders',
            route:'/reminders',
            icon:<AiOutlineNotification size={24} />
        },
        
        {
            id:uuidv4(),
            item:'Resume Managment',
            route:'/resume',
            icon:<FaRegFilePdf size={24} />
        },
        {
            id:uuidv4(),
            item:'Contacts',
            route:'/contact',
            icon:<FaRegAddressBook size={24} />
        },
        {
            id:uuidv4(),
            item:'Tasks',
            route:'/tasks',
            icon:<FaTasks size={24} />
        },
        {
                id:uuidv4(),
                item:'Profile',
                route:'/profile',
                icon:<CiSettings size={24}/>
        },
        // {
        //         id:uuidv4(),
        //         item:'Logout',
        //         route:'/auth/login',
        //         icon:<TbLogout size={24} />
        // },
        ]
        
 return{
 dashboardMenuLinks
 }
}

export default useMenuSideBarDashboardItems