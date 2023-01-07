const convertTo24HrsFormat = time => {
    let [hour, minutes] = time.slice(0, -2).split(":");

    const amOrPm = time.slice(-2);

    if (amOrPm === "PM") {
        hour = +hour === 12 ? 12 : +hour + 12;
    } else {
        hour = +hour === 12 ? "00" : hour;
    }

    return `${hour}:${minutes}`;
};

// console.log(convertTo24HrsFormat("12:10AM"));
// console.log(convertTo24HrsFormat("05:00AM"));
// console.log(convertTo24HrsFormat("12:34PM"));
// console.log(convertTo24HrsFormat("11:04PM"));
// console.log(convertTo24HrsFormat("03:12PM"));
// console.log(convertTo24HrsFormat("01:53AM"));
