import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import Cookies from 'js-cookie';
import handleError from './../utility';
import Step from './Step';

function AdjustRecipe() {

    const INITIAL_STATE = {
        title: '',
        is_public: '',
        image: null,
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
 
    const [state, setState] = useState(INITIAL_STATE);
    const [stepcount, setStepCount] = useState(1);

    const handleInput = (e) => {
            const { name, value } = e.target

            setState((prevState) => ({
                ...prevState,
                [name]: value,
            }));
    };
    
    const handleRadioButton = (e) => {

        setState((prevState) => ({
            ...prevState,
            is_public: e.target.value,
        }));
    };

    const saveRecipe = async (e) => {
        e.preventDefault();
        const formData = new FormData();

        for (const [key, value] of Object.entries(state)) {
            if (key === 'steps') {
                formData.append('steps', JSON.stringify(value))
            } else if (value) {
                formData.append(key, value)
            }
        };

        for (var pair of formData.entries()) {
            console.log(pair[0] + ', ' + pair[1]);
        }

        const options = {
            method: 'POST',
            headers: {
                'X-CSRFToken': Cookies.get('csrftoken'),
            },
            body: formData,
        }
        const response = await fetch('api/v1/recipes/', options).catch(handleError);

        if (!response.ok) {
            throw new Error('Network was not ok');
        }
    }
    console.log(state)

    let stepHTML = Array.from(Array(stepcount)).map((slot, index) => <Step key={index} state={state} setState={setState} stepIndex={index}/>)

    return (
        <div>
            <Form className='form-inline' onSubmit={saveRecipe}>
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
                    <label className="form-check-label" htmlFor="make it public">Make it Public</label>
                    <input className="form-check-input" name='is_public' type="radio" id="make it public" value="true" onChange={handleRadioButton}/>
                </div>
                <div className="form-check form-check-inline">
                    <label className="form-check-label" htmlFor="keep it private">Keep it Private</label>
                    <input className="form-check-input" type="radio" id="keep it private" name='is_public' value="false" onChange={handleRadioButton}/>
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
                <Form.Label htmlFor='makes total'>This recipe will make</Form.Label>
                <Form.Control type='text' id='makes total' value={state.makes_total} onChange={handleInput} required autoComplete='off' name='makes_total' placeholder='Amount' />
                <Form.Label htmlFor='total descriptor' className='visually-hidden'></Form.Label>
                <Form.Control type='text' id='total descriptor' value={state.makes_descriptor} onChange={handleInput} required autoComplete='off' name='makes_descriptor' placeholder='Cookies, loaves, etc.' />

                {stepHTML}
                <button type='button' onClick={()=>setStepCount(stepcount+1)}>Add additional step</button>

                <h3>Personal Notes</h3>
                <Form.Label htmlFor='personal notes' className='visually-hidden'></Form.Label>
                <Form.Control as='textarea' rows={5} value={state.personal_notes} name='personal_notes' onChange={handleInput} />
            <button type='submit'>Save</button>
            </Form>
        </div>
    )
}

export default AdjustRecipe