
import { secondaryFeatures } from '@/helper/data/featuresDescription';
import SliderTabs from '@/components/SliderTabs/SliderTabs';
import style from './features.module.css';

const SecondaryFeatures = () => {
  return (
    <div className={style.secondary_features_wrapper}>
       <h2> 
       Explore <span className='purple_text'>Additional Features</span> 
      </h2>

       <p className={style.secondary_features_subheading}> Turbocharge your job hunt with JobHuntly beyond tracking and reminders, discover seamless 
          resume management and elevate your journey with us.
        </p>

       <SliderTabs tabsItem={secondaryFeatures}/>

    </div>
  )
}

export default SecondaryFeatures