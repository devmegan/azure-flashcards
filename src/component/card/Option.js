
export default function Option({ option }) {
    return (
        <label className="label cursor-pointer">
        <span className="label-text">{option}</span> 
        <input type="radio" name="options" className="radio radio-primary" />
      </label>
    );
}