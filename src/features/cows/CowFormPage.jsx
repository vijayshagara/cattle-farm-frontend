import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { addCow, updateCow } from './cowSlice';

export default function CowFormPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const cow = useSelector(state =>
    state.cows.find(c => c.id === id)
  );

  const isEditMode = Boolean(id);

  const [form, setForm] = useState({
    name: '',
    breed: '',
    fatherName: '',
    motherName: '',
    gender: 'female',
    birthDate: '2023-01-01',
  });

  // Prefill form in edit mode
  useEffect(() => {
    if (isEditMode && cow) {
      setForm({
        name: cow.name || '',
        breed: cow.breed || '',
        fatherName: cow.fatherName || '',
        motherName: cow.motherName || '',
        gender: cow.gender || 'female',
        birthDate: cow.birthDate || '2023-01-01',
      });
    }
  }, [isEditMode, cow]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const submit = () => {
    if (!form.name || !form.breed) return;

    if (isEditMode) {
      dispatch(updateCow({ id, ...form }));
    } else {
      dispatch(addCow(form));
    }

    navigate('/');
  };

  return (
    <div className="page-wrapper">
      <div className="page-card" style={{ maxWidth: '500px', margin: '0 auto' }}>

        <h4 className="fw-bold mb-3">
          {isEditMode ? '✏️ Edit Cow' : '➕ Add New Cow'}
        </h4>

        <input
          className="form-control mb-2"
          placeholder="Cow Name"
          name="name"
          value={form.name}
          onChange={handleChange}
        />

        <input
          className="form-control mb-2"
          placeholder="Breed"
          name="breed"
          value={form.breed}
          onChange={handleChange}
        />

        <input
          className="form-control mb-2"
          placeholder="Father Name"
          name="fatherName"
          value={form.fatherName}
          onChange={handleChange}
        />

        <input
          className="form-control mb-2"
          placeholder="Mother Name"
          name="motherName"
          value={form.motherName}
          onChange={handleChange}
        />

        <select
          className="form-control mb-2"
          name="gender"
          value={form.gender}
          onChange={handleChange}
        >
          <option value="female">Female</option>
          <option value="male">Male</option>
        </select>

        <input
          type="date"
          className="form-control mb-3"
          name="birthDate"
          value={form.birthDate}
          onChange={handleChange}
        />

        <div className="d-flex gap-2">
          <button className="btn btn-success w-100" onClick={submit}>
            {isEditMode ? 'Update Cow' : 'Save Cow'}
          </button>

          <button
            className="btn btn-outline-secondary w-100"
            onClick={() => navigate('/')}
          >
            Cancel
          </button>
        </div>

      </div>
    </div>
  );
}
