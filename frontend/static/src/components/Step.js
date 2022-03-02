import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import Ingredient from './Ingredient';

function Step({ setState, state }) {

    const [step, setStep] = useState({
        ingredients: [
            {
                amount: '',
                unit: '',
                ingredient: '',

            },
        ],
        directions: '',

    })
    const [ingredientcount, setIngredientCount] = useState(0);
    const [ingredientlist, setIngredientList]=[]

    const removeIngredient = (e) => {
        console.log(e.target.value);
    }


    const ingredientHTML =
        Array.from(Array(ingredientcount))
            .map((slot, index) => {
                <Ingredient key={index} step={step} removeIngredient={removeIngredient} ingredientcount={ingredientcount}/>
        });

    const handleInput = (e) => {
        console.log(e.target.value)
    };

    return (
        <div>
            {ingredientHTML}
            <Form.Label htmlFor='amount'></Form.Label>
            <Form.Control
                id='amount'
                name='amount'
                required
                autoComplete='off'
                value={step.ingredients[ingredientcount].amount}
                placeholder='Amount'
                onChange= {handleInput}
            />
            <Form.Label htmlFor='unit'></Form.Label>
            <Form.Control
                id='unit'
                name='unit'
                required
                autoComplete='off'
                value={step.ingredients[ingredientcount].unit}
                placeholder='Unit'
                onChange={handleInput}
            />
            <Form.Label htmlFor='ingrediant'></Form.Label>
            <Form.Control
                id='ingredient'
                name='ingredient'
                required
                autoComplete='off'
                value={step.ingredients[ingredientcount].ingredient}
                placeholder='Ingredient'
                onChange={handleInput}
            />
            <button type='button' onClick={() => setIngredientCount(ingredientcount + 1)}>plus</button>
        </div>
    )
}

export default Step