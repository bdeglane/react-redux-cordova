import Contact from './Contact';
import '../style/main.scss';

let app = new Contact();

if (window.location.protocol === 'file:') {
	document.addEventListener('deviceready', app.start, false);
} else {
	app.start();
}