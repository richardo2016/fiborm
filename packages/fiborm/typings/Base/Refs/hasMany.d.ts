import type { FxOrmModel } from '../../@types/model';
declare const _default: (this: FxOrmModel.Class_Model, model: FxOrmModel.Class_Model, opts?: {
    as?: string;
    collection?: string;
    type?: "m2m" | "o2m";
}) => FxOrmModel.Class_MergeModel;
export = _default;
