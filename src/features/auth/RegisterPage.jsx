import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from './authSlice';

export default function RegisterPage() {
  const [form, setForm] = useState({});
  const dispatch = useDispatch();

  return (
    <div>
      <h3>Register</h3>
      <input placeholder="Name" onChange={e => setForm({ ...form, name: e.target.value })} />
      <input placeholder="Email" onChange={e => setForm({ ...form, email: e.target.value })} />
      <input type="password" placeholder="Password" onChange={e => setForm({ ...form, password: e.target.value })} />
      <select onChange={e => setForm({ ...form, role: e.target.value })}>
        <option value="developer">Developer</option>
        <option value="admin">Admin</option>
      </select>
      <button onClick={() => dispatch(register(form))}>Register</button>
    </div>
  );
}
