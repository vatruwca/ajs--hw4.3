import fetchData from '../fetchData';
import getLevel from '../mocking';

jest.mock('../fetchData');

beforeEach(() => {
  jest.resetAllMocks();
});
test('', () => {
  fetchData.mockReturnValue('Mock this!');
  const result = getLevel(1);
  expect(result).toEqual('Информация об уровне временно недоступна');
  expect(fetchData).toBeCalledWith('https://server/user/1');
});
