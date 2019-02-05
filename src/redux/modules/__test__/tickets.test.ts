import ticketsReducer, {
  initialState,
  setTickets,
  startLoading,
  stopLoading
} from "../tickets";

describe("Filter reducer", () => {
  it("Should return initial state", () => {
    const state = ticketsReducer(undefined, {} as any);

    expect(state).toEqual(initialState);
  });

  it("Should start loading", () => {
    const state = ticketsReducer(initialState, startLoading());

    expect(state.loading).toBeTruthy();
  });

  it("Should start loading", () => {
    const state = ticketsReducer(initialState, stopLoading());

    expect(state.loading).toBeFalsy();
  });

  it("Should set ticket", () => {
    const ticket = {
      arrival_date: "12.05.18",
      arrival_time: "22:10",
      carrier: "TK",
      departure_date: "12.05.18",
      departure_time: "16:20",
      destination: "TLV",
      destination_name: "Тель-Авив",
      origin: "VVO",
      origin_name: "Владивосток",
      price: 12400,
      stops: 3
    };
    const state = ticketsReducer(initialState, setTickets([ticket]));

    expect(state.tickets.length).toEqual(1);
  });
});
