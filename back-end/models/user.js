const mongoose = require('../utils/mongoose')

var UserModel = mongoose.model('users')

const getUserInfoById = (id) => {
    return UserModel.findById(id)
        .then((result) => {
            return result
        })
        .catch(() => {
            return false
        })
}

module.exports = {
    getUserInfoById
}