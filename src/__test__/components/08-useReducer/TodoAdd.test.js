import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { TodoAdd } from '../../../components/08-useReducer/TodoAdd';

describe('Test <TodoAdd />', () => {
  const handleAddTodo = jest.fn()

  const wrapper = shallow( <TodoAdd handleAddTodo={ handleAddTodo } />)

  test('should show correctly', () => {
    expect( wrapper ).toMatchSnapshot()
  });

  test('should not call the fucntion handleAddTodo ', () => {
    const onSubmit = wrapper.find('form').prop('onSubmit')

    onSubmit({ preventDefault(){} })

    expect( handleAddTodo ).not.toHaveBeenCalled()
  });

  test('should call the function handleAddTodo ', () => {

    const value = 'To learn React';

    wrapper.find('input').simulate('change', {
      target: {
        name: 'description',
        value
      }
    })

    const onSubmit = wrapper.find('form').prop('onSubmit')

    onSubmit({ preventDefault(){} })

    expect( handleAddTodo ).toHaveBeenCalled()
    expect( handleAddTodo ).toHaveBeenCalledWith( expect.any( Object ) )
    expect( handleAddTodo ).toHaveBeenCalledWith({
      id: expect.any( Number ),
      desc: value,
      done: false
    })

    expect( wrapper.find('input').prop('value') ).toBe('')
  });
});