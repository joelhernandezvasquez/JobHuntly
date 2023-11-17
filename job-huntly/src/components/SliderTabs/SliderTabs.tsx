'use client';

import Image from 'next/image';
import Link from 'next/link';
import useScrollIntersectionObserver from '@/hooks/useScrollIntersectionObserver';
import useTabs from '@/hooks/useTabs';
import useFeaturesIcon from '@/hooks/useFeaturesIcon';
import { TabsSlider } from '@/helper/interfaces/Tabs';
import TabsContent from '../TabsContent/TabsContent';
import { IoChevronForwardOutline } from 'react-icons/io5';
import style from './style.module.css';

interface Props {
  tabsItem: TabsSlider[]
}

const SliderTabs = ({ tabsItem }: Props) => {
  const { selectedTab, handleSeletedTab } = useTabs();
  const { observerRef } = useScrollIntersectionObserver<HTMLUListElement>(handleSeletedTab);
  const { featuresIcon } = useFeaturesIcon();

  const handleSlideClick = (tabIndex: number) => {
    handleSeletedTab(tabIndex);
    if (observerRef.current) {
      const slideWidth = observerRef.current.children[0].clientWidth;
      observerRef.current.scrollLeft = tabIndex * slideWidth;
    }
  }

  return (
    <div className={style.slider_tabs_wrapper}>

      <ul className={style.slider_tabs_grid} ref={observerRef}>
        {tabsItem.map((tabItem, index) => {
          return <li key={tabItem.id}
            className={`${style.slider_tabs_item} ${index === selectedTab && style.active_slider_tab}`}
            onClick={() => handleSlideClick(index)}
          >
            <p className={style.features_icon}>{featuresIcon[index].icon}</p>
            <div>
              <h3 className={style.slider_tabs_headline}>{tabItem.item}</h3>
              <p className={style.slider_tabs_description}>{tabItem.description}</p>
              <Link className={style.slider_tabs_link} href=''> Learn More <IoChevronForwardOutline size={16} /> </Link>
            </div>

          </li>
        })}
      </ul>

      <TabsContent
        heading={tabsItem[selectedTab].heading}
        subHeading={tabsItem[selectedTab].subHeading}
      >
        <Image
          className={style.slider_tab_body_illustration}
          src={tabsItem[selectedTab].illustration}
          width={300}
          height={300}
          alt={`Illustration of ${tabsItem[selectedTab].item}`}
        />
      </TabsContent>
    </div>
  )
}

export default SliderTabs