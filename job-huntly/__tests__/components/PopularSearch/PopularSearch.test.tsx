import {render,screen, waitFor} from '@testing-library/react';
import PopularSearch from '@/components/PopularSearch/PopularSearch';
import { popularSearch } from '@/helper/data/popularSearchData';


describe('Test in Popular Search',() =>{

    const options = popularSearch;

it('it should render the same amount of options based on the  popular Search Array prop',async ()=>{
    const {container} = render(<PopularSearch popularSearch={options}/>) // Arrange

    await waitFor(() => {
        // eslint-disable-next-line testing-library/no-node-access
        const optionItems = container.querySelectorAll('li');
        expect(optionItems.length).toBe(options.length);
      });
})


})