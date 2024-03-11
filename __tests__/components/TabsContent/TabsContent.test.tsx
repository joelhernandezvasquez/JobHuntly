import {render,screen} from '@testing-library/react';
import TabsContent from '@/components/TabsContent/TabsContent';
import { secondaryFeatures } from '@/helper/data/featuresDescription';

describe('Test suite on Tabs Content',()=>{

    it('should show the correct data',()=>{
        render(
            <TabsContent
                heading={secondaryFeatures[0].heading}
                subHeading={secondaryFeatures[0].subHeading}>
               <button>Example Button</button>
              </TabsContent>
        )
        expect(screen.getByText(secondaryFeatures[0].heading)).toBeTruthy
        expect(screen.getAllByText(secondaryFeatures[0].subHeading)).toBeTruthy
    })
})