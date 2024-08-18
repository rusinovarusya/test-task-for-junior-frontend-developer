const url = 'https://jsonplaceholder.typicode.com/posts';
const main = document.querySelector('.main');

const convertDataInTable = (data) => {
  return data && data.reduce((table, current) => {
    const columnWithCurrentUserId = table.find((column) => column.userId === current.userId);
    if (columnWithCurrentUserId) {
      columnWithCurrentUserId.content.push({
        title: current.title,
        body: current.body
      });
    } else {
      const newColumn = {
        userId: current.userId,
        content: [{
          title: current.title,
          body: current.body
        }]
      };
      table.push(newColumn);
    }
    return table;
  }, []);
}

const generateTable = (data) => {
  const table = document.createElement('table');
  table.classList.add('table');
  for (let columnData of data) {
    const column = document.createElement('tr');
    column.classList.add('tr');
    const postList = columnData.content.map((post) => `<td class="cell"><p class="title">${post.title}</p><p class="body">${post.body}</p></td>`);
    column.innerHTML = `<td class="cell">userId=${columnData.userId}</td>` + postList.join('');
    table.appendChild(column);
  }
  main.appendChild(table);
}

fetch(url).then((response) => response.json())
.then((data) => convertDataInTable(data))
.then((data) => generateTable(data));
