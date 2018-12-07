import Logger from "./../Logger";
import User from "../models/User";
import BaseController from "./BaseController";
import UserService from './../services/UserService';

export default class UserController extends BaseController{
    constructor(props) {
        super(props);
        this.service = new UserService();
        this.register = this.register.bind(this);
    }
    register(req, res, next) {
        this.service.create(req.body)
            .then((user) => res.json(user))
            .catch(err => next(err));
    }
    
    create(request, response) {
        Logger.log('User creation logic...');
      
        User.findOne({ username: request.body.username })
            .exec(function(error,user){
                if(user){
                    throw 'Username "' + request.body.username + '" is already taken';
                }
            });

        const user = new User(request.body);

        if (request.body.password) {
            const bcrypt = require('bcryptjs');
            user.hash = bcrypt.hashSync(request.body.password, 10);
        }
        user.save();
        delete user.hash;
        return super.OK(response, user);
    }

    getById(request, response) {
        Logger.log('Get user by id...');
        return response.send('Get user by id...');
    }

    getAll(request, response) {
        Logger.log('Get all user...');
        return response.send('Get all user...');
    }

    update(request, response) {
        Logger.log('Update user...');
        return response.send('Update user...');
    }

    delete(request, response) {
        Logger.log('Delete user...');
        return response.send('Delete user...');
    }
}
