import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';
import { ImageIcon } from '../../src/components/ImageIcon';

describe("<ImageIcon/>", () => {
    it('returns an Image', ()=>{
        const testSRC = "icon-tag";
        render(<ImageIcon image={testSRC}/>);
        const img = screen.getByTestId("imageIcon")
        expect(img).toBeTruthy();
    })
})