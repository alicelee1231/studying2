document.getElementById('getWrite').addEventListener('click', () => {
  axios
    .post('/write', {})
    .then(function (response) {
      window.location = '/write';
      console.log('여기다');
    })
    .catch(function (error) {
      if (error) {
        alert(error.response.data.message);
        window.location = '/login';
      }
    });
});
