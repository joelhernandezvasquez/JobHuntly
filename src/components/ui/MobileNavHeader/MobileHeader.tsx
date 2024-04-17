
import OpenMobileNav from '@/home/components/OpenMobileNav/OpenMobileNav';
import MaxWidthWrapper from '../MaxWidthWrapper/MaxWidthWrapper';
import CompanyLogo from '../companyLogo/CompanyLogo';
import style from './style.module.css';

const MobileHeader = () => {
  return (
      <MaxWidthWrapper>
        <div className={style.mobile_header_wrapper}>
            <CompanyLogo theme='light'/>
             <OpenMobileNav/>
        </div>
      </MaxWidthWrapper>
  )
}

export default MobileHeader;