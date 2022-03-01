import Form from 'react-bootstrap/Form';
import FormCheck from 'react-bootstrap/FormCheck';
import { useState } from 'react';

function AdjustRecipe() {

    const INITIAL_STATE = {
        title: '',
        is_public: '',
        image: '',
        category: 'Din',
        prep_time: '',
        cook_time: '',
        cook_temp: '',
        temp_system: 'F',
        makes_total: '',
        makes_descriptor: '',
        personal_notes: '',
        steps: '',

    }
 
    const [state, setState] = useState(INITIAL_STATE)
    console.log(state);
    const handleInput = (e) => {
            const { name, value } = e.target

            setState((prevState) => ({
                ...prevState,
                [name]: value,
            }));
        };

    return (
        <div>
            <Form className='form-inline'>
                <h2>Basic Info</h2>
                <Form.Label className='visually-hidden' htmlFor='image upload'></Form.Label>
                <Form.Control
                    type='file'
                    id='image upload'
                    name='image'
                    placeholder='Add Photo'
                />
                <Form.Label className='visually-hidden' htmlFor='Recipe name'></Form.Label>
                <Form.Control
                    type='text'
                    id='recipe name'
                    name='title'
                    required
                    autoComplete='off'
                    onChange={handleInput}
                    value={state.title}
                    placeholder='Recipe Name'
                />

                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" id="make it public" value="true"/>
                        <label className="form-check-label" htmlFor="make it public">Make it Public</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" id="keep it private" value="false"/>
                        <label className="form-check-label" htmlFor="keep it private">Keep it Private</label>
                </div>
                <label htmlFor="recipe type" className='visually-hidden'></label>
                <select id="recipe type" className="category" onChange={((e) => setState((prevState) => ({
                    ...prevState,
                    category: e.target.value,
                })))}>
                    <option defaultValue>Recipe Type</option>
                    <option value="Bre">Breakfast</option>
                    <option value="Lun">Lunch</option>
                    <option value="Din">Dinner</option>
                    <option value="Des">Dessert</option>
                </select>
                <Form.Label className='visually-hidden' htmlFor='prep time'></Form.Label>
                <Form.Control
                    type='text'
                    id='prep time'
                    name='prep_time'
                    required
                    autoComplete='off'
                    onChange={handleInput}
                    value={state.prep_time}
                    placeholder='Prep Time'
                />
                <Form.Label className='visually-hidden' htmlFor='cook time'></Form.Label>
                <Form.Control
                    type='text'
                    id='cook time'
                    name='cook_time'
                    required
                    autoComplete='off'
                    onChange={handleInput}
                    value={state.cook_time}
                    placeholder='Cook Time'
                />
                <Form.Label className='visually-hidden' htmlFor='cook temparature'></Form.Label>
                <Form.Control
                    type='text'
                    id='cook temparature'
                    name='cook_temp'
                    required
                    autoComplete='off'
                    onChange={handleInput}
                    value={state.cook_temp}
                    placeholder='Cook Temp'
                />
                <label htmlFor="temperature system" className='visually-hidden'></label>
                <select id="temperature system" name="temp_system" onChange={((e) => setState((prevState) => ({
                    ...prevState,
                    temp_system: e.target.value,
                })))}>
                    <option value='F' defaultValue>F</option>
                    <option value="C">C</option>
                </select>
            </Form>
        </div>
    )
}

export default AdjustRecipe