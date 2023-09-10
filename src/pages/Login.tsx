import { Navigate } from "react-router-dom";
import { useForms } from "../hooks/useForms"

interface LoginProps {
  isAuth: boolean,
  handleLogin: (form: { email: string, password: string }) => void;
}

export const Login: React.FC<LoginProps> = (props) => {
  const { form, onChange } = useForms({ email: "", password: "" });

  const handleSubmit = (e: any): void => {
    e.preventDefault();

    props.handleLogin(form);
  }
  if (props.isAuth) {
    return <Navigate to="/" />
  }
  return (
    <div>
      <h4 >LOGIN</h4>
      <form onSubmit={handleSubmit}>
        <div style={{ margin: "10px" }}>
          <input
            name="email"
            type="text"
            placeholder="Email"
            value={form.email}
            onChange={onChange} />
        </div>
        <div style={{ margin: "10px" }}>
          <input
            name="password"
            type="text"
            placeholder="password"
            value={form.password}
            onChange={onChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}