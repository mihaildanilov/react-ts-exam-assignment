import InputForm from './InputForm';
import { useFormik } from 'formik';
import { SubscribeToNewsScheme } from '../schemes/scheme';

const SubscribeToNews = () => {
	const initialValues = {
		email: '',
		name: '',
	};
	const { values, errors, touched, handleBlur, handleChange } = useFormik({
		initialValues,
		validationSchema: SubscribeToNewsScheme,
		onSubmit: (values, action) => {
			action.resetForm();
			console.log(values);
		},
	});
	return (
		<form method="POST" action="https://www.w3schools.com/action_page.php">
			<div id="subscribe">
				<h2>Subscribe to newsletter</h2>
				<div id="inputs">
					<div>
						<InputForm
							name="email"
							value={values.email}
							onChange={handleChange}
							onBlur={handleBlur}
							type="email"
							labelName="Email"
							placeholder="Your email"
							errors={errors.email}
							touchedinput={touched.email}
						/>
					</div>
					<div>
						<InputForm
							name="name"
							value={values.name}
							onChange={handleChange}
							onBlur={handleBlur}
							type="text"
							labelName="Name"
							placeholder="Your name"
							errors={errors.name}
							touchedinput={touched.name}
						/>
					</div>
				</div>
				<input className="show-more button" type="submit" value="Subscribe" />
			</div>
		</form>
	);
};

export default SubscribeToNews;
