import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { PayPalButton } from "react-paypal-button-v2";


const alumnoPalos =
    "http://drive.google.com/uc?export=view&id=1uoqtCrQmFyAN2uHUzNR83d1APTfghA2z";

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

export function Pay() {
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
        <><section
            className="container-fluid customer-says p-5 mb-0 mt-5 pt-5 border border-warning rounded"
            style={{
                backgroundImage: `url(${alumnoPalos})`,
                backgroundSize: "100% cover",
            }}
        >
            <div className="container mb-3 border border-warning bg-white bg-opacity-75 rounded p-5 text-center">
                <div className="top mb-4">

                    <div className="App">
                        <h1>VALOR A PAGAR: {price}</h1>
                        <br></br>



                        <select value={opcion} onChange={handleSelectChange}>
                            <option value="5">Programa para Extranjeros</option>
                            <option value="20">Programa para Residentes </option>
                            <option value="30">Workshops</option>
                        </select>
                        <br></br>
                        <br></br>

                        {opcion === "other" && (
                            <input
                                type="text"
                                onChange={handleInputChange}
                                value={inputPrice}
                                style={{ margin: 20 }} />
                        )}

                        <PayPalButton
                            createOrder={(data, actions) => createOrder(data, actions)}
                            onApprove={(data, actions) => onApprove(data, actions)} />
                    </div></div></div>
        </section></>
    );
}

export default Pay;