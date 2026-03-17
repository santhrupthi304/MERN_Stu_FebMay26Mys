function auditReport(reportJSON) {
    const report = JSON.parse(reportJSON);
    let okCount = 0;
    let failCount = 0;
    for (let key in report.modules) {
        if (report.modules[key] === "OK") {
            okCount++;
        }
        if (report.modules[key] === "FAIL") {
            failCount++;
            break; 
        }
    }
    const summary = {
        app: report.app,
        status: report.status,
        okCount: okCount,
        failCount: failCount
    };
    return {
        summaryObject: summary,
        summaryJSON: JSON.stringify(summary)
    };
}
const reportJSON = JSON.stringify({
    app: "Portal",
    status: "OK",
    modules: {
        auth: "OK",
        payment: "OK",
        results: "FAIL",
        profile: "OK"
    }
});
const result = auditReport(reportJSON);
console.log(result);