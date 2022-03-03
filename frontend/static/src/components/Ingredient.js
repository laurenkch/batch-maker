import Form from 'react-bootstrap/Form';

function Ingredient({ handleInput, index, removeIngredient, ingredients}) {

    return (
        <div>
            <Form.Label htmlFor='amount'></Form.Label>
            <Form.Control
                id='amount'
                name='amount'
                autoComplete='off'
                value={ingredients[index].amount}
                placeholder='Amount'
                onChange={(e) => handleInput(e, index)}
            />
            <Form.Label htmlFor='unit'></Form.Label>
            <Form.Control
                id='unit'
                name='unit'
                autoComplete='off'
                value={ingredients[index].unit}
                placeholder='Unit'
                onChange={(e) => handleInput(e,index)}
            />
            <Form.Label htmlFor='ingredient'></Form.Label>
            <Form.Control
                id='ingredient'
                name='ingredient'
                autoComplete='off'
                value={ingredients[index].ingredient}
                placeholder='Ingredient'
                onChange={(e) => handleInput(e,index)}
            />
            <button type='button' onClick={(e) =>removeIngredient(e,index)}>minus</button>
        </div>
    )

}

export default Ingredient