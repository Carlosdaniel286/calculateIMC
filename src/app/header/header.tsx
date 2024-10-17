import './header.css'


export function Header() {
     return(
        <header
         className="header"
        >
         <h1>Calculadora de IMC</h1> 
         <h5 
          className='h5'
         >IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.
         O índice é calculado da seguinte maneira: divide-se o peso do paciente pela sua altura elevada ao quadrado. Diz-se que o indivíduo tem peso normal quando o resultado do IMC está entre 18,5 e 24,9.</h5>
        </header>
    )

}