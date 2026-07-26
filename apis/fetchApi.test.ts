import axios from 'axios';
import { login, orderProduct, register, searchProduct } from './fetchApi';

jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('fetchApi', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    window.localStorage.clear();
  });

  it('posts login payload directly', async () => {
    mockedAxios.post.mockResolvedValue({ data: 'jwt-token' });

    await expect(
      login({ email: 'user@example.com', password: 'secret' }),
    ).resolves.toBe('jwt-token');

    expect(mockedAxios.post).toHaveBeenCalledWith(
      'http://localhost:8080/auth/login',
      { email: 'user@example.com', password: 'secret' },
    );
  });

  it('posts registration payload directly', async () => {
    mockedAxios.post.mockResolvedValue({ data: { user_id: 1 } });

    await register({ email: 'user@example.com' });

    expect(mockedAxios.post).toHaveBeenCalledWith(
      'http://localhost:8080/auth/register',
      { email: 'user@example.com' },
    );
  });

  it('encodes search terms and normalizes blank pages', async () => {
    mockedAxios.get.mockResolvedValue({ data: { data: [] } });

    await searchProduct('ga ran', 0);

    expect(mockedAxios.get).toHaveBeenCalledWith(
      'http://localhost:8080/product/search?name=ga%20ran&page=1',
    );
  });

  it('sends order token headers when available', async () => {
    window.localStorage.setItem('token', 'jwt-token');
    mockedAxios.post.mockResolvedValue({ data: { order_id: 1 } });

    await orderProduct({ list_product: [] });

    expect(mockedAxios.post).toHaveBeenCalledWith(
      'http://localhost:8080/order/order',
      { list_product: [] },
      { headers: { token: 'Bearer jwt-token' } },
    );
  });
});
