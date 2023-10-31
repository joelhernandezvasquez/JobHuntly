
import {getAllByRole, render,screen} from '@testing-library/react';
import TeamLogos from '@/home/components/TeamLogos/TeamLogos';

describe('Test on Team Logos component',() =>{

    it('should have more than one team logo',()=>{
        
        const {getAllByRole} = render(<TeamLogos/>)
        
        const liElements = getAllByRole('listitem');

        expect(liElements.length).toBeGreaterThan(2);

    })
})

