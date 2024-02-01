
import { AuthAdapter } from '../../../config/authAdapter';
import AvatarDropdown from '../AvatarDropdown/AvatarDropdown';
import ShowAvatar from '../ShowAvatar/ShowAvatar';
import style from './style.module.css';

const ProfileAvatar = async () => {
  
  const user = await AuthAdapter.getUserSessionInfo();
  console.log(user);

 return (
    <div className={style.avatar_container}>
    <ShowAvatar user={user}>
        <AvatarDropdown/>        
    </ShowAvatar>
    </div>
  )
}

export default ProfileAvatar