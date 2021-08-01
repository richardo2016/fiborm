/// <reference types="@fibjs/types" />
import type { FxOrmModel } from '../../@types/model';
declare const _default: (this: FxOrmModel.Class_Model, properties: FIBJS.GeneralObject, opts: {
    as: string;
    collection?: string;
    sourceForJoin?: string;
    joinNodeSource?: string;
}) => FxOrmModel.Class_MergeModel;
export = _default;
