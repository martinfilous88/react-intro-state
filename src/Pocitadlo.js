
import { useState } from 'react';



function Pocitadlo() {

    const [pocet, setPocet, nastavBarvu,] = useState(0)
    const [viditelnost, nastavViditelnost] = useState(true)
    const [viditelnostObrazek, nastavViditelnostObrazek] = useState(false)






    return (
        <>
            {viditelnost &&
                <div>
                    <h2 style={{ color: "blue", fontSize: pocet }}>Font size:{pocet}</h2>
                    <button onClick={() => setPocet(pocet + 1)}>Klikni (+)</button><br></br>
                    <button onClick={() => setPocet(pocet - 1)}>Klikni(-)</button><br></br>
                    <button onClick={() => setPocet(pocet * pocet)}>Klikni(mocnina)</button><br></br>
                    <button onClick={() => setPocet(pocet / 2)}>Klikni(/)</button><br></br>
                    <button onClick={() => setPocet(pocet == 0)}>Klikni(reset)</button><br></br>
                </div>
            }
            {!viditelnost && <button onClick={() => nastavViditelnost(true)}>Zobrazit</button>}
            {viditelnost && <button onClick={() => nastavViditelnost(false)}>Skrýt</button>}<br></br>
            <button onClick={() => nastavViditelnostObrazek(!viditelnostObrazek)}>Zobraz/zakryj obrázek</button><br></br>
            <br></br>
            {viditelnostObrazek &&
            <img src="joke.jpeg"/>
        }


        </>

    );
}
export default Pocitadlo;