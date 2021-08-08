const apiData = { //สร้างตัวแปร
    url: 'https://pokeapi.co/api/v2/',
    type: 'pokemon',
    id: '5',
}

const {url,type,id} = apiData
const apiUrl = `${url}${type}/${id}`

fetch(apiUrl)
    .then((data) => data.json()) 
    .then((pokemon) => generate(pokemon))

const generate = (data) => {
    console.log(data);   
    //ข้อมูลที่แสดง
    const dvHtml = ` 
        <div> <h3>${data.species.name}</h3></div>
        <img src=${data.sprites.front_default}>
        <div> 
            <span>PokemomID: ${data.id} </span> <br>
            <span>Height: ${data.height} </span> <br>
            <span>Weight: ${data.weight} </span> <br>
        </div> 
     ` 
const pokemon_show = document.querySelector("#pokemon_data")
pokemon_show.innerHTML = dvHtml


}





