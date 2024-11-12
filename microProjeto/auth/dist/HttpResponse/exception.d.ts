import { HTTPenum } from "./http.enum";
export declare class ExceptionErrorDTO {
    private status;
    private message;
    constructor(status: HTTPenum, message: string);
}
