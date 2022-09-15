import React from 'react';
import './App.css';
import { useState } from "react";

function App() {
    const [strawberry, setStrawberry] = useState(0);
    const [banana,setBanana] = useState(0);
    const [apple, setApple] = useState(0);
    const [kiwi, setKiwi] = useState(0);

function resetFruitcounter() {
     setStrawberry (0);
     setBanana(0);
     setApple(0);
     setKiwi(0);
}

  return (
    <>
      <h1>Fruitmand bezorgservice</h1>
        <section className="Fruit-container">
            <article>
                <h2>🍓 Aardbeien</h2>
                <button
                    type="button"
                    disabled={strawberry ===0}
                    onClick={()=>setStrawberry(strawberry-1)}
                >-</button>
                <p>{strawberry}</p>
                <button
                    type="button"
                    onClick={()=>setStrawberry(strawberry+1)}
                >+</button>
            </article>
            <article>
                <h2>🍌 Bananen</h2>
                <button
                    type="button"
                    disabled={banana ===0}
                    onClick={()=>setBanana(banana-1)}
                >-</button>
                <p>{banana}</p>
                <button
                    type="button"
                    onClick={()=>setBanana(banana+1)}
                >+</button>
            </article>
            <article>
                <h2>🍏 Appels</h2>
                <button
                    type="button"
                    disabled={apple ===0}
                    onClick={()=>setApple(apple-1)}
                >-</button>
                <p>{apple}</p>
                <button
                    type="button"
                    onClick={()=>setApple(apple+1)}
                >+</button>
            </article>
            <article>
                <h2>🥝 Kiwi's</h2>
                <button
                    type="button"
                    disabled={kiwi ===0}
                    onClick={()=>setKiwi(kiwi-1)}
                >-</button>
                <p>{kiwi}</p>
                <button
                    type="button"
                    onClick={()=>setKiwi(kiwi+1)}
                >+</button>
            </article>
            <button
            type="button"
            onClick={()=>resetFruitcounter()}
            >Reset
            </button>
        </section>

        <form>
            <section>
                <label
                    htmlFor="Voornaam"

                >Voornaam</label>
                <input
                    type="text"

                />
            </section>

            <section>
                <label
                    htmlFor="Achternaam"

                >Achternaam</label>
                <input
                    type="text"

                />
            </section>

            <section>
                <label
                    htmlFor="Leeftijd"

                >Leeftijd</label>
                <input
                    type="number"


                />
            </section>

            <section>
                <label
                htmlFor="Postcode"

                >Postcode</label>
                <input
                type="text"

                />
            </section>

            <section>
                <label>Bezorgfrequentie</label>
                <input/>
            </section>

            <section>
                <label></label>
                <input/>
            </section>

            <section>
                <label>Opmerking</label>
                <input/>
            </section>

            <section>
                <label></label>
                <input/>
            </section>

            <button>
                Verzend
            </button>

        </form>

    </>
  );
}

export default App;
