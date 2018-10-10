let numberInput = document.getElementById('numberInput');
let output = document.getElementById('output');
let incInput = document.querySelector('#incInput');
const getfact = () => {
    output.innerHTML = '';
    let number = numberInput.value;
    let inc = incInput.value;
    let baseUrl = 'http://numbersapi.com/'
    let url = `${baseUrl}${number}..${parseInt(number) + parseInt(inc)}`;
    
    if (number != '' && inc != '') {
    axios.get(url)
        .then(response => {
            for(let item in response.data) {
                let li = document.createElement('li');
                li.innerText = response.data[item];
                output.appendChild(li);
            }
         })
        .catch(error => {
            console.log(error);
    })
    }  
};

numberInput.addEventListener('input', getfact);
incInput.addEventListener('input', getfact);