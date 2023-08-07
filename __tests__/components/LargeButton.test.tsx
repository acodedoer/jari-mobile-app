import { render, screen, fireEvent, userEvent } from '@testing-library/react-native';
import { ImageIcon } from "../../src/components/ImageIcon"
import { LargeButton } from "../../src/components/LargeButton"
import '@testing-library/jest-native/extend-expect'

describe("<LargeButton />", ()=>{
    it("renders a label of the text passed as a prop", ()=> {
        render(<LargeButton label="test" icon={<ImageIcon image="icon-tag" />} />)
        const label = screen.getAllByText("test")
        expect(label.length).toBe(1)
    })
    
    it("renders an ImageIcon", ()=> {
        render(<LargeButton label="test" icon={<ImageIcon image="icon-tag" />} />)
        const label = screen.getAllByTestId("imageIcon")
        expect(label.length).toBe(1)
    })
})