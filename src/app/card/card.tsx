"use client"
import { CSSProperties, useState, useEffect } from "react";
import { CardTypes } from "./types";
import { descritionImc } from "./const";
import style from './style.module.css'

export function Card({ typeInfo,imc }: CardTypes) {
  const [styleCard, setStyleCard] = useState<CSSProperties>({});
  const [descrition, setDescrition] = useState(descritionImc.downWeight);
   
  
  
   useEffect(() => {
    switch (typeInfo) {
      case 'downWeight':
        setStyleCard({...styleCard, background: "green" });
        setDescrition(descritionImc.downWeight)
        break;
      case 'overWeight':
        setStyleCard({...styleCard, background: "yellow" });
        setDescrition(descritionImc.overWeight)
        break;
      case 'obese':
        setStyleCard({...styleCard, background: "red" });
        setDescrition(descritionImc.obese)
        break;
      case 'normalWeight':
        setStyleCard({...styleCard, background: "blue" });
        setDescrition(descritionImc.normalWeight)
        break;
      default:
        setStyleCard({});
    }
  }, [ typeInfo]); // O efeito será executado toda vez que typeInfo mudar

  return (
    <div style={styleCard}
      className={style.mean}
    >
      <p className={style.p}
      >{descrition}</p>
    {imc  && 
   <p className={style.imc}
     > seu imc: {imc}
   </p>
 }
    </div>
  );
}
