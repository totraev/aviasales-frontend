import React from "react";
import { createRenderer } from "react-test-renderer/shallow";

import Ticket from "./Ticket";

describe("Ticket component", () => {
  it("Should renders correctly", () => {
    const ticket = {
      arrival_date: "12.05.18",
      arrival_time: "23:50",
      carrier: "S7",
      departure_date: "12.05.18",
      departure_time: "17:20",
      destination: "TLV",
      destination_name: "Тель-Авив",
      origin: "VVO",
      origin_name: "Владивосток",
      price: 13100,
      stops: 1
    };
    const renderer = createRenderer();
    const tree = renderer.render(<Ticket ticket={ticket} />);

    expect(tree).toMatchSnapshot();
  });
});
