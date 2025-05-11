function abbrevName(name) {
    const names = name.split(" ");
    return `${names[0].at(0).toUpperCase()}.${names[1].at(0).toUpperCase()}`;
}
