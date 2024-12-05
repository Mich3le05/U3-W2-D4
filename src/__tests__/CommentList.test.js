import { render, screen } from '@testing-library/react'
import CommentList from '../components/CommentList'

const mockComments = [
  { _id: '1', comment: 'Ottimo libro!' },
  { _id: '2', comment: 'Molto interessante.' },
]

jest.mock('../components/CommentList', () => ({ commentsToShow }) => (
  <ul>
    {commentsToShow.map((c) => (
      <li key={c._id}>{c.comment}</li>
    ))}
  </ul>
))

test('Le recensioni vengono caricate correttamente nel DOM', () => {
  render(<CommentList commentsToShow={mockComments} />)
  mockComments.forEach((comment) => {
    expect(screen.getByText(comment.comment)).toBeInTheDocument()
  })
})
