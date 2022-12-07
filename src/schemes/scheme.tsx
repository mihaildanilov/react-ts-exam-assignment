import * as Yup from 'yup';

export const SubscribeToNewsScheme = Yup.object({
	email: Yup.string().email('Email must be valid').required('Please enter your email'),
	name: Yup.string().max(40, 'Name is too long').required('Please enter your name'),
});
