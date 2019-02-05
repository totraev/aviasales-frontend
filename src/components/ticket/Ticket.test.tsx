import React from 'react';
import renderer from 'react-test-renderer';

import Ticket from './Ticket';

describe('Ticket component', () => {
  it('Should renders correctly', () => {
    const ticket = {
      arrivalDate: '12.05.18',
      arrivalTime: '23:50',
      carrier: 'S7',
      departureDate: '12.05.18',
      departureTime: '17:20',
      destination: 'TLV',
      destinationName: 'Тель-Авив',
      origin: 'VVO',
      originName: 'Владивосток',
      price: 13100,
      stops: 1,
    };
    const tree = renderer.create(<Ticket ticket={ticket}/>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
