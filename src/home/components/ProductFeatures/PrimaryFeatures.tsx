
import Tabs from '@/components/Tabs/Tabs';
import Button from '@/components/Button/Button';
import { primaryFeatures } from '@/helper/data/featuresDescription';
import style from './features.module.css';

const PrimaryFeatures = () => {
  return (
    <section className={style.primary_features_wrapper}>
      <Tabs tabList={primaryFeatures}>
        <Button type='primary'size='medium'> Get Started </Button>
      </Tabs>
    </section>
  )
}

export default PrimaryFeatures;