import React from 'react';

const SignUp = () => {
  return (
    <div>
      <h2>Anmälan</h2>
      <p>Var snäll och skicka ett eget svar för varje person som ska komma på festen, även barn. Glöm inte klicka på Skicka-knappen längst ned när du är klar.</p>
      <form className="signup-form">
        <label forHtml="firstName" className="form-label">Förnamn</label>
        <input id="firstName" type="text" className="form-element" />
        <label forHtml="SurName" className="form-label">Efternamn</label>
        <input id="surName" type="text" className="form-element" />
        <p className="form-paragraph">Jag är allergisk mot</p>
        <label forHtml="gluten"><input type="checkbox" id="gluten" name="gluten" value="gluten" />Gluten</label>
        <label forHtml="lactose"><input type="checkbox" id="lactose" name="lactose" value="lactose" />Laktos</label>
        <label forHtml="milk"><input type="checkbox" id="milk" name="milk" value="milk" />Mjölkprotein</label>
        <label forHtml="peanuts"><input type="checkbox" id="peanuts" name="peanuts" value="peanuts" />Jordnötter</label>
        <label forHtml="hazelnuts"><input type="checkbox" id="hazelnuts" name="hazelnuts" value="hazelnuts" />Hasselnötter</label>
        <label forHtml="other"><input type="checkbox" id="other" name="other" value="other" />Annat, skriv nedan</label>
        <input id="otherAllergy" type="text" className="form-element" />
        <p className="form-paragraph">Jag är</p>
        <label forHtml="vegetarian"><input type="checkbox" id="vegetarian" name="vegetarian" value="vegetarian" />Vegetarian</label>
        <label forHtml="vegan"><input type="checkbox" id="vegan" name="vegan" value="vegan" />Vegan</label>

        <p className="form-paragraph">Jag är</p>
        <label forHtml="adult"><input type="radio" id="adult" name="age" value="adult" />Över 18 år</label>
        <label forHtml="young"><input type="radio" id="young" name="age" value="young" />Annan ålder, skriv nedan</label>
        <input id="childsAge" type="text" className="form-element" />


        <input type="submit" value="SKICKA" className="submit-button" />

      </form>
    </div>
  )
};
export default SignUp;