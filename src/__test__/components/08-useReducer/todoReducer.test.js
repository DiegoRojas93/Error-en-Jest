import '@testing-library/jest-dom';
import { todoReducer } from '../../../components/08-useReducer/todoReducer';
import { demoTodos } from '../../fixtures/demoTodos';

describe('Test todoReducer', () => {
  test('should return the default state', () => {

    const state = todoReducer(demoTodos, {})

    expect( state ).toEqual(demoTodos)

  });

  test('should add a new todo', () => {
    const action = {
      type: 'add',
      payload: {
        id: 3,
        desc: 'Learn TypeScript',
        done: false
      }
    }

    const state = todoReducer(demoTodos, action)

    expect( state.length ).toBe(3)
    expect( state ).toEqual([ ...demoTodos, action.payload ])

  });

  test('should remove a todo', () => {
    const action = {
      type: 'delete',
      payload: 2
    }

    const state = todoReducer(demoTodos, action)

    expect( state.length ).toBe(1)
    expect( state ).toEqual( [demoTodos[0]] )

  });

  test('should do a toggle', () => {
    const action = {
      type: 'toggle',
      payload: 2
    }

    const state = todoReducer(demoTodos, action)

    expect( state[1].done ).toBe(true)
    expect( state[2] ).toEqual( demoTodos[2] )

  });

});