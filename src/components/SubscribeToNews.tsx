import InputForm from './InputForm';
import { useFormik } from 'formik';
import { SubscribeToNewsScheme } from '../schemes/scheme';

const SubscribeToNews = () => {
	const initialValues = {
		email: '',
		name: '',
	};
	const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
		initialValues,
		validationSchema: SubscribeToNewsScheme,
		onSubmit: (values, action) => {
			action.resetForm();
			console.log(values);
		},
	});
	return (
		<form onSubmit={handleSubmit}>
			<div>
				<h2>Subscribe to newsletter</h2>
				<div>
					<InputForm
						name="email"
						value={values.email}
						onChange={handleChange}
						onBlur={handleBlur}
						type="email"
						labelName="Email"
						placeholder="Email"
					/>
					{errors.email && touched.email ? (
						<p className="form-error">{errors.email}</p>
					) : null}
				</div>
				<div>
					<InputForm
						name="name"
						value={values.name}
						onChange={handleChange}
						onBlur={handleBlur}
						type="text"
						labelName="Name"
						placeholder="Name"
					/>
					{errors.name && touched.name ? (
						<p className="form-error">{errors.name}</p>
					) : null}
					<button type="submit">Subscribe</button>
				</div>
			</div>
		</form>
	);
};

export default SubscribeToNews;
