import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import Ingredient from './Ingredient';

function Step({ setState, state, stepIndex}) {

    const INITIAL_STATE = {
        amount: '',
        unit: '',
        ingredient: '',
    }

    const [step, setStep] = useState({
        ingredients: [ {
                amount: '',
                unit: '',
                ingredient: '',
            },
        ],
        directions: '',
    })

    const removeIngredient = (e, index) => {
        
        const copy = step.ingredients
        copy.splice(index, 1)

        setStep((prevStep) => ({
            ...prevStep,
            [prevStep.ingredients] : copy
        }));

    }

    // const handleInput = (e, index) => {
    //     const { name, value } = e.target
    //     setStep((prevStep) => ({
    //         ...prevStep,
    //         ingredients[index][name]: value,
    //     }))
    // };

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
        let newIngredientData = step.ingredients
        newIngredientData = [ ...newIngredientData, INITIAL_STATE ];
        const newState = { ...step, ingredients: newIngredientData };
        setStep(newState);
    }


    let ingredientHTML = step.ingredients.map((ingredient, index) => (
            <Ingredient
                key={index}
                index={index}
                {...step}
                removeIngredient={removeIngredient}
                handleInput={handleInput}
            />
    ));

    return (
        <div>
            <h4>Step {stepIndex+1}</h4>
            {ingredientHTML}
            <button type='button' onClick={handlePlus}>plus</button>
            <Form.Label htmlFor='directions'></Form.Label>
            <Form.Control
                id='directions'
                name='directions'
                required
                autoComplete='off'
                as='textarea'
                rows={4}
                value={step.directions}
                placeholder='What directions go with this step?'
                onChange={(e)=>setStep((prevStep) =>({...prevStep, [e.target.name]:e.target.value}) )}
            />
        </div>
    )
}

export default Step