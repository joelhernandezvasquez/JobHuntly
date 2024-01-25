import ToggleDashboardMenu from "../ToggleDashboardMenu/ToggleDashboardMenu";
import CurrentPageHeader from "../CurrentPageHeader/CurrentPageHeader";
import SwitchTheme from "../SwitchTheme/SwitchTheme";
import Notification from "../Notification/Notification";
import ProfileAvatar from "../ProfileAvatar/ProfileAvatar";
import MaxWidthWrapper from "../MaxWidthWrapper/MaxWidthWrapper";
import style from './style.module.css';

const TopHeader = () => {
  return (
    <header className={style.top_header_wrapper}>
     <MaxWidthWrapper flex flexGapSm>
        <div className={style.top_header_left_col}>
        <ToggleDashboardMenu/>
        <CurrentPageHeader/>
        </div>
       
       <div className={style.top_header_right_col}>
        <SwitchTheme/>
        <Notification/>
        <ProfileAvatar/>
       </div>
      
     </MaxWidthWrapper>
     
    </header>
  )
}

export default TopHeader