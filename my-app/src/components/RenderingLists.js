import React from 'react'

export default function RenderingLists() {
    const bookList = [
        'To Kill A Mockingbird',
        'The Great Gatsby',
        'The Catcher In The Rye'
    ]
  return (
    <div>
        {bookList.map(book => {
            return <h2>{book}</h2>
        })}
    </div>
  )
}
