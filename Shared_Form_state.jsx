class LoginFormContainer extends Container {
  state = {
    name: "",
    password: "",
    email: "",
    phone: ""
  };
  onInput = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };
}
//and on the component side:
<Subscribe to={[AuthState]}>
  {({ onInput, state }) => (
    <Form>
      {[{ name: "email" }, { name: "password" }].map((field, i) => (
        <input
          key={field.name + i}
          name={field.name}
          value={state[field.name]}
          onChange={onChange}
        />
      ))}
    </Form>
  )}
</Subscribe>;
