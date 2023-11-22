const express = require("express");
const app = express();
const port = 3000;


app.post('/calculate', (req, res) => {
    const {valuePopsicle, valueSibling} = req.body;

    const calculatePopsicle = () => {
    var siblings = parseInt(valueSibling.value);
    var popsicles = parseInt(valuePopsicle.value);
    var res = popsicles % siblings;

    console.log("Siblings:", siblings);
    console.log("Popsicles:", popsicles);
    console.log("Result:", res);

if (res === 0){
    return res.json({result: "Oh No! Give Away"})
} else {
    return res.json({result: "Eat Them All!"}) 
}
    
};
calculatePopsicle();
});