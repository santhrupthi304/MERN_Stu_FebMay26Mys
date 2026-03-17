let rules = [
  { role: "student", action: "READ", allowed: false },
  { role: "guest", action: "READ", allowed: false },
  { role: "admin", action: "WRITE", allowed: true },
  { role: "student", action: "READ", allowed: true },
  { role: "admin", action: "WRITE", allowed: true }
];
let allowedRules = rules.filter(rule => rule.allowed === true);//allowed rules
let allowedPairs = allowedRules.map(rule => rule.role + ":" + rule.action);//allowed pairs
//summary
let summary = rules.reduce((acc, rule) => {
  if (rule.allowed) {
    acc[rule.role] = (acc[rule.role] || 0) + 1;
  }
  return acc;
}, { admin: 0, student: 0, guest: 0 });
console.log(rules);
console.log("Allowed Rules:", allowedRules);
console.log("Allowed Pairs:", allowedPairs);
console.log("Summary:", summary);