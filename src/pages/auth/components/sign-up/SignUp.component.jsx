import axios from "axios";
import Button from "src/components/button/Button.component";
import Input from "src/components/input/Input.component";
import useInput from "src/hooks/useInput.hook";

const SignUp = () => {
  const { inputState, handleInput } = useInput();

  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios.post("auth/signup", inputState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>I do not have a account</h1>
      <p>Sign up with your email and password</p>
      <Input
        name="name"
        label="Display name"
        onChange={handleInput}
        value={inputState.name}
        required
      />
      <Input
        name="email"
        type="email"
        required
        label="Email"
        value={inputState.email}
        onChange={handleInput}
      />
      <Input
        name="password"
        type="password"
        required
        label="Password"
        value={inputState.password}
        onChange={handleInput}
      />
      <Input
        name="passwordConfirm"
        type="password"
        required
        label="Confirm password"
        value={inputState.passwordConfirm}
        onChange={handleInput}
      />
      <Button type="submit">Sign Up</Button>
    </form>
  );
};

export default SignUp;
