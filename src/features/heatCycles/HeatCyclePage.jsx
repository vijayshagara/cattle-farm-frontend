import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHeatCycles, addHeatCycle } from './heatCycleSlice';

export default function HeatCyclePage() {
  const dispatch = useDispatch();
  const cycles = useSelector(state => state.heatCycles);
  const [cowId, setCowId] = useState('');

  useEffect(() => {
    dispatch(fetchHeatCycles());
  }, [dispatch]);

  const submit = () => {
    dispatch(addHeatCycle({
      cowId,
      heatStartDate: new Date(),
      detectionMethod: 'manual'
    }));
  };

  return (
    <>
      <h3>🔥 Heat Cycles</h3>

      <input className="form-control mb-2" placeholder="Cow ID"
        onChange={e => setCowId(e.target.value)} />

      <button className="btn btn-primary" onClick={submit}>
        Add Heat Cycle
      </button>

      <ul className="list-group mt-3">
        {cycles.map(c => (
          <li key={c.id} className="list-group-item">
            {c.cowId} - {new Date(c.heatStartDate).toDateString()}
          </li>
        ))}
      </ul>
    </>
  );
}
