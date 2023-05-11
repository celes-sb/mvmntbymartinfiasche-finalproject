import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { PayPalButton } from "react-paypal-button-v2";

const createOrder = (data, actions) => {
    // Order is created on the server and the order id is returned
    return fetch("/my-server/create-paypal-order", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        // use the "body" param to optionally pass additional order information
        // like product skus and quantities
        body: JSON.stringify({
            cart: [
                {
                    sku: "YOUR_PRODUCT_STOCK_KEEPING_UNIT",
                    quantity: "YOUR_PRODUCT_QUANTITY",
                },
            ],
        }),
    })
        .then((response) => response.json())
        .then((order) => order.id);
};

function App() {
    const [price, setPrice] = useState(0);
    const [opcion, setOpcion] = useState("5");
    const [inputPrice, setInputPrice] = useState(price);

    useEffect(() => {
        if (opcion !== "other") {
            setPrice(Number(opcion));
        }
    }, [opcion]);

    useEffect(() => {
        setInputPrice(price);
    }, [price]);

    const onApprove = (data, actions) => {
        // Order is captured on the server
        return fetch("/my-server/capture-paypal-order", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                orderID: data.orderID,
            }),
        })
            .then((response) => response.json());
    };

    const handleInputChange = (e) => {
        setInputPrice(Number(e.target.value));
    };

    const handleSelectChange = (e) => {
        setOpcion(e.target.value);
    };

    return (
        <div className="App">
            <h1>El monto es: {price}</h1>
            <input type="text" onChange={handleInputChange} value={inputPrice} />

            <select value={opcion} onChange={handleSelectChange}>
                <option value="5">Cinco dólares</option>
                <option value="20">Veinte dólares</option>
                <option value="30">Treinta dólares</option>
                <option value="other">Otro monto</option>
            </select>

            {opcion === "other" && (
                <input
                    type="text"
                    onChange={handleInputChange}
                    value={inputPrice}
                    style={{ margin: 20 }}
                />
            )}

            <PayPalButton
                createOrder={(data, actions) => createOrder(data, actions)} // Utilizar la función importada
                onApprove={(data, actions) => onApprove(data, actions)}
            />
        </div>
    );
}

export default A;