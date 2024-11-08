const Footer = () => {
	return (
		<section className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
			<div className="text-white-500 flex gap-2">
				<p>Juan D. Rojas</p>
				<p>|</p>
				<p>Web Developer</p>
			</div>
			<div className="flex gap-3">
				<div className="social-icon">
					<a href="" className="w-1/2 h-1/2">
						<img src="/assets/github.svg" alt="github" />
					</a>
				</div>
				<div className="social-icon">
					<a href="" className="w-1/2 h-1/2">
						<img src="/assets/instagram.svg" alt="github" />
					</a>
				</div>
			</div>
		</section>
	);
};

export default Footer;
