function add() {
  const title = document.getElementById('title').value;
  const content = document.getElementById('content').value;
  const areas = document.getElementById('areas');
  const area = areas.options[areas.selectedIndex].value;
  const type = document.getElementById('type');
  const sort = type.options[type.selectedIndex].value;
  const period = document.getElementById('period').value;
  const goal = document.getElementById('goal').value;
  const nickname = document.getElementById('nickname').value;

  axios.post('/usage', {
    area,
    title,
    content,
    sort,
    period,
    goal,
    nickname,
  });

  fetch('/usage').then(function () {
    window.location = '/usage';
  });
}
function cancelWrite() {
  window.location = '/usage';
}
