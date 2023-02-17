// https://www.codewars.com/kata/55e8aba23d399a59500000ce/train/javascript
// ! Grasshopper - Terminal Game #1 ---------------

function Hero(name, position = "00", health = 100, damage = 5, experience = 0) {
    this.name = name || "Hero";
    this.position = position;
    this.health = health;
    this.damage = damage;
    this.experience = experience;
}
