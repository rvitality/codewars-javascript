function billboard(name, pricePerCharacter = 30) {
    let cost = 0;

    for (let i = 0; i < name.length; i++) {
        cost += pricePerCharacter;
    }

    return cost;
}
