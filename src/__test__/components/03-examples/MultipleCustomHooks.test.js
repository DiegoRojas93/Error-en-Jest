import React from 'react'
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { MultipleCustomHooks } from '../../../components/03-examples/MultipleCustomHooks';
import { useFetch } from '../../../hooks/useFetch';
import { useCounter } from '../../../hooks/useCounter';

jest.mock('../../../hooks/useFetch.js')
jest.mock('../../../hooks/useCounter')

describe('Test <MultipleCustomHooks />', () => {

  useCounter.mockReturnValue({
    counter: 10,
    increment: () => {}
  })

  test('should show it correctly', () => {

    useFetch.mockReturnValue({
      data: null,
      loading: true,
      error: null
    })

    const wrapper = shallow( <MultipleCustomHooks />)
    expect( wrapper ).toMatchSnapshot()
  });

  test('should show us information when the data has been given', () => {

    useFetch.mockReturnValue({
      data: [{
        author: 'Fernando',
        quote: 'Hello world!'
      }],
      loading: false,
      error: null
    })

    const wrapper = shallow( <MultipleCustomHooks />)

    expect ( wrapper.find('.alert').exists() ).toBe(false)
    expect ( wrapper.find('.mb-0').text().trim() ).toBe('Hello world!')
    expect ( wrapper.find('footer').text().trim() ).toBe('Fernando')

  });

});