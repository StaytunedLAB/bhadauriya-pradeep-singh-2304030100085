function convertToMinutes(timeStr) {
    if (!timeStr) throw new Error("Time missing");
    const parts = timeStr.split(":").map(Number);
    if (parts.length !== 2 || isNaN(parts[0]) || isNaN(parts[1])) {
        throw new Error("Invalid time format");
    }
    return parts[0] * 60 + parts[1];
}

function evaluateAttendance(record) {
    const result = {
        id: record.employeeId ?? null,
        workDate: record.date ?? null,
        workingMinutes: 0,
        otMinutes: 0,
        remark: "",
        status: "OK",
        error: null
    };

    try {

        if (!record.checkIn || !record.checkOut) {
            result.status = "NO-DATA";
            result.remark = "Check-in or Check-out missing";
            return result;
        }

        const start = convertToMinutes(record.checkIn);
        const end = convertToMinutes(record.checkOut);

        let worked = end - start;


        let breakUsed = 0;

        if (record.breakStart && record.breakEnd) {
            const b1 = convertToMinutes(record.breakStart);
            const b2 = convertToMinutes(record.breakEnd);
            breakUsed = b2 - b1;
        } else if (record.breakStart && !record.breakEnd) {
            breakUsed = 30; // default break fallback
            result.remark = "Break end missing - 30 min applied";
        }

        worked -= breakUsed;


        if (worked < 0) {
            result.status = "INVALID";
            result.remark = "Calculated work minutes negative";
            return result;
        }


        result.workingMinutes = worked;

        if (record.allowOvertime && worked > 480) {
            result.otMinutes = worked - 480;
        }

    } catch (e) {
        result.status = "ERROR";
        result.error = e.message;
        result.remark = "Failed to process attendance";
    }

    return result;
}

// Example test

console.log(
    evaluateAttendance({
        employeeId: "E101",
        date: "2025-01-01",
        checkIn: "09:00",
        checkOut: "18:30",
        breakStart: "13:00",
        breakEnd: "13:30",
        allowOvertime: true
    })
);
