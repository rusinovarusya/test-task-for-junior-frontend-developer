(function() {
  const url = 'https://jsonplaceholder.typicode.com/posts';
  const main = document.querySelector('.main');

  const headers = [
    {
      title: 'User ID',
      columnId: 'userId',
    },
    {
      title: 'ID',
      columnId: 'id'
    },
    {
      title: 'Title',
      columnId: 'title'
    },
    {
      title: 'Body',
      columnId: 'body'
    }
  ];

  const generateTable = (data) => {
    const thead = createThead(headers);
    const tbody = createTbody(headers, data);
    const table = document.createElement('table');
    table.classList.add('table');
    table.appendChild(thead);
    table.appendChild(tbody);
    main.appendChild(table);
  }

  const createThead = (headers) => {
    const thead = document.createElement('thead');
    thead.classList.add('.thead');
    const tr = document.createElement('tr');
    for (let header of headers) {
      const th = document.createElement('th');
      th.classList.add('th');
      th.setAttribute('data-columnId', header.columnId);
      th.textContent = header.title;
      tr.appendChild(th);
    }
    thead.appendChild(tr);
    return thead;
  }
  
  const createTbody = (headers, data) => {
    const tbody = document.createElement('tbody');
    tbody.classList.add('.tbody');
    for (let row of data) {
      const tr = document.createElement('tr');
      tr.classList.add('tr');
      for (let header of headers) {
        const td = document.createElement('td');
        td.classList.add('td');
        td.setAttribute('data-columnId', header.columnId);
        td.textContent = row[header.columnId];
        tr.appendChild(td);
      }
      tbody.appendChild(tr);
    }
    return tbody;
  }

  document.addEventListener('DOMContentLoaded', () => {
    fetch(url).then((response) => response.json())
    .then((data) => generateTable(data));
  });
})();
