// Singurul loc care comunică cu API-ul. Componentele nu apelează fetch direct.

const API_URL = "https://fakestoreapi.com/products";

async function request(url) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Error ${response.status}: request failed`);
  }

  return response.json();
}

export function getProducts() {
  return request(API_URL);
}

export async function getProductById(id) {
  const product = await request(`${API_URL}/${id}`);

  // Pentru un id inexistent, API-ul poate răspunde cu un corp gol
  if (!product || !product.id) {
    throw new Error("Product not found");
  }

  return product;
}
