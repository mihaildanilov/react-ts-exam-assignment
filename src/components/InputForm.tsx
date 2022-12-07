interface LabelProps {
	labelName?: string;
	type?: string;
	name: string;
	placeholder: string;
	value: string;
	touchedinput: boolean | undefined;
	errors: string | undefined;
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
				<input id={props.name} {...inputData} required />
			</label>
			{props.errors && props.touchedinput ? (
				<p className="form-error">{props.errors}</p>
			) : null}
		</div>
	);
};

export default InputForm;
