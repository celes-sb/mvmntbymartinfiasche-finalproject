import React, { Component } from "react";
//dejo este whatsapp component acá porque capaz podés usarlo para agregar el chat bot
const Whatsapp = () => {
	const whatsappUrl = "https://wa.me/5491141874865";
	const message = "Escribime!";
	return (
		<a href={`${whatsappUrl}?text=${message}`} target="_blank">
			<button type="button" className="btn btn-success btn-floating mx-1">
				<i className="fab fa-whatsapp"></i>
			</button>
		</a>
	);
};

export const Footer = () => (
	<div className="container-fluid py-3 my-4">
		<footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
			<div className="col-md-4 d-flex align-items-center">
				<a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"></a>
				<span className="mb-3 mb-md-0 text-muted">© 2023 Martín Fiasche</span>
			</div>

			<ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
				<li className="ms-3">
					<a href="https://www.facebook.com/fiaschemartin/" target="_blank">
						<button type="button" className="btn btn-secondary btn-floating mx-1">
							<i className="fab fa-facebook-f"></i>
						</button>
					</a>
				</li>
				<li className="ms-3">
					<a href="https://www.youtube.com/channel/UC7XbMLLx9REfnW3ZAyvGGyQ" target="_blank">
						<button type="button" className="btn btn-secondary btn-floating mx-1">
							<i className="fab fa-youtube"></i>
						</button>
					</a>
				</li>
				<li className="ms-3">
					<a href="https://www.instagram.com/martinfiasche/" target="_blank">
						<button type="button" className="btn btn-secondary btn-floating mx-1">
							<i className="fab fa-instagram"></i>
						</button>
					</a>
				</li>
				<li className="ms-3">
					<a href="mailto:info@martinfiasche.com.ar" target="_blank">
						<button type="button" className="btn btn-secondary btn-floating mx-1">
							<i className="fas fa-envelope"></i>
						</button>
					</a>
				</li>
				<li className="ms-3">
					<Whatsapp />
				</li>
			</ul>
		</footer>
		<p className="mb-1 mb-md-0 text-muted fs-6 text-center">
			Made with love <i className="fa fa-heart text-danger" /> {" "}
			<a>by 4Geeks Students: Celeste, David, Juan & Sebastián</a>
		</p>
	</div>
);

