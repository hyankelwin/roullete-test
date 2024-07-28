
window.onload = async function() {
    let link = document.createElement('link');
     
    link.rel = 'stylesheet';
    
    link.type = 'text/css';
    
    link.href = 'style.css';

    document.getElementsByTagName('HEAD')[0].appendChild(link);
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM completamente carregado e analisado');
    console.log('aquii')
    console.log('document.getElementsByName()', document.getElementsByTagName('body'))
    const body = document.getElementsByTagName('body')[0];

    var container = document.createElement("div");
        container.classList.add('kodex-container')
    
    body.appendChild(container)
  });