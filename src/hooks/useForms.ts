import React, { useState } from "react"

export const useForms = (defaultValues: any) => {
  const [form, setForm] = useState(() => defaultValues ?? {});

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setForm({
      ...form,
      [e.target.name]: e.target.type === 'number' ? Number(e.target.value) : e.target.value
    })
  }

  return { form, onChange }
}