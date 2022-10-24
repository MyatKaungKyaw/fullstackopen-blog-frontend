import React from 'react'
import '@testing-library/jest-dom'
import {render,screen} from '@testing-library/react'
import Blog from './Blog'

test('Blog component renders only title and author as default',() => {
    const blog = {
        title: 'black adam review',
        author: 'rotten tomato',
        url: 'https://www.rottentomatoes.com/m/black_adam',
        likes: 39
    }

    render(<Blog blog={blog}/>)

    const div = screen.getByText('black adam review rotten tomato')
    expect(div).toBeDefined()
})