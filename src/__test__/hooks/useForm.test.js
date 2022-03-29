import '@testing-library/jest-dom';
import { act, renderHook } from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm';

describe('Test useForm', () => {

  const initialForm = {
    name: 'Fernando',
    email: 'xxx@email.com'
  }

  test('should return values and functions', () => {
    const { result } = renderHook(() => useForm( initialForm ))

    const [ values, handleInputChange, reset ] = result.current

    expect( values ).toEqual( initialForm )
    expect( typeof handleInputChange ).toBe('function')
    expect( typeof reset ).toBe('function')
  });

  test('should change name', () => {
    const target = {
      name: 'name',
      value: 'Diego'
    }

    const { result } = renderHook(() => useForm( initialForm ))
    const [, handleInputChange ] = result.current

    act(() => {
      handleInputChange({ target })
    })

    const [ values ] = result.current

    expect( values ).toEqual({ ...initialForm, name: 'Diego' })
  });

  test('should reset the form', () => {
    const target = {
      name: 'name',
      value: 'Diego'
    }

    const { result } = renderHook(() => useForm( initialForm ))
    const [, handleInputChange, reset ] = result.current

    act(() => {
      handleInputChange({ target })
      reset()
    })

    const [ values ] = result.current

    expect( values ).toEqual( initialForm )
  })
})