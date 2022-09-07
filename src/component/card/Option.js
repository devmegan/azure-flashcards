
export default function Option({ option, setSelected }) {
    return (
        <label className="label cursor-pointer">
        <span className="label-text">{option}</span> 
        <input 
          className="radio radio-primary" 
          name="options" 
          onClick={() => setSelected(option)} 
          type="radio" 
        />
      </label>
    );
}