let payroll = [
    { name: "Asha", basePay: 30000, bonus: 2000, taxRate: 0.1 },
    { name: "N", basePay: -25000, bonus: 1000, taxRate: 0.3 },
    { name: "O", basePay: 20000, bonus: 500, taxRate: 0.05 },
    { name: "P", basePay: 30000, bonus: 500, taxRate: 0.5 }
];
console.log("Payroll:",payroll);
//valid records
let validRecords = payroll.filter(emp => emp.basePay > 0 && emp.bonus >= 0 && emp.taxRate >= 0 &&
    emp.taxRate <= 1
);
//net pay report
let netPayReport = validRecords.map(emp => {
    let gross = emp.basePay + emp.bonus;
    let netPay = gross - (gross * emp.taxRate);
    return {
        name: emp.name,
        netPay: netPay
    };
});
//total net payout
let totalNetPayout = netPayReport.reduce((total, emp) => {
    return total + emp.netPay;
}, 0);
console.log("Valid Records:", validRecords);
console.log("Net Pay Report:", netPayReport);
console.log("Total Net Payout:", totalNetPayout);