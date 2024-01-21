// Function 1: createEmployeeRecord
function createEmployeeRecord([firstName, familyName, title, payPerHour]) {
    return {
        firstName,
        familyName,
        title,
        payPerHour,
        timeInEvents: [],
        timeOutEvents: []
    };
}

// Function 2: createEmployeeRecords
function createEmployeeRecords(arrOfArrays) {
    return arrOfArrays.map(createEmployeeRecord);
}

// Function 3: createTimeInEvent
function createTimeInEvent(dateStamp) {
    const [date, hour] = dateStamp.split(" ");
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date
    });
    return this;
}

// Function 4: createTimeOutEvent
function createTimeOutEvent(dateStamp) {
    const [date, hour] = dateStamp.split(" ");
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date
    });
    return this;
}

// Function 5: hoursWorkedOnDate
function hoursWorkedOnDate(date) {
    const timeIn = this.timeInEvents.find(event => event.date === date);
    const timeOut = this.timeOutEvents.find(event => event.date === date);

    if (timeIn && timeOut) {
        // Adjust the calculation to handle the conversion to hours properly
        return (timeOut.hour - timeIn.hour) / 100; // Convert to hours
    } else {
        // Return 0 if either timeIn or timeOut is not available
        return 0;
    }
}

// Function 6: wagesEarnedOnDate
function wagesEarnedOnDate(date) {
    const hoursWorked = hoursWorkedOnDate.call(this, date);
    return hoursWorked * this.payPerHour;
}

// Function 8: findEmployeeByFirstName
function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find(employee => employee.firstName === firstName);
}

// Function 9: calculatePayroll
function calculatePayroll(employeeRecords) {
    return employeeRecords.reduce((totalPay, employee) => totalPay + allWagesFor.call(employee), 0);
}

// Function 10: allWagesFor
const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date;
    });

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d);
    }.bind(this), 0);

    return payable;
};
