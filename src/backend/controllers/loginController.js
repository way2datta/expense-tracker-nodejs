export default class LoginController {
    execute(request, response) {
        return response.send('Username and password is valid.');
    }
}
