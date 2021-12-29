import React, { useState } from 'react';

import useForm from '../hooks/useForm';

const SignUp = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  //Final submit function
  const formSubmit = () => {

    console.log("Callback function when form is submitted!");
    console.log("Form Values ", values);
    setIsSubmitted(true);
  }

  const { handleChange, values, errors, handleSubmit } = useForm(formSubmit);



  return (
    <div>
      <h2>Anmälan</h2>

      {!isSubmitted &&
        <div>
          <p>Var snäll och skicka ett eget svar för varje person som ska komma på festen, även barn. Glöm inte klicka på Skicka-knappen längst ned när du är klar.</p>
          <form className="signup-form" onSubmit={handleSubmit}>
            <label htmlFor="firstName" className="form-label">Förnamn</label>
            <input id="firstName" name="firstName" type="text" className="form-element" onChange={handleChange} />
            {
              errors.firstName && <p className="error">{errors.firstName}</p>
            }
            <label htmlFor="surName" className="form-label">Efternamn</label>
            <input id="surName" name="surName" type="text" className="form-element" onChange={handleChange} />
            {
              errors.surName && <p className="error">{errors.surName}</p>
            }
            <p className="form-paragraph">Jag är allergisk mot</p>
            <label htmlFor="gluten"><input type="checkbox" id="gluten" name="gluten" value="gluten" />Gluten</label>
            <label htmlFor="lactose"><input type="checkbox" id="lactose" name="lactose" value="lactose" />Laktos</label>
            <label htmlFor="milk"><input type="checkbox" id="milk" name="milk" value="milk" />Mjölkprotein</label>
            <label htmlFor="peanuts"><input type="checkbox" id="peanuts" name="peanuts" value="peanuts" />Jordnötter</label>
            <label htmlFor="hazelnuts"><input type="checkbox" id="hazelnuts" name="hazelnuts" value="hazelnuts" />Hasselnötter</label>
            <label htmlFor="other"><input type="checkbox" id="other" name="other" value="other" />Annat, skriv nedan</label>
            <input id="otherAllergy" type="text" className="form-element" />
            <p className="form-paragraph">Jag är</p>
            <label htmlFor="vegetarian"><input type="checkbox" id="vegetarian" name="vegetarian" value="vegetarian" />Vegetarian</label>
            <label htmlFor="vegan"><input type="checkbox" id="vegan" name="vegan" value="vegan" />Vegan</label>

            <p className="form-paragraph">Jag är</p>
            <label htmlFor="adult"><input type="radio" id="adult" name="age" value="adult" />Över 18 år</label>
            <label htmlFor="young"><input type="radio" id="young" name="age" value="young" />Annan ålder, skriv nedan</label>
            <input id="childsAge" name="age" type="text" className="form-element" onChange={handleChange} />
            {
              errors.age && <p className="error">{errors.age}</p>
            }
            <input type="submit" value="SKICKA" className="submit-button" />
          </form>
        </div>

      }
      {isSubmitted &&
        <div className="submitted-message">
          <p>Tack för ditt svar!</p>
          <button className="back-to-form-button" onClick={() => setIsSubmitted(false)}>Skicka ett till svar</button>
        </div>
      }
    </div>
  )
};
export default SignUp;