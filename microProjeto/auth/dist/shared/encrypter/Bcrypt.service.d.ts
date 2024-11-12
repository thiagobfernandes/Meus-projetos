export declare class BcryptJs {
    hash(password: string): Promise<string>;
    compare(password: string, hash: string): Promise<Boolean>;
}
