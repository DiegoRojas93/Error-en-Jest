import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { TodoList } from '../../../components/08-useReducer/TodoList';
import {demoTodos} from '../../fixtures/demoTodos';



describe('Test <TodoList />', () => {
  const handleDelete = jest.fn()
  const handleToggle = jest.fn()

  const wrapper = shallow(
    <TodoList
      todos={ demoTodos }
      handleDelete = { handleDelete }
      handleToggle = { handleToggle }
    />
  )

  test('should show correctly', () => {
    expect( wrapper ).toMatchSnapshot()
  });

  test('should have 2 <TodosListItem />', () => {

    expect( wrapper.find('TodoListItem').length ).toBe( demoTodos.length );

  });

  test('should have functional props en TodoListItem', () => {

    expect( wrapper.find('TodoListItem').at(0).prop('handleDelete') ).toEqual( expect.any(Function) )
    expect( wrapper.find('TodoListItem').at(0).prop('handleToggle') ).toEqual( expect.any(Function) )

  });
});
