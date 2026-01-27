import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCows } from './cowSlice';
import CowCard from './CowCard';
import { Link } from 'react-router-dom';

export default function CowListPage() {
  const dispatch = useDispatch();
  const cows = useSelector(state => {
    return state.cows;
  });
  console.log("🚀 ~ CowListPage ~ cows:", cows)

  useEffect(() => {
    dispatch(fetchCows());
  }, [dispatch]);

  return (
    <div className="page-wrapper">
      <div className="page-card">

        <div className="d-flex justify-content-between align-items-center mb-3">
          <div>
            <h3 className="mb-1">🐄 Cows</h3>
            <p className="page-subtitle">Manage your cattle records</p>
          </div>

          <Link to="/cows/add" className="btn btn-primary">
            ➕ Add Cow
          </Link>
        </div>

        <div className="row">
          {cows.length === 0 && (
            <p className="text-muted text-center mt-4">
              No cows added yet
            </p>
          )}

          {cows.map(cow => (
            <div key={cow.id} className="col-md-4 mb-4">
              <CowCard cow={cow} />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
