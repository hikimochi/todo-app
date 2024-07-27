import React from 'react'
import {render, fireEvent, screen} from '@testing-library/react'
import SignIn from '../src/app/(auth)/login/page'

jest.mock('next/router', ()=> require('next-router-mock'))


test('renders sign in page', () => {
  render(<SignIn />)
  
  // Assert that the sign in page is rendered
  // expect(screen.getByText('Sign In')).toBeInTheDocument()
  // expect(screen.getByText("Don't have an account?")).toBeInTheDocument()
})
