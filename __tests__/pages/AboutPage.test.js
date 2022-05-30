import { render, screen } from "@testing-library/react";
import { mockRouter } from "../../__mocks__/next";

import AboutPage from "../../pages/about";

describe("AboutPage", () => {
  beforeEach(() => {
    mockRouter();
  });

  test("should render hero heading", async () => {
    render(<AboutPage />);

    const heading = screen.getByText(/About Page Title/);
    expect(heading).toBeInTheDocument();
  });
});
