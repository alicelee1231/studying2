function signUp() {
  const nickname = document.getElementById('nickname').value;
  const email = document.getElementById('email').value;
  const pwd = document.getElementById('pwd').value;
  const phone = document.getElementById('phone').value;

  axios
    .post('/signUp', {
      nickname,
      email,
      pwd,
      phone,
    })
    .then((res) => {
      div.innerText = res.data.nickname;
      div.innerText = res.data.email;
      div.innerText = res.data.pwd;
      div.innerText = res.data.phone;
    });

  fetch('/login').then(function () {
    window.location = '/login';
  });
}

document.getElementById('id_request').addEventListener('click', () => {
  checkingNickname = document.getElementById('id_request').value;
  axios //
    .fetch('/signUp', {
      nickname,
    });
  fetch('/signUp').then(function () {
    window.location = '/singUp';
  });
});
