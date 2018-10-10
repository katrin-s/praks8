let numberInput = document.getElementById('numberInput');
let output = document.getElementById('output');

const getfact = () => {
    let number = numberInput.value;
    
    if (number != '') {
    axios.get('http://numbersapi.com/'+number)
        .then(response => {
            output.innerText = response.data;
         })
        .catch(error => {
            console.log(error);
    })
    }
    
};

numberInput.addEventListener('input', getfact);