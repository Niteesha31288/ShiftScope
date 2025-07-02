import { Request } from "express";
import { Page } from "./shared.types";
interface CountableCollection {
    count(parameters: {
        skip: number;
        take: number;
        where: {
            shard: number;
        };
    }): Promise<number>;
}
export declare function getPage(pageNum?: number, shard?: number): Page;
export declare function nextLink(parameters: {
    nextPage?: Page;
    request: Request;
}): string | undefined;
export declare function queryParameters(parameters: {
    page: Page;
}): {
    skip: number;
    take: number;
    where: {
        shard: number;
    };
};
export declare function getNextPage(parameters: {
    currentPage: Page;
    collection: CountableCollection;
}): Promise<Page | undefined>;
export declare function omitShard<T extends {
    shard: number;
}>(obj: T): Omit<T, "shard">;
export declare const PaginationPage: (...dataOrPipes: unknown[]) => ParameterDecorator;
export {};
