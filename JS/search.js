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
    name: "Mahamed Salah",
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

const players = [messi, ronaldo, neymar, mbappe, zlatan, salah, kompany, hazard, dybala]

let jogador = document.querySelector('.player-search');


const searchPLayer = (players) => {
    players.forEach(player => {
        const div = document.createElement("div");
        new Append(div, 'span', player.name);
        new Append(div, 'span', player.position);
        new Append(div, 'span', player.number);
        new Append(div, 'span', player.team);
        new Append(div, 'span', player.age);
        jogador.appendChild(div);   
    })
}

searchPLayer(players);

let btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
    let input = document.querySelector('.input');
    const newPlayers = players.filter(player => player.name.toLowerCase().includes(input.value.toLowerCase()));
    jogador.innerHTML = "";
    searchPLayer(newPlayers);
} )