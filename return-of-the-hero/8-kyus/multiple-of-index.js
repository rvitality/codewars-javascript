function multipleOfIndex(array) {
    return array.filter((num, index) => num === 0 || num % index === 0);
}
