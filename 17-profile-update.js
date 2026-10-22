const userAccount = {
    username: "John Smith",
    email: "jhon@example.com",
    followerCount: 100,
    isVerified: false,
}

userAccount.bio = "Hi there!";

userAccount.followerCount = 110;

delete userAccount.email;

console.log(userAccount);
