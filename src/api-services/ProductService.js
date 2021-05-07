import axios from "axios";

const PRODUCT_API_BASE_URL = "https://finman-api.herokuapp.com/api/products/";

class ProductService {
  createProduct(product) {
    return axios.post(PRODUCT_API_BASE_URL, product);
  }

  getProducts(email) {
    return axios.get(PRODUCT_API_BASE_URL + email, {
      validateStatus: function (status) {
        return status < 400; // Resolve only if the status code is less than 400
      },
    });
  }

  deleteProduct(ownerId, itemName) {
    return axios.delete(PRODUCT_API_BASE_URL + ownerId + "/" + itemName);
  }
}

export default new ProductService();
