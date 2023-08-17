
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const contactFormSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    message: Yup.string().required('Message is required'),
  });

const ContactForm = () => {
    const handleSubmit = (values, { resetForm }) => {
      
      console.log(values);
      resetForm();
    };
  
    return (
      <Formik
        initialValues={{ name: '', email: '', message: '' }}
        validationSchema={contactFormSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <label htmlFor="name">Name</label>
              <Field type="text" id="name" name="name" />
              <ErrorMessage name="name" component="div" className="error" />
            </div>
  
            <div>
              <label htmlFor="email">Email</label>
              <Field type="email" id="email" name="email" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>
  
            <div>
              <label htmlFor="message">Message</label>
              <Field as="textarea" id="message" name="message" />
              <ErrorMessage name="message" component="div" className="error" />
            </div>
  
            <button type="submit" >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    );
  };
 export default ContactForm; 