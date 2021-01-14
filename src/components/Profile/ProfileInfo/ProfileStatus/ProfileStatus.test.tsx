import React from 'react'
import ProfileStatus from './ProfileStatus'
import { create, act } from 'react-test-renderer'

describe('ProfileStatus component:', () => {
  const mockCallback = jest.fn()
  const component = create(
    <ProfileStatus isOwner={true} status="testing" onUpdateStatus={mockCallback} />
  )
  const instance = component.root
  const span = instance.findByType('span')

  test('after creation span should be displayed', () => {
    expect(span).not.toBeNull()
    expect(instance.findAllByType('span').length).toBe(1)
  })

  test("after creation span shouldn't be displayed", () => {
    expect(() => {
      instance.findByType('input')
    }).toThrow()
  })

  test('after creation span should contains correct status', () => {
    expect(span.children[0]).toBe('testing')
    expect(span.props.children).toBe('testing')
  })

  test('input should be displayed in editMode instead of span and contains correct value-status', () => {
    act(() => {
      span.props.onClick()
    })
    const input = instance.findByType('input')
    expect(input).not.toBeNull()
    expect(instance.findAllByType('input').length).toBe(1)
    expect(input.props.defaultValue).toBe('testing')
  })

  test('callback should be called', () => {
    act(() => {
      span.props.onClick()
    })
    const button = instance.findByType('button')
    act(() => {
      button.props.onClick()
      button.props.onClick()
    })
    expect(mockCallback).toBeCalled()
    expect(mockCallback.mock.calls.length).toBe(2)
    expect(mockCallback.mock.calls[0][0]).toBe('testing')
  })
})
