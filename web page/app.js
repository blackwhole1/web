if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/G:\web devlopment\progresive web page.json')
    .then(registration => {
        console.log('Service Worker registered with scope:', registration.scope);
    })
    .catch(error => {
        console.log('Service Worker registration failed:', error);
    });
}
