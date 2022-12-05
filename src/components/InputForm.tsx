interface LabelProps {
	labelName?: string;
	type?: string;
	name: string;
	placeholder: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onBlur: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputForm = (props: LabelProps) => {
	const inputData = { ...props };
	delete inputData.labelName;

	return (
		<div className="input-container">
			<label htmlFor={props.name}>
				<span className="label">{props.labelName}</span>
				<input id={props.name} {...inputData} />
			</label>
		</div>
	);
};

export default InputForm;
