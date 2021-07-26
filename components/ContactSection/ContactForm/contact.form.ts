import * as yup from 'yup';

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export const initialValues: ContactFormData = {
  email: '',
  name: '',
  message: '',
};

export const validationSchema = yup.object({
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Email is required'),
  name: yup
    .string()
    .min(3, 'Name should be of minimum 3 characters length')
    .required('Name is required'),
  message: yup
    .string()
    .min(50, 'Message should be of minimum 50 characters length')
    .required('message is required'),
});
