
import CompanyLogo from '../../companyLogo/CompanyLogo';
import Link from 'next/link';
import Button from '../../Button/Button';
import style from './style.module.css';

const FooterNavigation = () => {
  return (
    <nav className={style.footer_navigation_grid}>
            <div className={style.footer_navigation_grid_first_col}>
                <CompanyLogo theme='dark'/>
                <p>Great platform for the job seeker that passionate about startups. Find your dream job easier.</p>
            </div>

            <div className={`${style.footer_navigation_column} ${style.footer_navigation_grid_second_col}`}>
                <h2 className={style.footer_navigation_column_heading}>About</h2>
                <ul className={style.footer_navigation_column_menu}>
                    <li><Link href={''}>companies</Link></li>
                    <li><Link href={''}>pricing</Link></li>
                    <li><Link href={''}>terms</Link></li>
                    <li><Link href={''}>advice</Link></li>
                   
                    <li><Link href={''}>privacy policy</Link></li>
                </ul>
            </div>

            <div className={`${style.footer_navigation_column} ${style.footer_navigation_grid_third_col}`}>
                <h2 className={style.footer_navigation_column_heading}>Resources</h2>
                <ul className={style.footer_navigation_column_menu}>
                    <li><Link href={''}>help docs</Link></li>
                    <li><Link href={''}>guide</Link></li>
                    <li><Link href={''}>updates</Link></li>
                    <li><Link href={''}>contact us</Link></li>
                </ul>
            </div>

            <div className={`${style.footer_navigation_column} ${style.footer_navigation_grid_fourth_col}`}>
            <h2 className={style.footer_navigation_column_heading}>Get Job Notifications</h2>
            <p className={style.footer_navigation_column_text}>The latest job news, articles, sent to your inbox weekly.</p>
            <form className={style.footer_form}>
                <input type='text' id='email-notification' name='email-notification' placeholder="Email Address"/>
               <Button type="primary" size="medium">Suscribe</Button>
            </form>
            </div>
          
         </nav>
  )
}

export default FooterNavigation