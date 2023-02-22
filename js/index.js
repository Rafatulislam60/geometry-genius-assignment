// document.getElementById('first-card').addEventListener('click', function(){
    
// })
let serial = 0;

// first-card
document.getElementById('first-card').addEventListener('click', function(){
    serial +=1;
    const cardName = document.getElementById('first-name').innerText;

    const wideValue = document.getElementById('first-input').value;
    const heightValue = document.getElementById('second-input').value
    
    if (
        wideValue == "" ||
        heightValue == "" ||
        wideValue <= 0 ||
        heightValue <= 0 ||
        wideValue != "number" ||
        heightValue != "number"
    ) {
        return alert("please enter any valid number");
    }

    const areaTotal = 0.5 * parseInt(wideValue) * parseInt(heightValue);
    
    displayData(cardName, wideValue, heightValue, areaTotal);
})

// second-card
document.getElementById('second-card').addEventListener('click', function(){
    serial +=1;
    const cardName = document.getElementById('second-name').innerText;

    const wideValue = document.getElementById('input-second-card-1').value;
    const heightValue = document.getElementById('input-second-card-2').value

    if (
        wideValue == "" ||
        heightValue == "" ||
        wideValue <= 0 ||
        heightValue <= 0 ||
        wideValue != "number" ||
        heightValue != "number"
    ) {
        return alert("please enter any valid number");
    }
    
    const areaTotal = parseInt(wideValue) * parseInt(heightValue);
    
    displayData(cardName, wideValue, heightValue, areaTotal);
})

// third-card
document.getElementById('third-card').addEventListener('click', function(){
    serial +=1;
    const cardName = document.getElementById('third-name').innerText;
    const wideValue = document.getElementById('wide-side').innerText;
    const heightValue = document.getElementById('height-side').innerText;
    // console.log(cardName, wideValue, heightValue);

        const areaTotal = parseInt(wideValue) * parseInt(heightValue);
    
        displayData(cardName, wideValue, heightValue, areaTotal);
})

// fourth-card
document.getElementById('fourth-card').addEventListener('click', function(e){
    serial +=1;
    const cardName = document.getElementById('fourth-name').innerText;
    const wideValue = document.getElementById('first-side').innerText;
    const heightValue = document.getElementById('second-side').innerText;

    const areaTotal = 0.5 * parseInt(wideValue) * parseInt(heightValue);
    
        displayData(cardName, wideValue, heightValue, areaTotal);
})

// fifth-card
document.getElementById('fifth-card').addEventListener('click', function(e){
    serial +=1;
    const cardName = document.getElementById('fifth-name').innerText;
    const wideValue = document.getElementById('first-value').innerText;
    const heightValue = document.getElementById('second-value').innerText;

    const areaTotal = 0.5 * parseInt(wideValue) * parseInt(heightValue);
    
        displayData(cardName, wideValue, heightValue, areaTotal);
})

// sixth-card
document.getElementById('sixth-card').addEventListener('click', function(){
    serial +=1;
    const cardName = document.getElementById('sixth-name').innerText;
    const wideValue = document.getElementById('valueOfOne').innerText;
    const heightValue = document.getElementById('valueOfTwo').innerText;

        const total = 3.14 * wideValue * heightValue;
    const areaTotal = parseInt(total).toFixed(2);
    
        displayData(cardName, wideValue, heightValue, areaTotal);
})



// common function to display data
function displayData(nameOfC, valueOfW, valueOfH, resultC){
    const container = document.getElementById('table-container');

    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${serial}</td>
    <td>${nameOfC}</td>
    <td>${resultC}</td>
    <td>
    <button class="btn btn-sm btn-primary">Covert to m<sup>2</sup></button>
    </td>
    
    `;
    container.appendChild(tr);
}