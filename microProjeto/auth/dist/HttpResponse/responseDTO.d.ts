import { HTTPenum } from "./http.enum";
export declare class ResponseDTO {
    private status;
    private message;
    private response;
    constructor(status: HTTPenum, message: string, response: any);
}
