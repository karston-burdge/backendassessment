const fortuneButton = document.getElementById("fortuneButton");

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const fortune = res.data
            alert(fortune);
    });
};

fortuneButton.addEventListener("click", getFortune);





const complimentBtn = document.getElementById("complimentButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)





const deleteCompBtn = document.getElementById("deleteCompBtn")

const deleteComp = () => {
    axios.delete("http://localhost:4000/api/compliment/")
        .then(alert("Compliment deleted!"))
        .catch(err => console.log(err))
};

deleteCompBtn.addEventListener('click', deleteComp)





const newComplimentForm = document.querySelector('#newCompliment')

const createCompliment = (body) => {
    axios.post("http://localhost:4000/api/compliment/", body)
        .then(alert("compliment added"))
        .catch(err => console.log(err))
}

const compSubHandler = (event) => {
    event.preventDefault()
    let text = document.querySelector("#inputNewComp")
    let newCompObj = {
        text: text.value
    } 
    
    createCompliment(newCompObj)
};

newComplimentForm.addEventListener("submit", compSubHandler);




const updateComplimentForm = document.querySelector('#updateCompliment')

const updateCompliment = (body) => {
    axios.put("http://localhost:4000/api/compliment/:id", body)
        .then(alert("Random compliment updated"))
        .catch(err => console.log(err))
}

function submitHandler (event) {
    event.preventDefault()
    let updateComp = document.querySelector("#inputUpComp")
    let updateCompObj = {
        text: updateComp.value
    } 
    
    updateCompliment(updateCompObj)
};

updateComplimentForm.addEventListener("submit", submitHandler);