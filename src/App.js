import React, { useState } from 'react';
import './App.css';
import Counter from "./components/Counter";
import Button from './components/Button';
import Inputfield from "./components/Input";

function App() {
    const [strawberry, setStrawberry] = useState(0);
    const [banana,setBanana] = useState(0);
    const [apple, setApple] = useState(0);
    const [kiwi, setKiwi] = useState(0);

    const [formState, setFormState] = useState({
        name: '',
        surname: '',
        age: 0,
        zipcode: '',
        delivery: 'week',
        timeslot: 'daytime',
        remark: '',
        agreement: false,
    })

    function handleFormChange(e) {
        const inputName = e.target.name;
        const inputValue = e.target.type === 'checkbox' ? e.target.checked : e.target.value;

        setFormState({
            ...formState,
            [inputName]: inputValue,
        })
    }

function resetFruitcounter() {
     setStrawberry (0);
     setBanana(0);
     setApple(0);
     setKiwi(0);
}
function handleClick(e){
e.preventDefault();
    console.log(formState);
console.log(`Bestelling - aardbeien: ${strawberry}, bananen: ${banana}, appel: ${apple}, kiwi: ${kiwi}`)
}

  return (
    <>
      <h1>Fruitmand bezorgservice</h1>
        <section className="Fruit-container">
            <article>
                <h2>🍓 Aardbeien</h2>
                <Counter
                    fruitCount={strawberry}
                    setFruitcount={setStrawberry}
                />
            </article>
            <article>
                <h2>🍌 Bananen</h2>
                <Counter
                    fruitCount={banana}
                    setFruitcount={setBanana}
                />
            </article>
            <article>
                <h2>🍏 Appels</h2>
                <Counter
                    fruitCount={apple}
                    setFruitcount={setApple}
                />
            </article>
            <article>
                <h2>🥝 Kiwi's</h2>
                <Counter
                    fruitCount={kiwi}
                    setFruitcount={setKiwi}
                />
            </article>
            <Button
            type="button"
            clickHandler={resetFruitcounter}
            >Reset
            </Button>
        </section>

        <form onSubmit={handleClick}>
            <section>
                <Inputfield
                name="name"
                label="name-field"
                inputType="text"
                value={formState.name}
                changeHandler={handleFormChange}
                />
            </section>
            <section>
                <Inputfield
                    name="surname"
                    label="surname-field"
                    inputType="text"
                    value={formState.surname}
                    changeHandler={handleFormChange}
                />
            </section>
            <section>
                <Inputfield
                    name="age"
                    label="age-field"
                    inputType="number"
                    value={formState.age}
                    changeHandler={handleFormChange}
                />
            </section>
            <section>
                <Inputfield
                    name="zipcode"
                    label="zipcode-field"
                    inputType="text"
                    value={formState.zipcode}
                    changeHandler={handleFormChange}
                />
            </section>
            <section>
                <label htmlFor="delivery-field">Bezorgfrequentie</label><br/>
                <select id="delivery-field" name="delivery" value={formState.delivery} onChange={handleFormChange}>
                    <option value="weekly">iedere week</option>
                    <option value="bi-weekly">om de week</option>
                    <option value="monthly">iedere maand</option>
                </select>
            </section>
            <section>
                <input type="radio" id="morning-field" name="morning" value={formState.timeslot} onChange={handleFormChange}/>
                    <label htmlFor="morning-field">Overdag</label><br/>
                    <input type="radio" id="night-field" name="night" value={formState.timeslot} onChange={handleFormChange} />
                        <label htmlFor="night-field">'s Avonds</label>
            </section>
            <section>
                <label htmlFor="comment-field">Opmerking</label>
                <textarea name="comment" id="comment-field"  value={formState.remark} onChange={handleFormChange}
                rows={8} cols={45}
                />
            </section>
            <section>
                <input type="checkbox" id="conditions" name="conditions" value={formState.agreement} onChange={handleFormChange}/>
                <label htmlFor="conditions">Ik ga akkoord met de voorwaarden</label>
            </section>
            <Button
            type="submit"
            >Verzend
            </Button>
        </form>
    </>
  );
}

export default App;
