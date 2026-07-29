import axios from 'axios';
import {
  fetchCategory,
  login,
  orderProduct,
  register,
  searchProduct,
} from './fetchApi';

jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('fetchApi', () => {
  let consoleError: jest.SpyInstance;

  beforeEach(() => {
    jest.clearAllMocks();
    window.localStorage.clear();
    consoleError = jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleError.mockRestore();
  });

  describe('fetchCategory', () => {
    it('returns the parsed category payload', async () => {
      const json = jest.fn().mockResolvedValue([{ category_id: 1 }]);
      global.fetch = jest.fn().mockResolvedValue({ json }) as never;

      await expect(fetchCategory()).resolves.toEqual([{ category_id: 1 }]);
      expect(global.fetch).toHaveBeenCalledWith(
        'http://localhost:8080/category',
      );
    });

    it('swallows category fetch errors', async () => {
      global.fetch = jest.fn().mockRejectedValue(new Error('down')) as never;

      await expect(fetchCategory()).resolves.toBeUndefined();
      expect(consoleError).toHaveBeenCalled();
    });
  });

  describe('login', () => {
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

    it('swallows login errors', async () => {
      mockedAxios.post.mockRejectedValue(new Error('network'));

      await expect(login({ email: 'a', password: 'b' })).resolves.toBeUndefined();
      expect(consoleError).toHaveBeenCalled();
    });
  });

  describe('register', () => {
    it('posts registration payload directly', async () => {
      mockedAxios.post.mockResolvedValue({ data: { user_id: 1 } });

      await register({ email: 'user@example.com' });

      expect(mockedAxios.post).toHaveBeenCalledWith(
        'http://localhost:8080/auth/register',
        { email: 'user@example.com' },
      );
    });

    it('swallows registration errors', async () => {
      mockedAxios.post.mockRejectedValue(new Error('network'));

      await expect(register({ email: 'a' })).resolves.toBeUndefined();
      expect(consoleError).toHaveBeenCalled();
    });
  });

  describe('searchProduct', () => {
    it('encodes search terms and normalizes blank pages', async () => {
      mockedAxios.get.mockResolvedValue({ data: { data: [] } });

      await searchProduct('ga ran', 0);

      expect(mockedAxios.get).toHaveBeenCalledWith(
        'http://localhost:8080/product/search?name=ga%20ran&page=1',
      );
    });

    it('uses the provided page when set', async () => {
      mockedAxios.get.mockResolvedValue({ data: { data: [] } });

      await searchProduct('pho', 3);

      expect(mockedAxios.get).toHaveBeenCalledWith(
        'http://localhost:8080/product/search?name=pho&page=3',
      );
    });

    it('swallows search errors', async () => {
      mockedAxios.get.mockRejectedValue(new Error('network'));

      await expect(searchProduct('pho', 1)).resolves.toBeUndefined();
      expect(consoleError).toHaveBeenCalled();
    });
  });

  describe('orderProduct', () => {
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

    it('omits the token header when not logged in', async () => {
      mockedAxios.post.mockResolvedValue({ data: {} });

      await orderProduct({ list_product: [] });

      expect(mockedAxios.post).toHaveBeenLastCalledWith(
        'http://localhost:8080/order/order',
        { list_product: [] },
        { headers: {} },
      );
    });

    it('swallows order errors', async () => {
      mockedAxios.post.mockRejectedValue(new Error('network'));

      await expect(orderProduct({})).resolves.toBeUndefined();
      expect(consoleError).toHaveBeenCalled();
    });
  });

  describe('base URL configuration', () => {
    it('honors a custom NEXT_PUBLIC_API_URL', async () => {
      process.env.NEXT_PUBLIC_API_URL = 'https://api.baemin.test';
      let api: typeof import('./fetchApi');
      jest.isolateModules(() => {
        api = require('./fetchApi');
      });
      mockedAxios.post.mockResolvedValue({ data: 'ok' });

      await api!.login({ email: 'a', password: 'b' });

      expect(mockedAxios.post).toHaveBeenCalledWith(
        'https://api.baemin.test/auth/login',
        { email: 'a', password: 'b' },
      );
      delete process.env.NEXT_PUBLIC_API_URL;
    });
  });
});
