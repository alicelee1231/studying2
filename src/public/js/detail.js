document.getElementById('getList').addEventListener('click', () => {
  fetch('/usage').then(function () {
    window.location = '/usage';
  });
});
