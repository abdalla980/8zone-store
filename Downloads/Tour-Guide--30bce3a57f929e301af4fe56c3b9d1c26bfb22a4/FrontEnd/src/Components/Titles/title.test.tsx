import {describe,it,expect} from "vitest";
import {render, screen} from "@testing-library/react";
import Title from "./Title.tsx";


describe("Title component", () => {
    it("renders the Title of Every Page", () => {

        const testProps = {
      title: "Explore"
        };

        render(<Title  {...testProps} />);

        const titleElem = screen.getByText(testProps.title)
        expect(titleElem).toBeInTheDocument();
        expect(typeof titleElem.textContent).toBe("string");
        expect(titleElem.textContent).not.toBe("");

    });
});




