import BaseController from "./BaseController";
import UserService from './../services/UserService';

export default class UserController extends BaseController {
    constructor() {
        super();
        this.service = new UserService();
    }

    register = async (request, response) => {
        const created = await this.service.create(request.body)
        return super.OK(response, created);
    }

    getById = async (request, response) => {
        const existing = await this.service.getById(request.params.userId)
        existing ? super.OK(response, existing) : super.BAD_REQUEST(response);
    }

    getAll = async (request, response) => {
        const allUsers = await this.service.getAll()
        super.OK(response, allUsers);
    }

    update = async (request, response) => {
        const updated = await this.service.update(request.params.userId, request.body)
        return super.OK(response, updated);
    }

    delete = async (request, response) => {
        await this.service.delete(request.params.userId)
        super.OK(response);
    }
}
