import React, { Component } from "react";
import emailIcon from "../../images/email-icon.png";
import phoneIcon from "../../images/phone-icon.png";
import instagram from "../../images/instagram.png";
import twitter from "../../images/twitter.png";
import facebook from "../../images/facebook.png";
import whiteLogo from "../../images/logo-white.png";

export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center">
		<div className="container">
			<div className="footer-content">
				<div className="logo-title">
					<img src={whiteLogo} alt="" />
					<p>
						MVMNT es un centro de entrenamiento presencial y en línea que
						combina distintas disciplinas como calistenia, weightlifting y
						movimiento.
					</p>
				</div>
				<div className="get-in-touch">
					<h4>Contacto</h4>
					<span className="mrg">
						<img src={emailIcon} alt="" />
						<p>yourmail@hello.com</p>
					</span>
					<span>
						<img src={phoneIcon} alt="" />
						<p>+1 386-688-3295</p>
					</span>
				</div>
				<div className="social-media">
					<h4>Redes Sociales</h4>
					<div>
						<a href="#">
							<img src={instagram} alt="" />
						</a>
						<a href="#">
							<img className="mrg" src={twitter} alt="" />
						</a>
						<a href="#">
							<img src={facebook} alt="" />
						</a>
					</div>
				</div>
				<div className="newsletter">
					<h4>Suscríbete al Newsletter</h4>
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
		</div>
		<p>
			Made with love<i className="fa fa-heart text-danger" /> {" "}
			<a>by los mejores</a>
		</p>
	</footer>
);
