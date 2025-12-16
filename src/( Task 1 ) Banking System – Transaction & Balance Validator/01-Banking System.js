function toNumberSafe(value) {
    const n = Number(value);
    return !isNaN(n) ? n : null;
}


function isValidAction(action) {
    return ["deposit", "withdraw"].includes(action);
}


function handleTransaction(entry, balance) {
    if (!entry || typeof entry !== "object") {
        return { ok: false, reason: "Invalid transaction object" };
    }

    if (!entry.action) {
        return { ok: false, reason: "Missing action field" };
    }

    if (!isValidAction(entry.action)) {
        return { ok: false, reason: "Unsupported action type" };
    }

    const amt = toNumberSafe(entry.value);
    if (amt === null || amt <= 0) {
        return { ok: false, reason: "Invalid amount" };
    }

    if (entry.action === "withdraw" && amt > balance) {
        return { ok: false, reason: "Balance too low" };
    }

    // SUCCESS — apply
    const newBalance = entry.action === "deposit" ? balance + amt : balance - amt;

    return { ok: true, newBalance, applied: { action: entry.action, value: amt } };
}


// MAIN PROCESSOR

function runBankAccountProcess(data) {
    const {
        accNo,
        holder,
        openingBalance,
        currency = "INR",
        entries = []
    } = data || {};

    let balance = toNumberSafe(openingBalance);
    if (balance === null || balance < 0) balance = 0;

    const applied = [];
    const rejected = [];
    let audit = "";

    try {
        for (let entry of entries) {
            const result = handleTransaction(entry, balance);

            if (!result.ok) {
                rejected.push({ transaction: entry, reason: result.reason });
                continue;
            }

            balance = result.newBalance;
            applied.push(result.applied);
        }

    } catch (err) {
        audit = "Critical System Error: " + err.message;
    } finally {
        if (!audit) {
            audit = "Process finished at " + new Date().toISOString();
        }
    }

    return {
        accNo,
        holder,
        currency,
        openingBalance,
        finalBalance: balance,
        applied,
        rejected,
        audit
    };
}


// TEST INPUT

const example = {
    accNo: "998877665500",
    holder: "abc",
    openingBalance: "2200",
    currency: "INR",
    entries: [
        { action: "deposit", value: "300" },
        { action: "withdraw", value: 500 },
        { action: "withdraw", value: 8000 },
        { action: "bonus", value: 200 },
        { action: "deposit", value: "-20" },
        { value: 400 },
        null
    ]
};

console.log(JSON.stringify(runBankAccountProcess(example), null, 2));
