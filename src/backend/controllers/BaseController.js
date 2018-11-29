export default class BaseController {
    notFound(response) {
        response.sendStatus(404);
    }
}
