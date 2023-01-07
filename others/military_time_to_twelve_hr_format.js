const convertMilitaryTimeTo12HrFormat = time => {
    let [hour, minutes] = time.split(":");
    hour = parseFloat(hour);

    let amOrPM = "AM";

    if (hour >= 12) {
        hour = hour % 12;
        amOrPM = "PM";
    }

    if (hour === 0) {
        hour = 12;
    }

    hour = hour < 10 ? `0${hour}` : hour;

    return `${hour}:${minutes}${amOrPM}`;
};

// console.log(convertMilitaryTimeTo12HrFormat("00:15"));
// console.log(convertMilitaryTimeTo12HrFormat("05:34"));
// console.log(convertMilitaryTimeTo12HrFormat("15:34"));
// console.log(convertMilitaryTimeTo12HrFormat("12:34"));
