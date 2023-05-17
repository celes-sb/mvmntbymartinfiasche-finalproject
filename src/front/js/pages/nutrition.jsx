import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/home.css";
import WithAuth from "../component/Auth/withAuth";


export const Nutrition = () => {
    const { store, actions } = useContext(Context);
    const [userInput, setUserInput] = useState("");
    const [response, setResponse] = useState("");
    const videoUltraprocesados = "https://drive.google.com/file/d/1tcbBtUmk1nTFPHHAMLKD7V2w7G0MHgMz/preview";
    const mayonesaZanahoria = "https://drive.google.com/file/d/1NMnrpXEBq6PjlWSY3HeJcO_Q72THRp85/preview";

    return (<>
        <div className="backofficeWelcome1 jumbotron m-3">
            <h1 className="display-4">Nutrición</h1>
            <p className="lead">De la mano de Gisela Baiardo (nutricionista especializada en deporte) aprendemos a nutrir a nuestro cuerpo para que no sólo rinda mejor a la hora de entrenar sino que esté saludable y con energía para todas las actividades del día.<br />
                Aquí se irán subiendo recetas y videos informativos.</p>
            <hr className="my-4" />
            <div className="nutricion-content text-center">
                <h3>Aprendiendo sobre nutrición</h3>
                <br />
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item border border-primary" src={videoUltraprocesados} allow="autoplay"></iframe>
                </div>
                <br />
                <br />
                <h3>Receta para hacer en casa</h3>
                <br />
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item border border-primary" src={mayonesaZanahoria} allow="autoplay"></iframe>
                </div>
            </div>
        </div>
    </>)
}

export default WithAuth(Nutrition)

 {/*const sendMessage = () => {
        fetch("api/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ prompt: userInput }),
        })
            .then((response) => response.json())
            .then((data) => {
                setResponse(data.message);
            })
            .catch((error) => {
                console.error(error);
            });
    };*/}

                {/* <div className="chat-container">
                    <h3>Chat</h3>
                    <div className="chat-messages">

                        {response && <div className="chat-response">{response}</div>}
                    </div>
                    <div className="chat-input">

                        <input type="text" value={userInput} onChange={(e) => setUserInput(e.target.value)} />

                        <button onClick={sendMessage}>Enviar</button>
                    </div>
    </div>*/}
