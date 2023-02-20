import { fireEvent, screen } from '@testing-library/react'
import { componentRender } from 'shared/lib/tests/componentRender/componentRender'
import { Sidebar } from './Sidebar'

describe('Sidebar', () => {
  test('Render test', () => {
    componentRender(<Sidebar />)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })

  test('Toggle sidebar', () => {
    componentRender(<Sidebar />)
    const toggle = screen.getByTestId('sidebar-toggle')
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    fireEvent.click(toggle)
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
  })
})
