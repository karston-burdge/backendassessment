const compliments = [ {
    id: 1,
    text: "Gee, you're a smart cookie!",
 },
 {  id: 2,
    text: "Cool shirt!",
},
{   id: 3,
    text: "Your Javascript skills are stellar.",
}
];
let globalId = 4

module.exports = {

    getCompliment: (req, res) => {
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex].text;
        console.table(compliments);
        res.status(200).send(randomCompliment);
    },
    addCompliment: (req, res) => {
        let newComp = {
            id: globalId,
            text: req.body.text
        }
        compliments.push(newComp);
        console.table(compliments);
        globalId++;
        res.status(200).send(compliments);
    },
    deleteCompliment: (req, res) => {
        let randomIndex = Math.floor(Math.random() * compliments.length);
        compliments.splice(randomIndex -1, 1);
        console.table(compliments);
        res.status(200).send(compliments);
    },
    updateCompliment: (req, res) => {
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let updateComp = req.body.text;
        compliments[randomIndex].text = updateComp;
        console.table(compliments);
        res.status(200).send(compliments);
    },
    getFortune: (req, res) => {
        const fortunes = ["You will explode in 5 days","Your bones will get squishy in ten seconds","You will get into a battle to the death with Santa Claus", "Your child will become Darth Vader"];
        let index = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[index];
        res.status(200).send(randomFortune);
    }
}