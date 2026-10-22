const userAccount = {
    username: "John Smith",
    email: "jhon@example.com",
    followerCount: 100,
    isVerified: false,
}

const jsonString = JSON.stringify(userAccount);
console.log(jsonString);

const toObject = JSON.parse(jsonString);
console.log(toObject);