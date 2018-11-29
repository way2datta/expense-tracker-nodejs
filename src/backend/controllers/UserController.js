export default class UserController {
    create(request, response) {
        console.log('User creation logic...');
        return response.send('User created successfully.');
    }

    getById(request, response) {
        console.log('Get user by id...');
        return response.send('Get user by id...');
    }

    getAll(request, response) {
        console.log('Get all user...');
        return response.send('Get all user...');
    }

    update(request, response) {
        console.log('Update user...');
        return response.send('Update user...');
    }

    delete(request, response) {
        console.log('Delete user...');
        return response.send('Delete user...');
    }
}
