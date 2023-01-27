const complimentBtn = document.getElementById("complimentButton");
const fortuneBtn = document.getElementById("fortuneButton");
const fortuneComplimentBtn = document.getElementById("fortuneComplimentButton");
const addFortuneBtn = document.getElementById("newFortune");
const addComplimentBtn = document.getElementById("newCompliment");
const deleteFortuneBtn = document.getElementById("deleteFortune");
const deleteComplimentBtn = document.getElementById("deleteCompliment");
const editFortuneBtn = document.getElementById("editFortune");

const getCompliment = () => {
  axios.get("http://localhost:4000/api/compliment/").then((res) => {
    const data = "COMPLIMENT: " + res.data;
    const responseWindow = document.getElementById("response-window");
    const responseContent = document.getElementById("response-content");
    responseContent.innerHTML = data;
    responseWindow.style.display = "block";
    console.log("getCompliment HIT");
  });
};

const getFortune = () => {
  axios.get("http://localhost:4000/api/fortunes/").then((res) => {
    const data = "FORTUNE: " + res.data;
    const responseWindow = document.getElementById("response-window");
    const responseContent = document.getElementById("response-content");
    responseContent.innerHTML = data;
    responseWindow.style.display = "block";
    console.log("getFortune HIT");
  });
};

const getFortuneCompliment = async () => {
  console.log("getFortuneCompliment HIT");
  axios.get("http://localhost:4000/api/fortunescompliments").then((res) => {
    const data = "FORTUNE + COMPLIMENT: " + res.data;
    const responseWindow = document.getElementById("response-window");
    const responseContent = document.getElementById("response-content");
    responseContent.innerHTML = data;
    responseWindow.style.display = "block";
  });
};

const addNewFortune = (e) => {
  e.preventDefault();
  console.log("addNewFortune HIT");
  let input = document.getElementById("addFortune").value;
  axios
    .post("http://localhost:4000/api/fortunes/input", { input: input })
    .then((res) => {
      const data = "FORTUNES: " + res.data;
      const responseWindow = document.getElementById("response-window");
      const responseContent = document.getElementById("response-content");
      responseContent.innerHTML = data;
      responseWindow.style.display = "block";
    });
};

const addNewCompliment = (e) => {
  e.preventDefault();
  console.log("addNewCompliment HIT");
  let input = document.getElementById("addCompliment").value;
  axios
    .post("http://localhost:4000/api/compliments/input", { input: input })
    .then((res) => {
      const data = "COMPLIMENTS: " + res.data;
      const responseWindow = document.getElementById("response-window");
      const responseContent = document.getElementById("response-content");
      responseContent.innerHTML = data;
      responseWindow.style.display = "block";
    });
};

const deleteFortune = (e) => {
  e.preventDefault();
  console.log("deleteFortune HIT");
  let myIndex = document.querySelector("#deleteFortuneIndex").value;
  axios.delete(`http://localhost:4000/api/fortunes/${myIndex}`).then((res) => {
    const data = "FORTUNES: " + res.data;
    const responseWindow = document.getElementById("response-window");
    const responseContent = document.getElementById("response-content");
    responseContent.innerHTML = data;
    responseWindow.style.display = "block";
  });
};

const deleteCompliment = (e) => {
  e.preventDefault();
  console.log("deleteCompliment HIT");
  let myIndex = document.querySelector("#deleteComplimentIndex").value;
  axios
    .delete(`http://localhost:4000/api/compliments/${myIndex}`)
    .then((res) => {
      const data = "COMPLIMENTS: " + res.data;
      const responseWindow = document.getElementById("response-window");
      const responseContent = document.getElementById("response-content");
      responseContent.innerHTML = data;
      responseWindow.style.display = "block";
    });
};

const editFortune = () => {
  axios.put("http://localhost:4000/api/fortunes/index").then((res) => {
    const data = res.data;
    alert(data), console.log("editFortune HIT");
  });
};

fortuneBtn.addEventListener("click", getFortune);
complimentBtn.addEventListener("click", getCompliment);
fortuneComplimentBtn.addEventListener("click", getFortuneCompliment);
addFortuneBtn.addEventListener("click", addNewFortune);
addComplimentBtn.addEventListener("click", addNewCompliment);
deleteFortuneBtn.addEventListener("click", deleteFortune);
deleteComplimentBtn.addEventListener("click", deleteCompliment);
editFortuneBtn.addEventListener("click", editFortune);
