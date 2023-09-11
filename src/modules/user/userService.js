let users = []

const getUserByEmail = (searchEmail) => {
    return users.find((obj) => obj.email === searchEmail)
}

export const signup = (data) => {
    if (getUserByEmail(data.email)) {
        console.log("existe o email")
    } else {
        users.push(data)
    }

    return true
}
