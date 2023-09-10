import { useForms } from "../hooks/useForms"

export const Register = () => {
  const { form, onChange } = useForms({
    name: "",
    age: 0,
    email: "",
    password: ""
  })
  const handleSubmit = (): void => {

  }
  return (
    <div>
      <h4 >Register</h4>
      <form action="" onSubmit={handleSubmit}>
        <div style={{ margin: "10px" }}>
          <input name="name" value={form.name} onChange={onChange} type="text" placeholder="Name" />
        </div>
        <div style={{ margin: "10px" }}>
          <input name="age" value={form.age} onChange={onChange} type="number" placeholder="Age" />
        </div>
        <div style={{ margin: "10px" }}>
          <input name="email" value={form.email} onChange={onChange} type="text" placeholder="Email" />
        </div>
        <div style={{ margin: "10px" }}>
          <input name="password" value={form.password} onChange={onChange} type="text" placeholder="password" />
        </div>
      </form>
    </div>
  )
}