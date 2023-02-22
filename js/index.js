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

        const cd = getData('third-name', 'wide-side', 'height-side');
        const areaTotal = parseInt(cd.wideValue) * parseInt(cd.heightValue);
    
        displayData(cd.cardName, cd.wideValue, cd.heightValue, areaTotal);
})

// fourth-card
document.getElementById('fourth-card').addEventListener('click', function(e){
    serial +=1;

    const cd = getData('fourth-name', 'first-side', 'second-side');
    const areaTotal = 0.5 * parseInt(cd.wideValue) * parseInt(cd.heightValue);
    
    displayData(cd.cardName, cd.wideValue, cd.heightValue, areaTotal);
})

// fifth-card
document.getElementById('fifth-card').addEventListener('click', function(e){
    serial +=1;
    const cd = getData('fifth-name', 'first-value', 'second-value');

    const areaTotal = 0.5 * parseInt(cd.wideValue) * parseInt(cd.heightValue);
    
    displayData(cd.cardName, cd.wideValue, cd.heightValue, areaTotal);
})

// sixth-card
document.getElementById('sixth-card').addEventListener('click', function(){
    serial +=1;
    const cd = getData('sixth-name', 'valueOfOne', 'valueOfTwo');

        const total = 3.14 * parseInt(cd.wideValue) * parseInt(cd.heightValue);
    const areaTotal = parseInt(total).toFixed(2);
    
    displayData(cd.cardName, cd.wideValue, cd.heightValue, areaTotal);
})



// common function to display data
function getData(id1, id2, id3){
    const cardName = document.getElementById(id1).innerText;
    const wideValue = document.getElementById(id2).innerText;
    const heightValue = document.getElementById(id3).innerText;

    const cd = {
        cardName: cardName,
        wideValue: wideValue,
        heightValue: heightValue,
    };
    return cd;
}


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