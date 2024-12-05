import { render, screen } from '@testing-library/react'
import CommentArea from './CommentArea'

test("verifica che all'avvio non ci siano istanze di SingleComment nel DOM", () => {
  render(<CommentArea asin={null} />)
  const comments = screen.queryAllByText(/elimina/i) // Cerca il bottone di eliminazione
  expect(comments).toHaveLength(0)
})
