// Description: This file contains the routes for the user model
const router = require('express').Router();

// From controllers\userController.js:
const {
    getUser,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../controllers/userController');

// Api/users
router.route('/').get(getUser).post(createUser);

// Api/users/:userId
router.route('/:userId')
.get(getSingleUser)
.put(updateUser)
.delete(deleteUser);

// Api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId')
.post(addFriend)
.delete(deleteFriend);

// Export the router
module.exports = router;