import Option from "./Option";
import Submit from "./Submit";

export default function Card({ question }) {
    return (
            <div className="card w-full max-w-md bg-gray-800 shadow-xl mx-auto">
                <div className="card-body">
                    <p className="text-sm">{question.objective}</p>
                    <p className="text-primary mb-2 text-sm font-semibold">{question.type}</p>
                    <p>{question.question}</p>
                    <div className="form-control">
                        {question.options.map((option) => <Option option={option} />)}
                    </div>
                    <Submit />
                </div>
            </div>
    );
}