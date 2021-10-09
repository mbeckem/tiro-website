import React from "react";
import { render, screen } from "@testing-library/react";
import { AutoLink } from "../AutoLink";

// Example test
describe("AutoLink", () => {
    it("renders an external link for full URLs", () => {
        render(<AutoLink className="test-class" href="https://example.com/foo">Hello World</AutoLink>);

        const link = screen.getByRole("link", {
            name: /Hello World/i
        });

        expect(link).toMatchSnapshot();
    });

    it("renders a normal for relative hrefs", () => {
        render(<AutoLink className="test-class" href="./foo/bar">Hello World</AutoLink>);

        const link = screen.getByRole("link", {
            name: /Hello World/i
        });

        expect(link).toMatchSnapshot();
    });

    it("renders a normal for anchor hrefs", () => {
        render(<AutoLink className="test-class" href="#anchor-123">Hello World</AutoLink>);

        const link = screen.getByRole("link", {
            name: /Hello World/i
        });

        expect(link).toMatchSnapshot();
    });
});
