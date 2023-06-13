const loader = document.getElementById('loader');
const itemsContainer = document.getElementById('items');
itemsContainer.style.display = 'none';

fetch('https://students.netoservices.ru/nestjs-backend/slow-get-courses')
  .then(response => response.json()) 
  .then(data => {
    
    const valutes = data.response.Valute;
    
    
    for (const key in valutes) {
      
      const valute = valutes[key];
      
      
      const itemCode = document.createElement('div');
      itemCode.classList.add('item__code');
      itemCode.textContent = valute.CharCode;

      const itemValue = document.createElement('div');
      itemValue.classList.add('item__value');
      itemValue.textContent = valute.Value;

      const itemCurrency = document.createElement('div');
      itemCurrency.classList.add('item__currency');
      itemCurrency.textContent = 'руб.';

      
      itemsContainer.appendChild(itemCode);
      itemsContainer.appendChild(itemValue);
      itemsContainer.appendChild(itemCurrency);
    }

    
    itemsContainer.style.display = 'block';

    
    loader.classList.remove('loader_active');
  })
  .catch(error => {
    
    const errorMessage = document.createElement('div');
    errorMessage.textContent = `Ошибка загрузки данных: ${error.message}`;
    itemsContainer.appendChild(errorMessage);
    
    loader.classList.remove('loader_active');
  });