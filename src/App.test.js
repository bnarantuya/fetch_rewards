import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

test('renders title in the document', () => {
  const { getByText } = render(<App />)
  const linkElement = getByText(/coding assessment/i)
  expect(linkElement).toBeInTheDocument()
});
