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
  // if (!checkingNickname) {
  //   alert('사용 가능 닉네임입니다.');
  // } else if (checkingNickname) {
  //   alert('이미 사용중인 닉네임입니다.');
  // } else {
  //   axios
  //     .fetch('/signUp', {
  //       data,
  //     })
  //     .then((res) => console.log(res));
  //   window.location = '/';
});
