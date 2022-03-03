import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import Ingredient from './Ingredient';

function Step({ setState, state }) {

    const INITIAL_STATE = {
        amount: '',
        unit: '',
        ingredient: '',
    }

    const [step, setStep] = useState({
        ingredients: {
            0: {
                amount: '',
                unit: '',
                ingredient: '',
            }
        },
        directions: '',
    })

    const [ingredientcount, setIngredientCount] = useState(0);

    const removeIngredient = (e) => {
        console.log(e.target.value);
    }


    const handleInput = (e, index) => {
        const { name, value } = e.target
        let newList = { ...step }
        newList.ingredients[index][name] = value
        setStep(newList);
        setState({
            ...state,
            steps: newList
        })
    };

    const handlePlus = () => {
        setIngredientCount(ingredientcount + 1);
        let newIngredientData = step.ingredients
        newIngredientData = { ...newIngredientData, [ingredientcount+1]: INITIAL_STATE };
        const newState = {...step, ingredients: newIngredientData}
        setStep(newState);
    }

    let ingredientHTML =
        Array.from(Array(ingredientcount))
            .map((slot, index) => 
                <Ingredient
                    key={index}
                    index={index+1}
                    {...step}
                    removeIngredient={removeIngredient}
                    handleInput={handleInput}
                />
        );


    return (
        <div>
            <h4>1</h4>
            <Form.Label htmlFor='amount'></Form.Label>
            <Form.Control
                id='amount'
                name='amount'
                required
                autoComplete='off'
                value={step.ingredients[0].amount}
                placeholder='Amount'
                onChange={(e) => handleInput(e,0)}
            />
            <Form.Label htmlFor='unit'></Form.Label>
            <Form.Control
                id='unit'
                name='unit'
                required
                autoComplete='off'
                value={step.ingredients[0].unit}
                placeholder='Unit'
                onChange={(e) => handleInput(e,0)}
            />
            <Form.Label htmlFor='ingrediant'></Form.Label>
            <Form.Control
                id='ingredient'
                name='ingredient'
                required
                autoComplete='off'
                value={step.ingredients[0].ingredient}
                placeholder='Ingredient'
                onChange={(e) => handleInput(e,0)}
            />
            <button type='button' onClick={handlePlus}>plus</button>
            {ingredientHTML}
        </div>
    )
}

export default Step