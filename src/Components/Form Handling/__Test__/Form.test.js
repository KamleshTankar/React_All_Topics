import { render, screen } from "@testing-library/react";
import FormCom from "../FormHandlingCom";

describe("FormCom", () => {
    
    test("renders Form Component", () => {
        render(<FormCom />);
        const formElement = screen.getByText("Form Component");
        expect(formElement).toBeInTheDocument();
    });
    
    test("renders all input fields", () => {
        render(<FormCom />);
        const firstNameInput = screen.getByTestId("first-name");
        const lastNameInput = screen.getByTestId("last-name");
        const numberInput = screen.getByTestId("number");
        const emailInput = screen.getByTestId("email");
        const passwordInput = screen.getByTestId("password");       
        expect(firstNameInput).toBeInTheDocument();
        expect(lastNameInput).toBeInTheDocument();
        expect(numberInput).toBeInTheDocument();
        expect(emailInput).toBeInTheDocument();
        expect(passwordInput).toBeInTheDocument();
    });

    // test("renders submit button", () => {
    //     render(<FormCom />);
    //     const submitButton = screen.getByRole("button", { name: /submit/i });
    //     const firstNameInput = screen.getByTestId("first-name");
    //     const lastNameInput = screen.getByTestId("last-name");
    //     const numberInput = screen.getByTestId("number");
    //     const emailInput = screen.getByTestId("email");
    //     const passwordInput = screen.getByTestId("password");
        
    //     fireEvent.click(submitButton);

    //     expect(submitButton).toBeInTheDocument();

    //     expect(firstNameInput.textContent).toBe("");
    //     expect(lastNameInput.textContent).toBe("");
    //     expect(numberInput.textContent).toBe("");
    //     expect(emailInput.textContent).toBe("");
    //     expect(passwordInput.textContent).toBe("");
    // });
});