var head = document.head;
head.setAttribute('dir', 'rtl');

var link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = window.config.nova_rtl_theme.stylesheet;
head.appendChild(link);

var style = document.createElement('style');
style.type = 'text/css';
var css = 'html, button, input, optgroup, select, textarea, .chartist-tooltip, .font-sans, .font-serif {' +
    'font-family: ' + window.config.nova_rtl_theme.font_family + ';' +
    '}';
style.appendChild(document.createTextNode(css));
head.appendChild(style);
