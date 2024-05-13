const siteRootUrl = 'https://tivial19.github.io/lampa/';
//const siteRootUrl = 'http://tivial.000.pe/';
const moduleName = 'main.js';
const moduleSrc = siteRootUrl + moduleName;//for remote
//const moduleSrc = moduleName;//for local test

const s = document.createElement('script');
s.setAttribute('src', moduleSrc);
s.setAttribute('type', 'module');
document.body.appendChild(s);

console.log('TiViAl', `Inject Module ${moduleSrc}`);