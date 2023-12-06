const express = require("express"); // framework
const cors = require('cors'); // ??
const bodyParser = require('body-parser'); // ??
const app = express(); // l'app va tourner sur le port 3000
const port = 3001;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    return res.send('Hello')
});

app.post('/calculate', (req, res) => {
    const {valuePopsicle, valueSibling} = req.body;
    console.log(req.body)

    const calculatePopsicle = () => {
        var siblings = parseInt(valueSibling);
        var popsicles = parseInt(valuePopsicle);
        var result = popsicles % siblings;

        console.log("Siblings:", siblings);
        console.log("Popsicles:", popsicles);
        console.log("Result:",result);

        if (result === 0){
            return res.json({result: "Oh No! Give Away"})
        } else {
            return res.json({result: "Eat Them All!"}) 
        }
        
    };
    calculatePopsicle();
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});