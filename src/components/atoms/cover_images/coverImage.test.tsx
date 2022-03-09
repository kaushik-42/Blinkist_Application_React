import {render , screen} from '@testing-library/react';
import {CoverImages} from './coverImages';
import imageFile from './../../../stories/assets/i2.png';

describe('Cover Image',()=>{
    test('Alt Text',()=>{
        render(<CoverImages url={imageFile} class={'image2'}/>);
        expect(screen.getByAltText('Book Cover')).toBeInTheDocument();
    })

    test('Image Tag',()=>{
        render(<CoverImages url={imageFile} class={'image2'}/>);
        expect(screen.getByRole('img')).toBeInTheDocument();
    })
}); 