import '@testing-library/jest-dom';
import { act, renderHook } from '@testing-library/react-hooks';

import { useCounter } from '../../hooks/useCounter'

describe('Test useCounter', () => {
  test('should return values default', () => {
    const { result } = renderHook( () => useCounter() )

    const { counter } = result.current

    expect( counter ).toBe(10)
  });

  test('should return functions default', () => {
    const { result } = renderHook( () => useCounter() )

    const { increment, decrement, reset } = result.current

    expect( typeof increment ).toBe('function')
    expect( typeof decrement ).toBe('function')
    expect( typeof reset ).toBe('function')
  });

  test('should return value 100', () => {
    const { result } = renderHook( () => useCounter(100) )

    const { counter } = result.current

    expect( counter ).toBe(100)
  });

  test('should increase to 101', () => {
    const { result } = renderHook( () => useCounter(100) )

    const { increment } = result.current

    act( () => {
      increment()
    })

    const { counter } = result.current

    expect( counter ).toBe(101)
  });

  test('should decrease to 99', () => {
    const { result } = renderHook( () => useCounter(100) )

    const { decrement } = result.current

    act( () => {
      decrement()
    })

    const { counter } = result.current

    expect( counter ).toBe(99)
  });

  test('should reset to 100', () => {
    const { result } = renderHook( () => useCounter(100) )

    const { increment, decrement, reset} = result.current

    act( () => {
      increment()
      decrement()
      increment()
      increment()

      reset()
    })

    const { counter } = result.current

    expect( counter ).toBe(100)
  });

});