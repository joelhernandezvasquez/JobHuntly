import { SubMenuContent } from "../interfaces/SubMenuContent";
import 
{IoCogOutline,IoServerOutline,IoExtensionPuzzleOutline,IoLaptopOutline,IoReaderOutline,IoTerminalOutline, IoAlarmOutline, 
 IoIdCardOutline,
 IoConstructOutline,
 IoCreateOutline,
 IoDesktopOutline,
 IoTrophyOutline,
 IoStarOutline,
 IoFlashOutline,
 IoRocketOutline
} 
from "react-icons/io5";

const useSubMenuContent = () => {
    const subMenuContent:SubMenuContent  = {
        product:{
            headlineTitle:'Explore the features that help your team succeed',
            items:[
                {
                    name:'Job Tracking',
                    description:'Stay organized in your job hunt with our job tracking feature, helping you manage applications, interviews, and deadlines effortlessly.',
                    icon:<IoCogOutline size={25}/>
                },
                {
                    name:'Job Search',
                    description:'Streamline your job search with our feature for discovering and applying to relevant job opportunities.',
                    icon:<IoServerOutline size={25}/>
                },
                {
                    name:'Task Managment',
                    description:'Optimize your workflow with our professional task management feature, designed to help you efficiently organize, prioritize, and execute your tasks.',
                    icon:<IoExtensionPuzzleOutline size={25}/>
                },
                {
                    name:'Application Tracking',
                    description:'Track your job applications seamlessly with our Application Tracking feature, helping you stay organized and informed throughout your job hunt.',
                    icon:<IoLaptopOutline size={25}/>
                },
                {
                    name:'Resume Managment',
                    description:'Elevate your job search with Resume Management, your hub for storing and accessing tailored resumes for each unique opportunity.',
                    icon:<IoReaderOutline size={25}/>
                },
                {
                    name:'Interview Tracking',
                    description:'Nail your interviews with interview tracking: stay organized and ace every step.',
                    icon:<IoTerminalOutline size={25}/>
                },
                {
                    name:'Reminders and Alerts',
                    description:'Never miss a beat with Reminders and Alerts, keeping you on top of important dates and deadlines throughout your job search.',
                    icon:<IoAlarmOutline size={25}/>
                },
    
            ]
        },
        solutions:{
            headlineTitle:'Unlock your job search potential with our tailored Job Tracking Solutions.',
            items:[
                {
                    name:'Personal Job Hunt',
                    description:'Tailor your job search journey with personalized tracking, helping you stay organized, informed, and in control as you pursue your dream career.',
                    icon:<IoIdCardOutline size={25}/>
                },
                {
                    name:'Worforce Solution',
                    description:'Streamline your talent placement process with our dedicated workforce tracking and management tools, ensuring seamless candidate placement and success.',
                    icon:<IoConstructOutline size={25}/>
                },
                {
                    name:'Task Managment',
                    description:'Keep tasks in order,deadlines on track',
                    icon:<IoCreateOutline size={25}/>
                },
                {
                    name:'Bootcamps',
                    description:'A career platform for your student success and partnerships teams',
                    icon:<IoDesktopOutline size={25}/>
                }
    
            ]  
        },
        plans:{
            items:[
                {
                    name:'Free Plan',
                    description:'For individuals or small teams looking to keep work organized.',
                    icon:<IoFlashOutline color={'#ffc400'} size={25}/>
                },
                {
                    name:'Standard',
                    description:'For teams that need to manage more work and scale collaboration.',
                    icon:<IoTrophyOutline color={'#FD70AF'} size={25}/>
                },
                {
                    name:'Premium',
                    description:'Best for teams up to 100 that need to track multiple projects and visualize work in a variety of ways.',
                    icon:<IoStarOutline color={'#00B884'} size={25}/>
                },
                {
                    name:'Enterprise',
                    description:'Everything your enterprise teams and admins need to manage projects.',
                    icon:<IoRocketOutline color={'#FE7878'} size={25}/>
                },
            ]
        }
    }
  
    return {
       subMenuContent 
    }
}

export default useSubMenuContent;