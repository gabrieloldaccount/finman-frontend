import axios from "axios";

const CUSTOMER_API_BASE_URL = "https://finman-api.herokuapp.com/api/customer/";

class CustomerService {
    createCustomer(product) {
        return axios.post(CUSTOMER_API_BASE_URL, product);
    }

    getCustomers(email) {
        return axios.get(CUSTOMER_API_BASE_URL + email, {
            validateStatus: function (status) {
                return status < 400; // Resolve only if the status code is less than 400
            },
        });
    }

    deleteCustomer(ownerId, customerName) {
        return axios.delete(CUSTOMER_API_BASE_URL + ownerId + "/" + customerName);
    }
}

export default new CustomerService();
