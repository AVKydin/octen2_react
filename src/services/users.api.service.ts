
const getAllUsers = () => {
    return fetch('https://dummyjson.com/users')
        .then(value => value.json())
}

export {
    getAllUsers
}
