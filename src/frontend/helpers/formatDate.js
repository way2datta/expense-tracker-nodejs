export function formatDate(dateString) {
    const date = new Date(dateString);
    var monthNames = [
        "January", "February", "March",
        "April", "May", "June", "July",
        "August", "September", "October",
        "November", "December"
    ];
    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();
    return day + ' ' + monthNames[monthIndex] + ' ' + year;
}


export function formatCalenderDate(dateString) {
    const date = new Date(dateString);
    var day = date.getDate();
    var month = date.getMonth() + 1;

    if (day < 10) {
        day = '0' + day;
    }
    if (month < 10) {
        month = '0' + month;
    }

    var year = date.getFullYear();
    return year + "-" + month + "-" + day;
}


