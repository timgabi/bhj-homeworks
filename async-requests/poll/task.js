function sendRequest(method, url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.responseType = 'json';
    xhr.onload = () => {
      if (xhr.status >= 400) {
        reject(xhr.response);
      } else {
        resolve(xhr.response);
      }
    };
    xhr.onerror = () => {
      reject(xhr.response);
    };
    xhr.send();
  });
}

function loadPoll() {
  const apiUrl = 'https://students.netoservices.ru/nestjs-backend/poll';
  sendRequest('GET', apiUrl)
    .then(response => {
      const title = response.data.title;
      const answers = response.data.answers;
      const pollTitle = document.querySelector('#poll__title');
      const pollAnswers = document.querySelector('#poll__answers');
      pollTitle.textContent = title;
      answers.forEach(answer => {
        const button = document.createElement('button');
        button.classList.add('poll__answer');
        button.textContent = answer;
        button.addEventListener('click', () => {
          alert('Спасибо, ваш голос засчитан!');
        });
        pollAnswers.appendChild(button);
      });
    })
    .catch(error => console.log(error));
}

loadPoll();