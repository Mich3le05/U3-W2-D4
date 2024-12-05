import { render, screen, fireEvent } from '@testing-library/react'
import BookList from '../components/BookList'
import fantasy from '../data/fantasy.json'

test('Filtra i libri correttamente tramite barra di ricerca', () => {
  render(<BookList books={fantasy} />)

  const input = screen.getByPlaceholderText(/Cerca un libro/i)
  fireEvent.change(input, { target: { value: 'Harry' } })

  const filteredBooks = fantasy.filter((book) => book.title.includes('Harry'))
  expect(screen.getAllByRole('img')).toHaveLength(filteredBooks.length)
})
