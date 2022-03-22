import axios from "axios";

try {
    const url = newFunction();
    const response = await axios.get(url);
    console.log(response);
} catch (error) {
    console.log("Failed to fetch products: ", error);
}

function newFunction() {
    return "https://js-post-api.herokuapp.com/api/products?_limit=10&_page=1";
}