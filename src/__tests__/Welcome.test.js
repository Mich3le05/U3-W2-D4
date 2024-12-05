import { render, screen } from '@testing-library/react'
import Welcome from './Welcome'

test('verifica che il componente Welcome venga montato correttamente', () => {
  render(<Welcome />)
  const headingElement = screen.getByRole('heading', {
    name: /benvenuti in epibooks/i,
  })
  expect(headingElement).toBeInTheDocument()
})
