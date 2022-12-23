const express = require("express");
app = express();

let products = [
    {
        id: 1,
        name: "Apple",
        weight: 1000
    },
    {
        id: 2,
        name: "Phone",
        weight: 1200
    },
    {
        id: 3,
        name: "Laptop",
        weight: 700
    }
];
let productId = 3;

app.get("/products", (req, res) => {
    res.send(products);
});

app.get("/products/:id", (req, res) => {
    const id = +req.params.id;
    let findProduct = products.find(product => product.id === id);
    if (!findProduct) {
        res.status("404");
    }
    res.send(findProduct);
});

app.listen(3000, () => console.log("App listen port 3000"));