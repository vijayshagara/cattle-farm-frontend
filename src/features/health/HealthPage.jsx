import { useDispatch, useSelector } from 'react-redux';
import { fetchHealth, addHealth } from './healthSlice';
import { useState,useEffect } from 'react';

export default function HealthPage() {
  const dispatch = useDispatch();
  const records = useSelector(state => state.health);

  const [cowId, setCowId] = useState('');
  const [temp, setTemp] = useState('');

  useEffect(() => {
    dispatch(fetchHealth());
  }, [dispatch]);

  const submit = () => {
    dispatch(addHealth({ cowId, temperature: temp }));
  };

  return (
    <>
      <h3>🩺 Health Records</h3>

      <input className="form-control mb-2" placeholder="Cow ID"
        onChange={e => setCowId(e.target.value)} />

      <input className="form-control mb-2" placeholder="Temperature"
        onChange={e => setTemp(e.target.value)} />

      <button className="btn btn-primary" onClick={submit}>
        Add
      </button>

      <ul className="list-group mt-3">
        {records.map(r => (
          <li key={r.id} className="list-group-item">
            {r.cowId} - {r.temperature}
          </li>
        ))}
      </ul>
    </>
  );
}
