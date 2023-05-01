import React, { Component } from "react";

export const Footer = () => (
	<footer className="footer mt-5 pb-1 text-center">
		<div className="container-fluid">
			<div className="footer-content pb-3 pt-3 mt-5">
				<div className="get-in-touch">
					<h4>Contacto</h4>
					<span className="mrg mb-5 w-100">
						<p>info@martinfiasche.com.ar</p>
					</span>
					<span>
						<p>+54 9 11 4187-4865</p>
					</span>
				</div>
				<div className="social-media">
					<h4>Seguime en:</h4>
					<div className="text-center mb-3">
						<a href="https://www.instagram.com/martinfiasche/" target="_blank">
							<button type="button" className="btn btn-secondary btn-floating mx-1">
								<i className="fab fa-facebook-f"></i>
							</button>
						</a>
						<a href="https://www.instagram.com/martinfiasche/" target="_blank">
							<button type="button" className="btn btn-secondary btn-floating mx-1">
								<i className="fab fa-instagram"></i>
							</button>
						</a>
					</div>
				</div>
			</div>
			<p>
				Made with love<i className="fa fa-heart text-danger" /> {" "}
				<a>by los mejores</a>
			</p>
		</div>
	</footer>
);
