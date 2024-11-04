//your JS code here. If required.
document.getElementById('submit').addEventListener('click', function() {
    // Get values from input fields
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;

    // Validate input
    if (title === '' || author === '' || isbn === '') {
        alert('Please fill in all fields.');
        return;
    }

    // Create a new table row
    const tableBody = document.getElementById('book-list');
    const newRow = document.createElement('tr');

    // Create cells for the row
    newRow.innerHTML = `
        <td>${title}</td>
        <td>${author}</td>
        <td>${isbn}</td>
        <td><button class="delete">X</button></td>
    `;

    // Append the new row to the table body
    tableBody.appendChild(newRow);

    // Clear input fields
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';

    // Add event listener to the clear button
    newRow.querySelector('.delete').addEventListener('click', function() {
        tableBody.removeChild(newRow);
    });
});
