import './calculateIMC.css';
import { ChangeEvent, useEffect, useState } from 'react';
import { ImcType } from './typeImc';
import { TypeInfo } from '../card/types';

export function Imc({ OnCalculate }: ImcType) {
    const [imcValue, setImcValue] = useState({
        height: '',
        weight: ''
    });

    const Onclick = OnCalculate ? OnCalculate : (() => {});

    function handleZero() {
        if (imcValue.height === '' && imcValue.weight === '') {
            Onclick(null);
        }
    }

    useEffect(() => {
        handleZero();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [imcValue.height, imcValue.weight]);

    const handleHeightInput = (event: ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        const sanitizedValue = inputValue.replace(/[^0-9.]/g, '');

        if (sanitizedValue.length > 4) return;

        const include = sanitizedValue.includes('.');
        const formattedValue = include ? sanitizedValue : sanitizedValue.replace(/(\d)(?=\d)/, '$1.');

        const parse = Number(formattedValue);
        if (sanitizedValue === '') setImcValue({ ...imcValue, height: formattedValue });
        if (isNaN(parse) || parse === 0) return;

        setImcValue({ ...imcValue, height: formattedValue });
    };

    const handleWeightInput = (event: ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        const sanitizedValue = inputValue.replace(/[^0-9.]/g, '');
        const output = sanitizedValue.replace(/[^0-9]/g, '');

        if (inputValue === '') setImcValue({ ...imcValue, weight: inputValue });

        if (sanitizedValue.length > 6) return;
        const parse = Number(output);

        if (isNaN(parse) || parse === 0) return;

        const numer = output.length > 2 ? (parse / 100).toFixed(2) : output;
        setImcValue({ ...imcValue, weight: numer.toString() });
    };

    const handleCalculate = () => {
        if(imcValue.height.trim()=='' || imcValue.weight.trim()=='') return
        const imc = Number(imcValue.weight) / (Number(imcValue.height) * Number(imcValue.height));

        let typeInfo: TypeInfo;
        if (imc < 18.5) {
            typeInfo = "downWeight";
        } else if (imc >= 18.5 && imc < 24.9) {
            typeInfo = "normalWeight";
        } else if (imc >= 25 && imc < 29.9) {
            typeInfo = "overWeight";
        } else {
            typeInfo = "obese";
        }

        Onclick(typeInfo, Number(imc.toFixed(2)));
    };

    return (
        <div id='means'>
            <input
                className='input'
                type="text"
                placeholder="Altura (m)"
                value={imcValue.height}
                onChange={handleHeightInput}
            />
            <input
                className='input'
                type="text"
                placeholder="Peso (kg)"
                value={imcValue.weight}
                onChange={handleWeightInput}
            />
            <button
                className='button'
                onClick={handleCalculate}
                style={{ background: 'blue' }}
            >
                calcular
            </button>
            <button
                onClick={() => {
                    Onclick(null);
                    setImcValue({ ...imcValue, height: '', weight: '' });
                }}
                style={{ background: 'orange' }}
                className='button'
            >
                limpar
            </button>
        </div>
    );
}
