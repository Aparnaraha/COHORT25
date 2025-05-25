document.getElementById('btn').addEventListener('click', () => {
    location.href = 'https://www.google.com';
 // location.reload();
});

document.getElementById('fwd').addEventListener('click', () => {
 history.forward();
});

document.getElementById('bwd').addEventListener('click', () => {
 history.back();
});

// user agent
console.log(`device info: ${navigator.userAgent}`)

// screen
console.log(`screen.width: ${screen.width}`)
console.log(`screen.height: ${screen.height}`)
