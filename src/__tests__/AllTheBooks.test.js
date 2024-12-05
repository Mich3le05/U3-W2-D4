import { render, screen } from '@testing-library/react'
import AllTheBooks from './AllTheBooks'
import fantasy from '../data/fantasy.json'

test('verifica che vengano renderizzate tante cards quanti sono i libri nel file JSON', () => {
  render(<AllTheBooks />)
  const cards = screen.getAllByRole('img') // Le immagini delle copertine
  expect(cards).toHaveLength(fantasy.length)
})
