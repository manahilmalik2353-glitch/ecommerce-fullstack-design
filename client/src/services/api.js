const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

function getStoredUser() {
  const user = localStorage.getItem("smartshop_user");
  return user ? JSON.parse(user) : null;
}

function getToken() {
  const user = getStoredUser();
  return user?.token;
}

async function request(url, options = {}) {
  const token = getToken();

  const response = await fetch(`${API_BASE_URL}${url}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...options.headers,
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong");
  }

  return data;
}

export async function getProducts(params = {}) {
  const query = new URLSearchParams();

  if (params.search) query.append("search", params.search);

  if (params.category && params.category !== "All") {
    query.append("category", params.category);
  }

  const queryString = query.toString();

  return request(`/products${queryString ? `?${queryString}` : ""}`);
}

export async function getProductById(id) {
  return request(`/products/${id}`);
}

export async function signupUser(userData) {
  return request("/auth/signup", {
    method: "POST",
    body: JSON.stringify(userData),
  });
}

export async function loginUser(userData) {
  return request("/auth/login", {
    method: "POST",
    body: JSON.stringify(userData),
  });
}

export async function createProduct(productData) {
  return request("/products", {
    method: "POST",
    body: JSON.stringify(productData),
  });
}

export async function updateProduct(id, productData) {
  return request(`/products/${id}`, {
    method: "PUT",
    body: JSON.stringify(productData),
  });
}

export async function deleteProduct(id) {
  return request(`/products/${id}`, {
    method: "DELETE",
  });
}