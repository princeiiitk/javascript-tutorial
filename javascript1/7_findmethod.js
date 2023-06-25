//find method = only first presedence occurence
const myarray = ["hello", "cat", "dog", "lion"];
const islength3 = (string) => {
    return string.length === 3;
}
const ans = myarray.find(islength3);
console.log(ans);









//by anonamus function
const myarray1 = ["hello", "cat", "dog", "lion"];
const ans1 = myarray.find((string) => {
    return string.length === 3;
});
console.log(ans1);









//practicle example
const user = [
    { userid: 1, username: "prince" },
    { userid: 2, username: "mohan" },
    { userid: 3, username: "praveen" },
    { userid: 4, username: "mahendra" }
];
const ans2 = user.find((a) => {
    return a.userid === 3;
})
console.log(ans2);