
import { TabsItem, TabsSlider } from '../interfaces/Tabs';
import { v4 as uuidv4 } from 'uuid';
import trackingIllustration from '../../../public/2.1 Dashboard Applicant.jpg';
import searchIllustration from '../../../public/2.5 Dashboard - Find Jobs (Grid).jpg';
import taskIllustration from '../../../public/3.7 Dashboard Company - Applicant Profile.jpg';
import interviewIllustration from '../../../public/3.4 Dashboard Company- All Applicants.jpg';
import applicationIllustration from '../../../public/2.3 Dashboard - Applications History.jpg';
import notificationIllustration from '../../../public/2.13 Dashboard - Notifications.jpg';
import resumeIllustration from '../../../public/3.20 Dashboard Company - Settings (Team).jpg';

export const primaryFeatures:TabsItem [] = [
    {
      id:uuidv4(),
      item:'tracking',
      content:{
        title:'Stay Organized in Your Job Search',
        description:'Stay organized in your job hunt with our job tracking feature, helping you manage applications, interviews, and deadlines effortlessly.',
        illustration:trackingIllustration
      }
    },
    {
      id:uuidv4(),
      item:'search',
      content:{
        title:'Streamline your job search',
        description:'Streamline your job search with our feature for discovering and applying to relevant job opportunities.',
        illustration:searchIllustration
      }
    },
    {
      id:uuidv4(),
      item:'task',
      content:{
        title:'Optimize your workflow',
        description:'Optimize your workflow with our professional task management feature, designed to help you efficiently organize, prioritize, and execute your tasks.',
        illustration:taskIllustration
      }
    },
    {
      id:uuidv4(),
      item:'interview',
      content:{
        title:'Stay on Track and Ace Your Interviews',
        description:'Nail your interviews with interview tracking: stay organized and ace every step.',
        illustration:interviewIllustration
      }
    },
    ]
    
    export const secondaryFeatures:TabsSlider [] =[
      {
        id:uuidv4(),
        item:'Application Tracker',
        description:'Simplify your job search by tracking and managing applications in one central hub.',
        illustration:applicationIllustration,
        heading:'Track Your Applications with Ease',
        subHeading:'Track your job applications seamlessly with our Application Tracking feature, helping you stay organized and informed throughout your job hunt.'
      },
      {
      id:uuidv4(),
      item:'Notification',
      description:'Set personalized reminders for key job application milestones and never miss a deadline or interview.',
      illustration:notificationIllustration,
      heading:'Reminders and Alerts for Timely Action',
      subHeading:'Never miss a beat with Reminders and Alerts, keeping you on top of important dates and deadlines throughout your job search.'
      },
    {
    id:uuidv4(),
    item:'Resume',
    description:'Streamline your job search with our resume manager. Organize and track applications effortlessly.',
    illustration:resumeIllustration,
    heading:'Streamlined Resume Management',
    subHeading:'Elevate your job search with Resume Management, your hub for storing and accessing tailored resumes for each unique opportunity.'
  }
    ]