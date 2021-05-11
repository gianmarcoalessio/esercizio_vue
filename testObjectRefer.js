var user={
    name: "pippo",
    username:"pluto"
}

var u2 = user
var u3 = Object.assign({},user)
var u4 = JSON.stringify(user)
var u5 = JSON.parse(u4)
user.name="nuovo"


console.log("user",user)
console.log("u2",u2)
console.log("u3",u3)
console.log("u4",u4)
console.log("u5",u5)
