interface LinkedNode<TP = any> {
    _uuid: string;
    prev: LinkedNode<TP>;
    next: LinkedNode<TP>;
    data?: TP;
}
export default class LinkedList<TP = any> {
    private _head;
    private _tail;
    private _count;
    get head(): LinkedNode<TP>;
    addHead(data: TP): LinkedNode<TP>;
    get tail(): LinkedNode<TP>;
    addTail(data: TP): LinkedNode<TP>;
    get count(): number;
    remove(node: LinkedNode<TP>): number;
    clear(): void;
    toJSON: () => TP[];
}
export {};
