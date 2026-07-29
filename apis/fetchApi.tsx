import axios from "axios";

const url = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080";

const authHeaders = () => {
  /* istanbul ignore next -- SSR-only guard, unreachable in the jsdom test env */
  if (typeof window === "undefined") {
    return {};
  }

  const token = window.localStorage.getItem("token");
  return token ? { token: `Bearer ${token}` } : {};
};

export const fetchCategory = async () => {
  try {
    const response = await fetch(`${url}/category`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data: ", error);
  }
};
export const login = async (data: any) => {
  try {
    const response = await axios.post(`${url}/auth/login`, data);
    const result = await response.data;
    return result;
  } catch (error) {
    console.error("Error fetching data: ", error);
  }
};
export const register = async (data: any) => {
  try {
    const response = await axios.post(`${url}/auth/register`, data);
    const result = await response.data;
    return result;
  } catch (error) {
    console.error("Error fetching data: ", error);
  }
};
export const searchProduct = async (name: string, page: number) => {
  try {
    const response = await axios.get(
      `${url}/product/search?name=${encodeURIComponent(name)}&page=${page || 1}`
    );
    const result = await response.data;
    return result;
  } catch (error) {
    console.error("Error fetching data: ", error);
  }
};
export const orderProduct = async (data: any) => {
  try {
    const response = await axios.post(`${url}/order/order`, data, {
      headers: authHeaders(),
    });
    const result = await response.data;
    return result;
  } catch (error) {
    console.error("Error fetching data: ", error);
  }
};
