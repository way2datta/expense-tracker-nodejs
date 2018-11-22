export class AuthController {
    execute(request, response) {
        console.log("Verify token")
        return response.send('Request contains valid token.');
    }
}