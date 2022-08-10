class Warrior {
  constructor(name, hp, ap, dp) {
    this.name = name;
    this.hp = hp;
    this.ap = ap;
    this.dp = dp;
  }

  attack(warrior) {
    warrior.hp -= this.ap / warrior.dp;
  }
}

class swordWarrior extends Warrior {
  constructor(name, hp, ap, dp) {
    super(name, hp, ap, dp);
  }

  mockery(warrior) {
    warrior.dp /= 2;
  }
}

class spearWarrior extends Warrior {
  constructor(name, hp, ap, dp) {
    super(name, hp, ap, dp);
  }

  power() {
    this.ap *= 2;
  }
}

let warrior1 = new swordWarrior("Arthur", 100, 15, 8);
let warrior2 = new spearWarrior("Lancelot", 80, 20, 15);

const nameWarrior1 = document.getElementById("nameWarrior1");
const hpWarrior1 = document.getElementById("hpWarrior1");
const apWarrior1 = document.getElementById("apWarrior1");
const dpWarrior1 = document.getElementById("dpWarrior1");

const nameWarrior2 = document.getElementById("nameWarrior2");
const hpWarrior2 = document.getElementById("hpWarrior2");
const apWarrior2 = document.getElementById("apWarrior2");
const dpWarrior2 = document.getElementById("dpWarrior2");
const result = document.getElementById("result");
const main = document.querySelector("main");

let hp1 = document.getElementById("hp1");
let hp2 = document.getElementById("hp2");

range1.setAttribute("value", warrior1.hp);
range1.setAttribute("max", warrior1.hp);
range2.setAttribute("value", warrior2.hp);
range2.setAttribute("max", warrior2.hp);

hp1.innerHTML = range1.value;
hp2.innerHTML = range2.value;
nameWarrior1.innerHTML = warrior1.name;
hpWarrior1.innerHTML = warrior1.hp;
apWarrior1.innerHTML = warrior1.ap;
dpWarrior1.innerHTML = warrior1.dp;
nameWarrior2.innerHTML = warrior2.name;
hpWarrior2.innerHTML = warrior2.hp;
apWarrior2.innerHTML = warrior2.ap;
dpWarrior2.innerHTML = warrior2.dp;

mockery.addEventListener("click", () => {
  warrior1.mockery(warrior2);
  dpWarrior2.innerHTML = warrior2.dp;
  dpWarrior2.style.color = "#ba1010";
});

power.addEventListener("click", () => {
  warrior2.power();
  apWarrior2.innerHTML = warrior2.ap;
  apWarrior2.style.color = "#1da714";
});

btn1.addEventListener("click", () => {
  warrior1.attack(warrior2);
  hp2.innerHTML = warrior2.hp;
  range2.value = warrior2.hp;
  console.log(warrior2.hp);

  if (warrior2.hp <= 0) {
    let winner = warrior1.name;
    console.log("test");
    result.innerHTML = `Le vainqueur est <strong>${winner}</strong>`;
    result.classList.add("finish");
    main.classList.add("finish");
  }
  console.log(winner);
});

btn2.addEventListener("click", () => {
  warrior2.attack(warrior1);
  hp1.innerHTML = warrior1.hp;
  range1.value = warrior1.hp;
  if (warrior1.hp <= 0) {
    let winner = warrior1.name;
    result.innerHTML = `<p>Le vainqueur est <strong>${winner}</strong></p>`;
    result.classList.add("finish");
    main.classList.add("finish");
  }
});
