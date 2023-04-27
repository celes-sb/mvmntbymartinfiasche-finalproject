import React, { Component } from "react";
import emailIcon from "../../images/email-icon.png";
import phoneIcon from "../../images/phone-icon.png";
import instagram from "../../images/instagram.png";
import twitter from "../../images/twitter.png";
import facebook from "../../images/facebook.png";

export const Footer = () => (
	<footer className="footer mt-5 pb-1 text-light text-center">
		<div className="container-fluid">
			<div className="footer-content pb-3 pt-3 mt-5">
				<div className="get-in-touch">
					<h4>Contacto</h4>
					<span className="mrg mb-5 w-100">
						<img src={emailIcon} alt="Icono Mail" />
						<p>info@martinfiasche.com.ar</p>
					</span>
					<span>
						<img src={phoneIcon} alt="Icono Teléfono" />
						<p>+54 9 11 4187-4865</p>
					</span>
				</div>
				<div className="social-media">
					<h4>Redes Sociales</h4>
					<div>
						<a href="https://www.instagram.com/martinfiasche/" target="_blank">
							<img src={instagram} alt="Logo Instagram" />
						</a>
						<a href="https://www.facebook.com/fiaschemartin/" target="_blank">
							<img src={facebook} alt="Logo Facebook" />
						</a>
					</div>
				</div>
				<div className="newsletter">
					<h4>Suscribite al Newsletter</h4>
					<label for="email-sec">Correo Electrónico</label>
					<input
						className="test"
						type="email"
						id="email-sec"
						name="email"
						placeholder="Enter your email"
					/>
					<button type="submit">Subscribirse</button>
				</div>
			</div>
			<p>
				Made with love<i className="fa fa-heart text-danger" /> {" "}
				<a>by los mejores</a>
			</p>
		</div>
	</footer>
);
