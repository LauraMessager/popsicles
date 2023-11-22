document.getElementById('calculator-btn').addEventListener('click', () => {
    const valuePopsicle = document.getElementById('valuePopsicle').value;
    const valueSibling = document.getElementById('valueSibling').value;

    // Make a POST request to the server
    fetch('http://localhost:3000/calculate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            valuePopsicle: valuePopsicle,
            valueSibling: valueSibling,
        }),
    })
    .then(response => response.json())
    .then(data => {
        // Update the result on the page
        document.getElementById('afficher-resultat').textContent = data.result;
    })
    .catch(error => console.error('Error:', error));
});