
import FooterNavigation from './FooterNavigation';
import FooterCopyright from './FooterCopyright';
import style from './style.module.css';

const Footer = () => {
  return (
    <footer className={style.footer_wrapper}>  
         <FooterNavigation/>
         <FooterCopyright/>
    </footer>
  )
}

export default Footer