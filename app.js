// // let my_key= "live_1fVlBDf6WtWYDdAP2lzZnlY5bak7JhusQmE0eX7ribhbbAulIKefctBIeROx0bmY"
// async function CoffeeData() {
//   try {
//     const resp = await fetch("https://api.sampleapis.com/coffee/hot")
//     const data = await resp.json()
//     console.log(data);
//   } catch (error) {
//     console.log("There was a problem fetching API.")
//   }
// }

// CoffeeData()


let button = document.querySelector('#button')
let name = document.querySelector('#name')
let diameter = document.querySelector('#diameter')
let climate = document.querySelector('#climate')
let terrain = document.querySelector('#terrain')
let gravity = document.querySelector('#gravity')


function getData() {
    generateDataLoading()
    let randomPlanet = Math.floor((Math.random() * 60) + 1)
    let swApi = "https://www.swapi.tech/api/planets/" + randomPlanet
    // console.log(swApi);
    axios.get(swApi).then(response => {
        const meta = response.data.result.properties
        // console.log(meta);
        generateData(meta)
    }).catch(e => {
        generateDataFail()
    })
}

function generateData(data) {
    dataname.innerHTML = data.name
    planetname.innerText = data.name
    diameter.innerText = data.diameter
    climate.innerText = data.climate
    terrain.innerText = data.terrain
    gravity.innerText = data.gravity
}

function generateDataFail() {
    planetname.innerText = 'R.I.P Api'
    dataname.innerHTML = ' '
    diameter.innerText = ''
    climate.innerText = ''
    terrain.innerText = ''
    gravity.innerText = ''
}

function generateDataLoading() {
    planetname.innerHTML = '<i class="fas fa-circle-notch fa-spin fa-sw"></i>'
    dataname.innerHTML = ' '
    diameter.innerText = ''
    climate.innerText = ''
    terrain.innerText = ''
    gravity.innerText = ''
}

button.addEventListener('click', getData)