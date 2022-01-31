import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from './App'

describe('App', () => {
  it('renders without crashing', () => {
    const { asFragment } = render(() => <App />)
    expect(asFragment()).toMatchSnapshot()
  })
});