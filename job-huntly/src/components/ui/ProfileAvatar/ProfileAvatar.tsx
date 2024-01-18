import Image from 'next/image';
import avatarSampleImage from '../../../../public/avatars/joseph-gonzalez-iFgRcqHznqg-unsplash.jpg';
import style from './style.module.css';

const ProfileAvatar = () => {
  return (
    <div className={style.avatar_container}>
      
       <div className={style.avatar_image_container}>
        <Image 
        className={style.avatar_image}
        width={50}
        height={50}
        src={avatarSampleImage}
        alt={''}
        />
       </div>

       <div className={style.avatar_information_container}>
       </div>
    </div>
  )
}

export default ProfileAvatar