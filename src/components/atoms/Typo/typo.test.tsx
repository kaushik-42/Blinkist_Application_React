import {render , screen} from '@testing-library/react';
import { Typo } from './typo';

describe('Typo',()=>{
    test("Typo Text",()=>{
        render(<Typo text={'Dummy Typo'} type={'h1'} />);
        expect(screen.getByText('Dummy Typo')).toBeInTheDocument();
    })
})