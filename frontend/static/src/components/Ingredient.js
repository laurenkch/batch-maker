import Form from 'react-bootstrap/Form';


function Ingredient({ removeIngredient, ingredientcount, step}) {

    return (
        <div>
            <Form.Label htmlFor='amount'></Form.Label>
            <Form.Control
                id='amount'
                name='amount'
                required
                autoComplete='off'
                value={step.ingredients[ingredientcount].amount}
                placeholder='Amount'
            />
            <Form.Label htmlFor='unit'></Form.Label>
            <Form.Control
                id='unit'
                name='unit'
                required
                autoComplete='off'
                value={step.ingredients[ingredientcount].unit}
                placeholder='Unit'
            />
            <Form.Label htmlFor='ingrediant'></Form.Label>
            <Form.Control
                id='ingredient'
                name='ingredient'
                required
                autoComplete='off'
                value={step.ingredients[ingredientcount].ingredient}
                placeholder='Ingredient'
            />
            <button type='button' onclick={removeIngredient}>minus</button>
        </div>
    )

}

export default Ingredient