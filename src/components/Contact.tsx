import { useEffect } from 'react';
import $ from 'jquery';
const Contact = () => {
	//DOM manipulation
	let count = 0;
	useEffect(() => {
		if (count == 0) {
			document
				.querySelector('a[class="button"')
				?.addEventListener('mouseover', function (elem) {
					const that = elem.target as HTMLLinkElement;
					console.log(that);
					if (that !== null) {
						that.setAttribute('style', 'background-color: #19b3b5');
					}
				});
			document
				.querySelector('a[class="button"')
				?.addEventListener('mouseout', function (elem) {
					const that = elem.target as HTMLLinkElement;

					if (that !== null) {
						that.setAttribute('style', 'background-color:  #86fbfb ');
					}
				});
			$('a[class="button"').click(function () {
				const that = document.querySelector('section#contact');
				const element = document.createElement('p');
				element.textContent = 'Thank you!!!';
				that?.appendChild(element);
				setTimeout(() => {
					that?.removeChild(element);
				}, 2000);
			});
		}
		count++;
	}, []);

	return (
		<div className="section-apple">
			<section id="contact">
				<h2>Contact me</h2>
				<p>I&apos;m always interested in hearing about new job opportunities.</p>
				<p>
					<a href="mailto:mihaildanilov793@gmail.com" className="button">
						Email me
					</a>
				</p>
			</section>
		</div>
	);
};

export default Contact;
