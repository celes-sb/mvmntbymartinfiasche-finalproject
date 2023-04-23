import React from "react";
import { Link } from "react-router-dom";
import logoMartin from "../../images/Logo-martin.png";

export const Navbar = () => {
	function myFunction() {
		var x = document.getElementById("myLinks");
		if (x.style.display === "block") {
			x.style.display = "none";
		} else {
			x.style.display = "block";
		}
	}

	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-light bg-light rounded border m-3">
				<div className="logo">
					<img src={logoMartin} alt="Martin Fiasche Logo" style={{ width: "250px" }} />
				</div>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item active">
							<a className="nav-link badge badge-pill badge-success text-dark" href="#">Inicio <span className="sr-only">(current)</span></a>
						</li>
						<li className="nav-item">
							<a className="nav-link badge badge-pill badge-dark text-dark" href="#">Sobre mí</a>
						</li>
						<li className="nav-item">
							<a className="nav-link badge badge-pill badge-dark text-dark" href="#">Testimonios</a>
						</li>
						<li className="nav-item">
							<a className="nav-link badge badge-pill badge-dark text-dark" href="#">Individualizado</a>
						</li>
						<li className="nav-item">
							<a className="nav-link badge badge-pill badge-dark text-dark" href="#">Movimiento</a>
						</li>
						<li className="nav-item">
							<a className="nav-link badge badge-pill badge-dark text-dark" href="#">Acrobacia</a>
						</li>
						<li className="nav-item">
							<a className="nav-link badge badge-pill badge-dark text-dark" href="#">Eventos</a>
						</li>
						<li className="nav-item">
							<a className="nav-link badge badge-pill badge-dark text-dark" href="#">Redes Sociales</a>
						</li>
						<li className="nav-item">
							<a className="nav-link badge badge-pill badge-dark text-dark" href="#">Escribime</a>
						</li>
					</ul>
					<div>
						<button type="button" className="btn btn-sm btn-warning">Iniciar Sesión /link a login</button>
					</div>
				</div>
			</nav>
		</>
	);
};