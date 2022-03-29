import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { demoTodos } from '../../fixtures/demoTodos';
import { TodoListItem } from '../../../components/08-useReducer/TodoListItem';


describe('Test <TodoListItem />', () => {
  const handleDelete = jest.fn()
  const handleToggle = jest.fn()

  const wrapper = shallow(
    <TodoListItem
      todo={demoTodos[0]}
      index={0}
      handleDelete={ handleDelete }
      handleToggle={ handleToggle }
    />
  )

  test('should show correctly', () => {
    expect( wrapper ).toMatchSnapshot()
  });

  test('should call the function handleDelete', () => {
    wrapper.find('button').simulate('click')
    expect(handleDelete).toHaveBeenCalledWith(demoTodos[0].id)
  });

  test('should call the function handleToggle', () => {
    wrapper.find('p').simulate('click')
    expect(handleToggle).toHaveBeenCalledWith(demoTodos[0].id)
  });

  test('should show the text correctly', () => {
    const p = wrapper.find('p')
    expect( p.text().trim() ).toBe(`${ 1 }. ${ demoTodos[0].desc }`)
  });

  test('should have the class complete if the todo.done = true', () => {

    const todo = demoTodos[0]
    todo.done = true
    const wrapper = shallow( <TodoListItem todo={todo}/> )

    expect( wrapper.find('p').hasClass('complete') ).toBe(true)
  });

});