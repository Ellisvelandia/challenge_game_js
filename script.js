function Character(name, strength, health) {
  this.name = name;
  this.strength = strength;
  this.health = health;
  this.elements = new UIElements(this.name);
}

function UIElements(name) {
  this.attackBtn = document.querySelector(`#${name}-attack`);
  this.healthBtn = document.querySelector(`#${name}-make-health`);
  this.alive = document.querySelector(`#${name}-alive`);
  this.progress = document.querySelector(`.${name}-health span`);
}

Character.prototype.attack = function (opponent) {
  if (opponent.health > 0) {
    opponent.health -= this.strength;
    opponent.elements.progress.style.width = `${opponent.health}%`;
  } else {
    opponent.elements.attackBtn.remove();
    opponent.elements.healthBtn.remove();
    opponent.elements.alive.innerHTML = `${opponent.name} is died`;
  }
};

Character.prototype.status = function () {
  console.log(`name: ${this.name}`);
  console.log(`strength: ${this.strength}`);
  console.log(`health: ${this.health}`);
};

Character.prototype.makeHealth = function () {
  if (this.health < 100) {
    this.health += 10;
    this.elements.progress.style.width = `${this.health}%`;
  }
  if (this.health > 100) {
    this.health = 100;
  }
};

let yagami = new Character("yagami", 10, 100);
let L = new Character("L", 5, 100);

yagami.elements.attackBtn.addEventListener("click", function () {
  yagami.attack(L);
});

L.elements.attackBtn.addEventListener("click", function () {
  L.attack(yagami);
});

yagami.elements.healthBtn.addEventListener("click", function () {
  yagami.makeHealth();
});

L.elements.healthBtn.addEventListener("click", function () {
  L.makeHealth();
});

// music click on pictures

document.getElementById("yagami").onclick = function () {
  let audio = document.getElementById("audio-kira");
  if (audio.paused) audio.play();
  else audio.pause();
};

document.getElementById("L").onclick = function () {
  let audio = document.getElementById("audio-L");
  if (audio.paused) audio.play();
  else audio.pause();
};

// RAIN

const container = document.querySelector(".container");

const rain = () => {
  let j = 0;

  while (j <= 80) {
    let gout = document.createElement("i");
    let x = innerWidth * Math.random();
    let time = 1 * Math.random();

    gout.style.animationDuration = time <= 0.4 ? time + 0.4 + "s" : time + "s";
    gout.style.animationDelay = time + "s";
    gout.style.left = x + "px";

    container.appendChild(gout);

    j++;
  }
};

rain();
