export default class AuthController {
    execute(request, response) {
        return response.send('Request contains valid token.');
    }
}
