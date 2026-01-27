import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCow } from './cowSlice';

export default function CowDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const cow = useSelector(state =>
        state.cows.find(c => c.id === id)
    );

    if (!cow) return <p>Cow not found</p>;

    return (
        <div className="container mt-4">
            <div className="card p-4 shadow">
                <div className="cow-image-wrapper mb-4">
                    <img
                        src={
                            cow.image ||
                            'data:image/jpeg;base64,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'
                        }
                        alt={cow.name}
                        className="cow-image"
                    />
                </div>
                <h3 className="fw-bold">{cow.name}</h3>
                <p><strong>Breed:</strong> {cow.breed}</p>
                <p><strong>Gender:</strong> {cow.gender}</p>
                <p><strong>Date of Birth:</strong> {cow.birthDate}</p>

                <div className="d-flex gap-3 mt-4">
                    <button
                        className="btn btn-primary"
                        onClick={() => navigate(`/cows/edit/${cow.id}`)}
                    >
                        Edit
                    </button>

                    <button
                        className="btn btn-danger"
                        onClick={() => {
                            dispatch(deleteCow(cow.id));
                            navigate('/');
                        }}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
}
