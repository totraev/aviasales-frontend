import React from "react";
import renderer from "react-test-renderer";

import Seporator from "./Seporator";

describe("Seporator component", () => {
  it("Should renders correctly", () => {
    const tree = renderer.create(<Seporator stops={1} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
