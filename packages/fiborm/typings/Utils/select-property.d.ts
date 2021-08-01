export declare function encodeColumn(column: string, prefix: string): string;
export declare function docodeColumn(str: string, prefix: string, prefix_len?: number): string;
export declare function getRefPrefixInfo(): {
    sprefix: string;
    splen: number;
    tprefix: string;
    tplen: number;
    mprefix: string;
    mplen: number;
};
