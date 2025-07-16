import {describe,it,expect} from "vitest";
import {render, screen} from "@testing-library/react";
import Button from "./buttons.tsx";


describe("Button component", () => {
    it("renders the  Main buttons", () => {

        const testProps = {
            label: "Button Label"
        };

        render(<Button  {...testProps} />);

        const button = screen.getByText(testProps.label)
        expect(button).toBeInTheDocument();
        expect(button.textContent).not.toBe("");

    });
});


