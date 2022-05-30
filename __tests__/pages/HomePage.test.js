import { render, screen } from "@testing-library/react";
import { mockRouter } from "../../__mocks__/next";

import HomePage, { getStaticProps } from "../../pages/index";

describe("HomePage", () => {
  beforeEach(() => {
    mockRouter();
  });

  test("should render hero heading", async () => {
    const { props } = await getStaticProps();
    render(<HomePage {...props} />);

    const heading = screen.getByText(/Home Page Title/);
    expect(heading).toBeInTheDocument();
  });
});
