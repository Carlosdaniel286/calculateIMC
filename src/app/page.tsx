"use client"
import styles from "./page.module.css";
import { Card } from "./card/card";
import { Header } from "./header/header";
import { Imc } from "./CalculateIMC/calculateIMC";
import {   useState } from "react";
import { TypeInfo } from "./card/types";
type TypeInfoWithNull = TypeInfo | null 

export default function Home() {
  const [imcType, setImcType] = useState<TypeInfo | null>(null);
  const [imcValue, setImcValue] = useState<number | undefined>(undefined);
  
  
  const handleDataFromChild = (data:TypeInfoWithNull,ev?:number) => {
    setImcType(data); 
    setImcValue(ev)
    
  };
  
 
 
 
  return (
    <>
      <Header />
      <Imc
        OnCalculate={handleDataFromChild}
        
      />
      
      
      <div className={styles.page}>
        {imcType === null ? (
          <div
           className={styles.allCards}
          >
            <Card typeInfo="downWeight" />
            <Card typeInfo="normalWeight" />
            <Card typeInfo="obese" />
            <Card typeInfo="overWeight" />
          </div>
        ) : (
          <div
          className={styles.imcCard}
          >
          <Card 
          typeInfo={imcType} 
          imc={imcValue}
          /> 
          </div>
        )}
      </div>
    </>
  );
}
