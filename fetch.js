import fetch from "node-fetch";
async function myFunc() {
    try {
        const url = "https://js-post-api.herokuapp.com/api/products?_limit=10&_page=1";
        const response = await fetch(url);
        const responseJSON = await response.json();
        console.log(responseJSON);
    } catch (error) {
        console.log("Failed to fetch products: ", error);
        console.log("ABC");
    }
}
myFunc();