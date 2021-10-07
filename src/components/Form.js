import './App.css';

function Form(props) {  
  return(
    <div 
    className="medium">

    <form 
    id="budget">

      <input 
      type="number" 
      id="budgetAmount" 
      name="budgetAmount"
      placeholder="What is your budget?"
      min="1"
      step="any"
      />
    </form>

    <p>{props.budgetAmount}</p>
  </div>
  )
};

export default Form;