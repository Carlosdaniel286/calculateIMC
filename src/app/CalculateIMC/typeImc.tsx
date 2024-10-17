import { TypeInfo } from "../card/types";

type TypeInfoWithNull = TypeInfo | null;

export type ImcType = {
    OnCalculate?:(imc:TypeInfoWithNull,ev?:number) => void;
    
}