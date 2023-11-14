
import { TabsItem, TabsSlider } from '../interfaces/Tabs';
import { v4 as uuidv4 } from 'uuid';
import trackingIllustration from '../../../public/2.1 Dashboard Applicant.jpg';
import searchIllustration from '../../../public/2.5 Dashboard - Find Jobs (Grid).jpg';
import taskIllustration from '../../../public/3.7 Dashboard Company - Applicant Profile.jpg';
import interviewIllustration from '../../../public/3.4 Dashboard Company- All Applicants.jpg';


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
        item:'Application',
        description:'application description'
      },
      {
      id:uuidv4(),
      item:'Reminders',
      description:'reminders description'
      },
    {
    id:uuidv4(),
    item:'Resume',
    description:'resume description'
  }
    ]