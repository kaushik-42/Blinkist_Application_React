import {render , screen} from '@testing-library/react';
import {Avatar} from './avatar';

describe('Avatar',()=>{
    test('Avatar Present',()=>{
        render(<Avatar text={'MyName'}/>);
        expect(screen.getByText('M')).toBeInTheDocument();
    });

})