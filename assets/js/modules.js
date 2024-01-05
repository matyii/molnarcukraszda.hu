function loadModule(filePath, elementId) {
  fetch(filePath)
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch');
      }
      return response.text();
    })
    .then(html => {
      document.getElementById(elementId).innerHTML = html;
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

loadModule('modules/navbar.html', 'navbar-module');
loadModule('modules/shopbuttons.html', 'shopbuttons-module');