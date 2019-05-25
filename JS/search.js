class Player {
    constructor(atributes){
        this.name = atributes.name;
        this.position = atributes.position;
        this.number = atributes.number;
        this.team = atributes.team;
        this.age = atributes.age;      
    }
}

class Append {
    constructor(place ,element, content){
        this.place = place;
        this.element = element;
        this.content = content;
        this.appendElement();
    }
    appendElement() {
        const newElement = document.createElement(this.element);
        newElement.textContent = this.content;
        this.place.appendChild(newElement);
    }
}

const messi = new Player({
    name: "Lionel Messi",
    position: 'CF',
    number: 10,
    team: "FC Barcelona",
    age: 31
})

const ronaldo = new Player({
    name: "Cristiano Ronaldo",
    position: 'LW',
    number: 7,
    team: "Juventus",
    age: 34
})

const neymar = new Player({
    name: "Neymar Jr",
    position: 'LW',
    number: 10,
    team: "PSG",
    age: 27
})

const mbappe = new Player({
    name: "Kylian Mbappe",
    position: 'LS',
    number: 7,
    team: "PSG",
    age: 20
})

const zlatan = new Player({
    name: "Zlatan Ibrahimovic",
    position: 'ST',
    number: 9,
    team: "LA Galaxy",
    age: 37
})

const salah = new Player({
    name: "Mohamed Salah",
    position: 'RW',
    number: 11,
    team: "Liverpool",
    age: 26
})

const kompany = new Player({
    name: "Vincent Kompany",
    position: 'CB',
    number: 4,
    team: "Manchester City",
    age: 33
})

const hazard = new Player({
    name: "Eden Hazard",
    position: 'LW',
    number: 10,
    team: "Chelsea",
    age: 28
})

const dybala = new Player({
    name: "Paulo Dybala",
    position: 'RW',
    number: 10,
    team: "Juventus",
    age: 25
})

const coutinho = new Player({
    name: "Philippe Coutinho",
    position: 'LW',
    number: 7,
    team: "FC Barcelona",
    age: 26
})

const adan = new Player({
    name: "Paulo Dybala",
    position: 'GK',
    number: 1,
    team: "Atletico Madrid",
    age: 32
})

const modric = new Player({
    name: "Luka Modric",
    position: 'CM',
    number: 10,
    team: "Real Madrid C.F.",
    age: 33
})

const benzema = new Player({
    name: "Karim Benzema",
    position: 'CF',
    number: 9,
    team: "Real Madrid C.F.",
    age: 31
})

const navas = new Player({
    name: "Keylor Navas",
    position: 'GK',
    number: 1,
    team: "Real Madrid C.F.",
    age: 32
})

const costa = new Player({
    name: "Douglas Costa",
    position: 'RW',
    number: 11,
    team: "Juventus",
    age: 28
})

const firmino = new Player({
    name: "Roberto Firmino",
    position: 'CF',
    number: 9,
    team: "Liverpool",
    age: 27
})

const jesus = new Player({
    name: "Gabriel Jesus",
    position: 'CF',
    number: 33,
    team: "Manchester City",
    age: 22
})

const players = [modric, costa, adan, coutinho, messi, navas, ronaldo,
     neymar, benzema, mbappe, zlatan, jesus, salah, firmino, kompany, hazard, dybala]

let jogador = document.querySelector('.player-search');



const searchPLayer = (players) => {
    players.forEach(player => {
        const tr = document.createElement("tr");
        new Append(tr, 'td', player.name);
        new Append(tr, 'td', player.position);
        new Append(tr, 'td', player.number);
        new Append(tr, 'td', player.team);
        new Append(tr, 'td', player.age);
        jogador.appendChild(tr);   
    })
}

searchPLayer(players);

// SEARCH PLAYER FUNCTION //

let btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
    let input = document.querySelector('.input');
    const newPlayers = players.filter(player => player.name.toLowerCase().includes(input.value.toLowerCase()));
    jogador.innerHTML = "";
    searchPLayer(newPlayers);
    input.value = "";
} )

// TAB TO SEARCH PLAYER IN EACH TEAM //

let topics = document.querySelectorAll('.tab');
topics.forEach(topic => {
    topic.addEventListener('click', () => {
        jogador.innerHTML = "";
        if ( topic.innerHTML.toLocaleLowerCase() == 'all' ){
            searchPLayer(players);
        }
        else {
            const newPlayers = players.filter(player => player.team.toLowerCase() == topic.innerHTML.toLocaleLowerCase());
            searchPLayer(newPlayers);
        }
    })
})