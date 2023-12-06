//document.addEventListener('DOMContentLoaded', () => {

document.getElementById('calculator-btn').addEventListener('click', () => {
    const valuePopsicle = document.getElementById('value-popsicle').value;
    const valueSibling = document.getElementById('value-sibling').value;
    console.log("fetch request")

    // Make a POST request to the server
    fetch('http://localhost:3001/calculate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            valuePopsicle: valuePopsicle,
            valueSibling: valueSibling,
        }),
    }, {mode: 'cors'})
    .then(response => response.json())
    .then(data => {
        // Update the result on the page
        document.getElementById('afficher-resultat').textContent = data.result;
    })
    .catch(error => console.error('Error:', error));
});
//});