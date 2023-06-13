function sendRequest(url, formData) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('POST', url);
      xhr.upload.onprogress = (event) => {
        const percentCompleted = (event.loaded / event.total) * 100;
        progress.value = percentCompleted;
      };
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
      xhr.send(formData);
    });
  }
  
  
  function handleSubmit(event) {
    event.preventDefault();
    const fileInput = document.querySelector('input[type="file"]');
    const formData = new FormData();
    formData.append('file', fileInput.files[0]);
    const apiUrl = 'https://students.netoservices.ru/nestjs-backend/upload';
    sendRequest(apiUrl, formData)
      .then(response => console.log(response))
      .catch(error => console.log(error));
  }
  
  
  const progress = document.getElementById('progress');
  const formElement = document.querySelector('form');
  formElement.addEventListener('submit', handleSubmit);