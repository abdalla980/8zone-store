import {describe,it,expect} from "vitest";
import {render, screen} from "@testing-library/react";
import Card from "./Card.tsx";


        describe("Card component", () => {
            it("renders title, description and image and the button of every card", () => {

                const testProps = {
                    title: "Any Title",
                    description: "Some description here",
                    image: "testImage.jpg",
                    button:"label"
                };

                render(<Card {...testProps} />);

                const title = screen.getByRole("heading");
                expect(title).toBeInTheDocument();
                expect(typeof title.textContent).toBe("string");
                expect(title.textContent).not.toBe("");

                const paragraph = screen.getByText(testProps.description)
                expect(paragraph).toBeInTheDocument();
                expect(paragraph.textContent).not.toBe("");

                const images = screen.getAllByRole("img");
                expect(images).toHaveLength(2);
                expect(images[0]).toHaveAttribute("src", testProps.image);
                expect(images[1]).toHaveAttribute("src", "Heart.png");

                const button = screen.getByRole("button")
                expect(button).toBeInTheDocument();
                expect(button.textContent).not.toBe("");
            });
        });


