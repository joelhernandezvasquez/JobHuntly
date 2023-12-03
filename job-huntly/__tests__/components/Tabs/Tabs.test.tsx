import {act, fireEvent, render,renderHook,screen} from '@testing-library/react';
import Tabs from '@/components/Tabs/Tabs';
import { primaryFeatures } from '@/helper/data/featuresDescription';
import useTabs from '@/hooks/useTabs';


describe('Tests on Tabs Component',()=>{
  
    it('should move the active state to the tab clicked and also to show the correct information expected',()=>{
        render(<Tabs tabList={primaryFeatures}> </Tabs>)
        const index = 1;
        const {result} = renderHook(()=> useTabs());
        const {handleSeletedTab} = result.current;

        const listOfTab = screen.getAllByRole('listitem');
        const tab = listOfTab[index];
    
        expect(tab).not.toHaveClass('active_tab');

        fireEvent.click(tab);

        act(()=>{
            handleSeletedTab(index)
         })

        expect(tab).toHaveClass('active_tab');
        expect(result.current.selectedTab).toBe(index);
    })
})