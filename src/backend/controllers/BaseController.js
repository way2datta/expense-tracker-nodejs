export default class BaseController {
    handleError(error) {

    }

    notFound(response) {
        response.sendStatus(404);
    }
}
