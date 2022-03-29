import '@testing-library/jest-dom';
import { renderHook } from '@testing-library/react-hooks';
import { useFetch } from '../../hooks/useFetch';

describe('Test useFetch', () => {

  test('should give default information', () => {

    // const { result } = renderHook( () => useFetch('https://www.breakingbadapi.com/api/quotes/1') )

    // const { data, loading, error } = result.current

    // expect( data ).toBe(null)
    // expect( loading ).toBe(true)
    // expect( error ).toBe(null)

  });

  test('should give successful information', async () => {

    // const { result, waitForNextUpdate } = renderHook( () => useFetch("https://www.breakingbadapi.com/api/quotes/1") )

    // await waitForNextUpdate({timeout:});

    // const { data, loading, error } = result.current

    // expect( data.length ).toBe(1)
    // expect( loading ).toBe(false)
    // expect( error ).toBe(null)

  });
});