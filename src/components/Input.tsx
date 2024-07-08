import useInput from "../hooks/useInput";

function Input() {

  const username = useInput( '')
  const password = useInput ( '')
  return (
  <div>
  <input {...username} type="text" placeholder='Username'/>
  <input {...password} type="text" placeholder='password'/>
  <button onClick={() => console.log(username.value,password.value)}>Click</button>
  </div>
  );
}

export default Input