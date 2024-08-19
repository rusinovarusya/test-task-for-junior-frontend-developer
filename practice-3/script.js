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

  const state = {
    order: 'default',
    sortedByColumnId: null
  }

  const generateTable = (data) => {
    const table = createTable(headers, data);
    main.appendChild(table);
  }

  const createTable = (headers, data) => {
    const table = document.createElement('table');
    const handlers = {};
    const thead = createThead(headers, data, handlers);
    const tbody = createTbody(headers, data);

    
    table.classList.add('table');
    table.appendChild(thead);
    table.appendChild(tbody);
    handlers.sort = (header) => sortTable(header.columnId, data, table);

    return table;
  }

  const createThead = (headers, data, handlers) => {
    const thead = document.createElement('thead');
    thead.classList.add('thead');
    const tr = document.createElement('tr');
    for (let header of headers) {
      const th = document.createElement('th');
      th.classList.add('th');
      th.setAttribute('data-columnId', header.columnId);
      th.addEventListener('click', () => handlers.sort(header));
      th.textContent = header.title;
      tr.appendChild(th);
    }
    thead.appendChild(tr);
    return thead;
  }
  
  const createTbody = (headers, data) => {
    const tbody = document.createElement('tbody');
    tbody.classList.add('tbody');
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

  const sortTable = (columnId, data, table) => {
    if (state.sortedByColumnId !== columnId) {
      state.order = 'default';
    }
    state.order = switchOrder(state.order);
    state.sortedByColumnId = columnId;

    const newData = sortData(columnId, data, state.order);
    updateTbody(headers, newData, table);
  }

  const updateTbody = (headers, data, table) => {
    const tbody = table.querySelector('.tbody');
    const newTbody = createTbody(headers, data);
    table.replaceChild(newTbody, tbody);
  }

  const sortData = (columnId, data, order) => {
    const copy = [...data];
    const sortingCoefficient = order === 'asc' ? 1 : -1;

    return copy.sort((a, b) => {
      if (a[columnId] < b[columnId]) {
        return -1 * sortingCoefficient;
      } else {
        return 1 * sortingCoefficient;
      }
    });
  }

  const switchOrder = (order) => {
    switch (order) {
      case 'asc':
        return 'des';
      case 'des':
        return 'asc';
      default: 
        return 'asc';
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    fetch(url).then((response) => response.json())
    .then((data) => generateTable(data));
  });
})();
