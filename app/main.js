import Contact from './Contact';
import '../style/main.scss';

let app = new Contact();
document.addEventListener('deviceready', app.start, false);

