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
			<div className="nav">
				<div className="container">
					<div className="logo">
						<img src={logoMartin} alt="Logo" style={{ width: "100px" }} />
						<h1>MVMNT</h1>
					</div>
					<div className="list" id="myLinks">
						<ul>
							<li>
								<a href="#">Inicio</a>
							</li>
							<li>
								<a href="#">Nosotros</a>
							</li>
							<li>
								<a href="#">Planes</a>
							</li>
							<li>
								<a href="#">Testimonios</a>
							</li>
							<li>
								<a href="#">Equipo</a>
							</li>
						</ul>
					</div>
					<div>
						<button type="button">Iniciar Sesión</button>
					</div>
					<a
						href="javascript:void(0);"
						className="humb-menu"
						onClick={myFunction}
					>
						<i className="fa fa-bars"></i>
					</a>
				</div>
			</div>
		</>
	);
};
