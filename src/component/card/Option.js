
export default function Option({ option }) {
    return (
        <label className="label cursor-pointer">
            <span className="label-text text-md">{option}</span> 
            <input type="radio" name={option} className="radio radio-primary" />
        </label>
    );
}