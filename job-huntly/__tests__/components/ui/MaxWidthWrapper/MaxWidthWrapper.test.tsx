
import { render,screen } from '@testing-library/react';
import MaxWidthWrapper from '../../../../src/components/ui/MaxWidthWrapper/MaxWidthWrapper';

describe('MaxWidthWrapper', () => {
    
  it('should render children', () => {
    render( <MaxWidthWrapper> <p>Test</p> </MaxWidthWrapper>);
    const children = screen.getByText('Test');
    expect(children).toBeInTheDocument();
  });

  it('should have flex class when flex prop is true', () => {
    render( <MaxWidthWrapper> <div className='flex'>Test</div> </MaxWidthWrapper>);
    const container = screen.getByText('Test');
    expect(container).toHaveClass('flex');
  });

  it('should have flexCenter class when flexCenter prop is true', () => {
    render( <MaxWidthWrapper> <div className='flexCenter'>Test</div> </MaxWidthWrapper>);
    const container = screen.getByText('Test');
    expect(container).toHaveClass('flexCenter');
  });

  it('should have flexGapSm class when flexGapSm prop is true', () => {
    render( <MaxWidthWrapper> <div className='flexGapSm'>Test</div> </MaxWidthWrapper>);
    const container = screen.getByText('Test');
    expect(container).toHaveClass('flexGapSm');
  });

});

