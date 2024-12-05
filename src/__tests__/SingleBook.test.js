import { render, screen, fireEvent } from '@testing-library/react'
import SingleBook from './SingleBook'

test('verifica che cliccando su un libro, il bordo cambi colore', () => {
  const mockChangeSelectedBook = jest.fn()
  render(
    <SingleBook
      changeSelectedBook={mockChangeSelectedBook}
      selectedBook={null}
      book={{ asin: '1234', img: 'test.jpg', title: 'Test Book' }}
    />
  )

  const bookCard = screen.getByRole('img')
  fireEvent.click(bookCard)
  expect(mockChangeSelectedBook).toHaveBeenCalledWith('1234')
})
