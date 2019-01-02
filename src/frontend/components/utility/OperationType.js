
export default class OperationType {
    static CREATE() {
        return "CREATE"
    }

    static UPDATE() {
        return "UPDATE"
    }

    static wasCreate(type) {
        return type.toUpperCase() === OperationType.CREATE;
    }

    static wasUpdate(type) {
        return type.toUpperCase() === OperationType.UPDATE;
    }

    static getOperationVerb(type) {
        if(type.toUpperCase() === OperationType.UPDATE()){
            return "updated";
        }
        if(type.toUpperCase() === OperationType.CREATE()){
            return "created";
        }
        return "";
    }
}