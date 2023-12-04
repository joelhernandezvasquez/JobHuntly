
import { IoLogoDribbble, IoLogoLinkedin, IoLogoTwitter } from 'react-icons/io5';
import style from './style.module.css';

const FooterCopyright = () => {
  return (
    <div className={style.footer_social_copyright_container}>
    <p className={style.footer_social_copyright}>2023 @ JobHuntly. All rights reserved.</p>
    <ul className={style.social_icons_container}>
    <li>
       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
       <path d="M15.1201 5.32003H17.0001V2.14003C16.0899 2.04538 15.1753 1.99865 14.2601 2.00003C11.5401 2.00003 9.68011 3.66003 9.68011 6.70003V9.32003H6.61011V12.88H9.68011V22H13.3601V12.88H16.4201L16.8801 9.32003H13.3601V7.05003C13.3601 6.00003 13.6401 5.32003 15.1201 5.32003Z" fill="#FFF"/>
      </svg>
    </li>

    <li>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <g clipPath="url(#clip0_67_6012)">
            <path d="M16 4H8C5.79086 4 4 5.79086 4 8V16C4 18.2091 5.79086 20 8 20H16C18.2091 20 20 18.2091 20 16V8C20 5.79086 18.2091 4 16 4Z" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16.5 7.5V7.501" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
            <defs>
                <clipPath id="clip0_67_6012">
                <rect width="24" height="24" fill="white"/>
                </clipPath>
            </defs>
        </svg>
    </li>

    <li>
       <IoLogoDribbble size={24} color={'#fff'}/> 
    </li>
    <li>
        <IoLogoLinkedin size={24} color={'#fff'}/>
    </li>
    <li>
        <IoLogoTwitter size={24} color={'#fff'}/>
    </li>

    </ul>
 </div>
  )
}

export default FooterCopyright