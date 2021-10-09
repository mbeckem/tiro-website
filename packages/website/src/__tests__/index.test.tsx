import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../pages/index";

// Example test
describe("Home", () => {
    it("renders a heading", () => {
        render(<Home />);

        const heading = screen.getByRole("heading", {
            name: /todo/i
        });

        expect(heading).toBeInTheDocument();
    });
});
