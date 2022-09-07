export default function Submit({ handleSubmit }) {
    return (
        <div className="card-actions mx-auto">
            <button className="btn btn-primary btn-outline" onClick={handleSubmit}>Check</button>
        </div>
    );
}