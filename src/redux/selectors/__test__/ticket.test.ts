import { toggleOnlyCurrentCheckbox } from "../../modules/filter";
import { setTickets } from "../../modules/tickets";
import rootReducer, { initialState } from "../../rootReducer";
import { filteredTicketsSelector, sortedTicketsSelector } from "../tickets";

describe("Tickets selectors", () => {
  const tickets = [
    {
      arrival_date: "12.05.18",
      arrival_time: "18:10",
      carrier: "SU",
      departure_date: "12.05.18",
      departure_time: "12:10",
      destination: "TLV",
      destination_name: "Тель-Авив",
      origin: "VVO",
      origin_name: "Владивосток",
      price: 15300,
      stops: 0
    },
    {
      arrival_date: "12.05.18",
      arrival_time: "23:30",
      carrier: "TK",
      departure_date: "12.05.18",
      departure_time: "17:00",
      destination: "TLV",
      destination_name: "Тель-Авив",
      origin: "VVO",
      origin_name: "Владивосток",
      price: 11000,
      stops: 2
    }
  ];

  it("Should sort tickets", () => {
    const expected = [
      {
        arrival_date: "12.05.18",
        arrival_time: "23:30",
        carrier: "TK",
        departure_date: "12.05.18",
        departure_time: "17:00",
        destination: "TLV",
        destination_name: "Тель-Авив",
        origin: "VVO",
        origin_name: "Владивосток",
        price: 11000,
        stops: 2
      },
      {
        arrival_date: "12.05.18",
        arrival_time: "18:10",
        carrier: "SU",
        departure_date: "12.05.18",
        departure_time: "12:10",
        destination: "TLV",
        destination_name: "Тель-Авив",
        origin: "VVO",
        origin_name: "Владивосток",
        price: 15300,
        stops: 0
      }
    ];

    const state = rootReducer(initialState, setTickets(tickets));
    const sortedTickets = sortedTicketsSelector(state);

    expect(sortedTickets).toEqual(expected);
  });

  it("Should filter tickets", () => {
    const expected = [
      {
        arrival_date: "12.05.18",
        arrival_time: "18:10",
        carrier: "SU",
        departure_date: "12.05.18",
        departure_time: "12:10",
        destination: "TLV",
        destination_name: "Тель-Авив",
        origin: "VVO",
        origin_name: "Владивосток",
        price: 15300,
        stops: 0
      }
    ];

    const state = rootReducer(initialState, setTickets(tickets));
    const filteredState = rootReducer(
      state,
      toggleOnlyCurrentCheckbox(0, true)
    );
    const filteredTickets = filteredTicketsSelector(filteredState);

    expect(filteredTickets).toEqual(expected);
  });
});
