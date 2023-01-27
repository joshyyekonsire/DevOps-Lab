const compliments = [
  "Gee, you're a smart cookie!",
  "Cool shirt!",
  "Your Javascript skills are stellar.",
];
const fortunes = [
  "A dubious friend may be an enemy in camouflage.",
  "A faithful friend is a strong defense.",
  "A friend is a present you give yourself.",
  "A gambler not only will lose what he has, but also will lose what he doesn’t have.",
  "A good friendship is often more important than a passionate romance.",
  "A new outlook brightens your image and brings new friends.",
  "A person of words and not deeds is like a garden full of weeds.",
];

module.exports = {
  getCompliment: (req, res) => {
   
    let randomIndex = Math.floor(Math.random() * compliments.length);
    let randomCompliment = compliments[randomIndex];

    res.status(200).send(randomCompliment);
  },

  getFortune: (req, res) => {

    let randomIndex = Math.floor(Math.random() * fortunes.length);
    let randomFortune = fortunes[randomIndex];

    res.status(200).send(randomFortune);
  },

getFortuneCompliment: (req, res) => {
    let randomFortuneIndex = Math.floor(Math.random() * fortunes.length);
    let randomComplimentIndex = Math.floor(Math.random() * compliments.length);

    let randomFortune = fortunes[randomFortuneIndex];
    let randomCompliment = compliments[randomComplimentIndex];

    let randomFortuneCompliment = randomFortune + " " + randomCompliment;
    res.status(200).send(randomFortuneCompliment);
  },

  addFortune: (req, res) => {
    fortunes.push(req.body.input);
    res.status(200).send(fortunes);
  },

  addCompliment: (req, res) => {
    compliments.push(req.body.input);
    res.status(200).send(compliments);
  },
  
  deleteFortune: (req, res) => {
    console.log(req.params);
    fortunes.splice(req.params.index, 1);
    res.status(200).send(fortunes);
  },

deleteCompliment: (req, res) => {
    console.log(req.params);
    compliments.splice(req.params.index, 1);
    res.status(200).send(compliments);
  },

  editFortune: (req, res) => {
    const { value, text } = req.value;
    fortunes.splice(value, 1, text);
    res.status(200).send(fortunes);
  },
};
