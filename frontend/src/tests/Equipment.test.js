import React from 'react';
import '@testing-library/jest-dom';
import { render, cleanup } from '@testing-library/react';
import Equipment from '../components/Equipment';

afterEach(cleanup);

test('renders equipment', () => {
  const equipment = {
    id: 1,
    title: 'TestEquipment',
    stats: [
      {
        title: 'attack',
        points: 1
      },
      {
        title: 'defense',
        points: 1
      }
    ],
    price: 1,
    imageUrl: '/images/sword.png'
  };

  const component = render(
    <Equipment
      equipment={equipment}
    />
  );
  const titleParagraph = component.container.getElementsByClassName('equipment')[0];
  expect(titleParagraph.childNodes[0].textContent).toBe('TestEquipment');
});