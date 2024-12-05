import { render, screen } from '@testing-library/react'
import CommentArea from '../components/CommentArea'

test('Il componente CommentArea viene renderizzato correttamente', () => {
  render(<CommentArea asin={null} />)
  expect(screen.getByText(/Recensione/i)).toBeInTheDocument()
})
