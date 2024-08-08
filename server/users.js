const { trimStr } = require("./utils")

let users = []
const addUser = (user) => {
    const userN = trimStr(user.username)
    const userRoom = trimStr(user.room)

    const isExist = users.find(
        (u) => trimStr(u.username) === userN && trimStr(u.room) === userRoom
    )

    !isExist && users.push(user)

    const currentUser = isExist || user

    return {
        isExist: !!isExist, 
        user: currentUser
    }
}

module.exports = { addUser }