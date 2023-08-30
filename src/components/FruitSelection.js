import {useState} from "react";
import './fruit-selection.css';

function FruitSelection() {

    const [selectedFruit, setSelectedFruit] = useState('');

    //store a reference to what has already been clicked above

    function handleSubmit(e) {
        // Prevent the browser from reloading the page
        e.preventDefault();

        // Print the form data
        console.log(e.target)
    }

    function selectFruit(e) {

        //add the fruit-label-selected class to the label that was clicked
        //update the previously clicked label to use the standard styling fruit-label
        //assign or update state for the newly selected label

        const fruit = e.target.value;
        console.log(fruit);
        console.log(e.target)
        setSelectedFruit(fruit);
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <h2>What is your favorite fruit</h2>
                <input className='radio-button'
                       onClick={selectFruit}
                       type='radio'
                       id='fruit-1'
                       name='fave_fruit'
                       value='Orange'/>
                <label id='fruit-orange'
                       className='fruit-label'
                       htmlFor='fruit-1'>Orange</label>
                <input className='radio-button'
                       onClick={selectFruit}
                       type='radio'
                       id='fruit-2'
                       name='fave_fruit'
                       value='Strawberry' />
                <label id='fruit-strawberry'
                       className='fruit-label'
                       htmlFor='fruit-2'>Strawberry</label>
                <input className='radio-button'
                       onClick={selectFruit}
                       type='radio'
                       id='fruit-3'
                       name='fave_fruit'
                       value='Bananas' />
                <label id='fruit-bananas'
                       className='fruit-label'
                       htmlFor='fruit-3' >Bananas</label>
                <br/>
                <br/>
                <br/>
                <div>&#128512;  {selectedFruit}   &#128512;</div>
            </form>
        </div>
    );
}

export default FruitSelection;
