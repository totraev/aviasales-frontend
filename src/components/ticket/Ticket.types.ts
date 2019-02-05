export interface ITicket {
  origin: string;
  originName: string;
  destination: string;
  destinationName: string;
  departureDate: string;
  departureTime: string;
  arrivalDate: string;
  arrivalTime: string;
  carrier: string;
  stops: number;
  price: number;
}

export interface ITicketProps {
  ticket: ITicket;
}
