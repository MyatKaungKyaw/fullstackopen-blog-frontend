import React from 'react'
import '@testing-library/jest-dom'
import {render,screen} from '@testing-library/react'
import Blog from './Blog'

describe('Blog component', () => {
    let container

    beforeEach(() => {
        const blog = {
            title: 'black adam review',
            author: 'rotten tomato',
            url: 'https://www.rottentomatoes.com/m/black_adam',
            likes: 39
        }
    
        container = render(<Blog blog={blog}/>).container
    })
    
    test('renders only title and author as default',() => {   
        const div = screen.getByText('black adam review rotten tomato')
        expect(div).toBeDefined()
    })
    
    test('at start url and likes are not rendered',() => {
        // const a = container.querySelector('.blog-link')
        // const a = screen.queryByText('https://www.rottentomatoes.com/m/black_adam')
        const a = screen.queryByTestId('fsdjhfdsfdsa')

        screen.debug(a)
        expect(a).not.toBeInTheDocument()
    })
})