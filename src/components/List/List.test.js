import React from 'react';
import { render } from '@testing-library/react';
import App from '../../App';

const initialData = [
  [{ id: 755, listId: 2, name: "Item 755" }],,
  [{ id: 684, listId: 1, name: "Item 684" },
  { id: 276, listId: 1, name: "Item 276" }],
  [{ id: 736, listId: 3, name: "Item 736" }],
  [{ id: 926, listId: 4, name: "Item 926" }]
]

describe('Testing the list correctly rendered', () => {
  test('List rendered correct', () => {
    const { getAllByTestId } = render(<App initialList={initialData} />)
    expect(getAllByTestId('list-test-id').length).toBe(4)
  })
})