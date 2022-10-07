function modify() {
  const title = document.getElementById('title').value;
  const content = document.getElementById('content').value;
  const type = document.getElementById('type');
  const sort = type.options[type.selectedIndex].value;
  const period = document.getElementById('period').value;
  const goal = document.getElementById('goal').value;
  const id = document.getElementById('idid').value;
  const updateName1 = document.getElementById('updateName1').innerText;
  const updateName2 = document.getElementById('updateName2').value;

  if (updateName1 === updateName2) {
    axios
      .put('/update', {
        id,
        title,
        content,
        sort,
        period,
        goal,
      })
      .then(function () {
        window.location = '/usage';
      });
  } else {
    alert('글쓴이만 수정 할 수 있습니다.');
  }
}
