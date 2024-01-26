
import Image from 'next/image';
import { auth } from '@/auth.config';
import DefaultAvatar from '../DefaultAvatar/DefaultAvatar';
import style from './style.module.css';

const ProfileAvatar = async () => {
  const session = await auth();
  const user = session?.user;

 return (
    <div className={style.avatar_container}>
       <div className={style.avatar_image_container}>
        { user?.image ?
         ( <Image 
        className={style.avatar_image}
        width={50}
        height={50}
        src={user?.image}
        alt={''}
        /> )
       :
       <DefaultAvatar userName={user?.user.name} backgroundColor='#7B61FF'/>
      }
      
       </div>

       <div className={style.avatar_information_container}>
       </div>
    </div>
  )
}

export default ProfileAvatar