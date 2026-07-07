const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

function addChapter() {
  if (input.value.trim() !== '') {
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');

    li.textContent = input.value.trim();
    deleteButton.textContent = '❌';
    deleteButton.setAttribute('aria-label', `Remove ${input.value.trim()}`);
    deleteButton.addEventListener('click', function () {
      list.removeChild(li);
      input.focus();
    });

    li.append(deleteButton);
    list.append(li);
    input.value = '';
    input.focus();
  } else {
    input.focus();
  }
}

button.addEventListener('click', addChapter);
