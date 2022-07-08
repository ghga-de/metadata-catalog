import { render, screen } from "@testing-library/react"
import FooterIcons from "./footerIcons"

test('twitter button contains class', () => {
    render(<FooterIcons />);

    expect(screen.getByTestId('twitter')).toHaveClass('text-black');
})
