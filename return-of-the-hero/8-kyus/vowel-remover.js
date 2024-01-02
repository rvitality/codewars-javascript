function shortcut(string) {
    return string
        .split("")
        .filter((char) => !"aeiou".includes(char))
        .join("");
}
