import HttpStatus from 'http-status-codes';

export default class BaseController {
    NOT_FOUND(response) {
        return response.sendStatus(HttpStatus.NOT_FOUND);
    }

    BAD_REQUEST(response, errorMessage = '') {
        return response.status(HttpStatus.BAD_REQUEST).send(errorMessage);
    }

    CREATED(response, model) {
        return response.status(HttpStatus.CREATED).json(model);
    }

    OK(response, model) {
        if (model) {
            return response.status(HttpStatus.OK).json(model);
        }
        return response.sendStatus(HttpStatus.OK);
    }
}
