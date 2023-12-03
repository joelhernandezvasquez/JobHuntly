import {act, fireEvent, render,renderHook,screen} from '@testing-library/react';
import SliderTabs from '@/components/SliderTabs/SliderTabs';
import { secondaryFeatures } from '@/helper/data/featuresDescription';
import useTabs from '@/hooks/useTabs';

describe('Suite test on Slider Tabs',()=>{

    it('should move active slider tab when a tab gets click',()=>{
      render(<SliderTabs tabsItem={secondaryFeatures}/>);
      const {result} = renderHook(()=> useTabs());
      const {handleSeletedTab} = result.current;
      const INDEX = 1;

      const tabList = screen.getAllByRole('listitem');
      const tab = tabList[INDEX];

      expect(tab).not.toHaveClass('active_slider_tab');

      fireEvent.click(tab);

      act(()=>{
       handleSeletedTab(INDEX);
      })

      expect(result.current.selectedTab).toBe(INDEX);
      expect(tab).toHaveClass('active_slider_tab');
    })

})