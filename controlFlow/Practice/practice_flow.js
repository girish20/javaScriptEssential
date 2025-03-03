let person = "Employee";
let emloyeeCategory;

switch (person) {
    case "Employee":
        emloyeeCategory = "Dietary Services";
        break;
    case "Enrolled_Member":
        emloyeeCategory = "Dietary Services and one-on-one interaction with a dietician";
        break;
    case "Subscriber":
        emloyeeCategory = "partial access to facilitate Dietary Services";
        break;
    case "Non-Subscriber":
        emloyeeCategory = "need to enroll or at least subscribe first to avail this facility.";
        break;
    default:
        emloyeeCategory = "Unknown";
}

console.log("Employee Category:", emloyeeCategory);