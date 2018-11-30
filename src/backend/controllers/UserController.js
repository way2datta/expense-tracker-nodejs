import Logger from "./../Logger";

export default class UserController {
    create(request, response) {
        Logger.log('User creation logic...');
        return response.send('User created successfully.');
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
