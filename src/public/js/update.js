let name1;
if (document.getElementById('updateName1'))
  name1 = document.getElementById('updateName1').innerText;
const name2 = document.getElementById('updateName2').value;

if (name1 !== name2 || !name1) {
  alert('유저 정보가 올바르지 않습니다.');
  window.location = '/usage?id=1';
}

function modify() {
  const title = document.getElementById('title').value;
  const content = document.getElementById('content').value;
  const type = document.getElementById('type');
  const sort = type.options[type.selectedIndex].value;
  const period = document.getElementById('period').value;
  const goal = document.getElementById('goal').value;
  const id = document.getElementById('idid').value;

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
}
