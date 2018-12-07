import User from "../models/User";

export default class UserService {
    async create(userParam) {
        // validate
        if (await User.findOne({ username: userParam.username })) {
            throw 'Username "' + userParam.username + '" is already taken';
        }
    
        const user = new User(userParam);
    
        // hash password
        if (userParam.password) {
            const bcrypt = require('bcryptjs');
            user.hash = bcrypt.hashSync(userParam.password, 10);
        }
    
        // save user
        await user.save();
        delete user.hash;
        return user;
    }
}