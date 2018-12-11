import User from "../models/User";

export default class UserService {
    async create(userParam) {
        if (await User.findOne({ username: userParam.username })) {
            throw 'Username "' + userParam.username + '" is already taken';
        }
        const user = new User(userParam);
    
        if (userParam.password) {
            const bcrypt = require('bcryptjs');
            user.hash = bcrypt.hashSync(userParam.password, 10);
        }
    
        await user.save();
        return user;
    }

    async getAll() {
        return await User.find();
    }
    
    async getById(id) {
        return await User.findById(id);
    }

    async update(id, userParam) {
        const user = await User.findById(id);
        if (!user) {
            throw 'User not found';
        } 
        Object.assign(user, userParam);
        await user.save();
        return user;
    }
    
    async delete(id) {
        await User.findByIdAndRemove(id);
    }
}