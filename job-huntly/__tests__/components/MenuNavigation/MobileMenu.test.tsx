
import MobileMenu from '@/components/MenuNavigation/MobileMenu';
import {render,screen, within} from '@testing-library/react';
import { mobileMenuLinks } from '@/helper/data/mobileMenuLinks';

describe('test on Mobile menu components',()=>{

    it('Should have the same amount of menu items ',()=>{
       render(<MobileMenu/>);

       const mobileList = screen.getByRole('list');
       const mobileListItems = within(mobileList).getAllByRole('listitem');
       expect(mobileMenuLinks.length).toBe(mobileListItems.length);
    })
})

