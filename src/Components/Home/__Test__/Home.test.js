import { fireEvent, render, screen } from "@testing-library/react";
import HomeCom from "../HomeCom";

describe("HomeCom", () => {
    
    test("renders react plus button", () => {
        render(<HomeCom />);
        const buttonElement = screen.getByTestId("plus-button");
        const Countvalue = screen.getByTestId("count-state");
        fireEvent.click(buttonElement);
        expect(buttonElement).toBeInTheDocument();
        expect(Countvalue.textContent).toBe("count is 1");
    });

    test("renders react minus button", () => {
        render(<HomeCom />);
        const plusButton = screen.getByTestId("plus-button");
        const Minusbutton = screen.getByTestId("minus-button");
        const CountValue = screen.getByTestId("count-state");

        fireEvent.click(plusButton);
        expect(CountValue.textContent).toBe("count is 1");

        fireEvent.click(Minusbutton);
        expect(CountValue.textContent).toBe("count is 0");
    });

    test("renders react counter state", () => {
        render(<HomeCom />);
        const countValue = screen.getByTestId("count-state");
        expect(countValue).toBeInTheDocument();
        expect(countValue.textContent).toBe("count is 0");
    });

});