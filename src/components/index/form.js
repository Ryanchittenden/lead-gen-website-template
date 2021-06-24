import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function SignupForm() {
  const [state, handleSubmit] = useForm("contactForm");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email Address</label>
      <input id="email" type="email" name="email" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}

export default SignupForm;
