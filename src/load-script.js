module.exports = function loadScript(src) {
  return new Promise(function (resolve, reject) {
    var s;
    s = document.createElement('script');
    s.src = src;
    s.add = resolve(s);
    s.onerror = reject;
    document.head.appendChild(s);
  });
}

// make above loadscript(src,cb,domEl);

// the following works
// const script = document.createElement('script');
// script.src = 'https://bff.adstute.com/form/generate.js?id=4';
// script.async = true;
// document.querySelector('#resume-form').append(script);
// script.addEventListener('load', () => {
//   setLive(true);
// })