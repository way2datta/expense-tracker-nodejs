export class LoginController {
    execute(request, response) {
        console.log("Verify login credentials...")
        return response.send('Username and password is valid.');
    }
}