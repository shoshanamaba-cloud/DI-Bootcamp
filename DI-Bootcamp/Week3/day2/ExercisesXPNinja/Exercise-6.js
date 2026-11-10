function createCalendar(year, month) {
    let table = document.createElement("table");

    // Create the header
    let headerRow = document.createElement("tr");
    let weekdays = ["MO", "TU", "WE", "TH", "FR", "SA", "SU"];

    for (let day of weekdays) {
        let th = document.createElement("th");
        th.textContent = day;
        headerRow.appendChild(th);
    }

    table.appendChild(headerRow);

    // Get the first weekday and number of days
    let firstDay = new Date(year, month - 1, 1).getDay();
    firstDay = (firstDay + 6) % 7;

    let daysInMonth = new Date(year, month, 0).getDate();
    let date = 1;

    // Create the calendar rows
    while (date <= daysInMonth) {
        let row = document.createElement("tr");

        for (let i = 0; i < 7; i++) {
            let td = document.createElement("td");

            if (firstDay > 0) {
                td.textContent = ".";
                firstDay--;
            } else if (date <= daysInMonth) {
                td.textContent = date;
                date++;
            } else {
                td.textContent = ".";
            }

            row.appendChild(td);
        }

        table.appendChild(row);
    }

    document.body.appendChild(table);
}