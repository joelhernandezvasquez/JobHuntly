
import style from './style.module.css';
import AvatarDropdown from '../AvatarDropdown/AvatarDropdown';
import ShowAvatar from '../ShowAvatar/ShowAvatar';

const ProfileAvatar = async () => {
 
 return (
    <div className={style.avatar_container}>
    <ShowAvatar/>
    <AvatarDropdown/>
              
    </div>
  )
}

export default ProfileAvatar