
import SubMenu from '@/components/ui/MenuNavigation/SubMenu';
import {fireEvent, render,screen} from '@testing-library/react';


describe('Test on Submenu',()=>{
    const item = 'product';

    it('the menu item should be present on the component',()=>{
       
        render(<SubMenu item={item}/>);
        
        const itemValue= screen.getByText(item);

        expect(itemValue).toBeInTheDocument();

    });

    it('Should open SubMenu Group when List item is clicked',()=>{
       
        const {container} = render(<SubMenu item={item}/>);
         const subMenu = screen.getByTestId('open-submenu');
        // eslint-disable-next-line testing-library/no-container
        const subMenuGroup = container.querySelector(".submenu_wrapper");
        
        expect(subMenuGroup).toBeNull();

        fireEvent.click(subMenu);

         // eslint-disable-next-line testing-library/no-container
        const subMenuGroupAfterClick = container.querySelector(".submenu_wrapper");

        expect(subMenuGroupAfterClick).toBeInTheDocument();
      
    });

    it('Should close SubMenu Group when List item is clicked',()=>{
       
        const {container} = render(<SubMenu item={item}/>);
         const subMenu = screen.getByTestId('open-submenu');

         fireEvent.click(subMenu);

        const subMenuGroupAfterClick = container.querySelector(".submenu_wrapper");
        expect(subMenuGroupAfterClick).toBeInTheDocument();

        fireEvent.click(subMenu);
        expect(subMenuGroupAfterClick).not.toBeInTheDocument();
    });







    
})