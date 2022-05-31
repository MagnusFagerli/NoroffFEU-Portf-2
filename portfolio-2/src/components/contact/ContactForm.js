import React from "react";
import Button from "react-bootstrap/esm/Button";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Form from "react-bootstrap/Form";

const schema = yup.object().shape({
  name: yup
    .string()
    .required("Please enter your name")
    .min(3, "Minimum 3 characters"),
  email: yup
    .string()
    .required("Please enter a valid email address")
    .email("Please enter a valid email address"),
  message: yup
    .string()
    .required("Please provide a message for me!")
    .min(10, "The message must be at least 10 characters"),
});

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    console.log(data);
  }
  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="name" {...register("name")} />
          {errors.firstName && <span>{errors.name.message}</span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="name@example.com"
            {...register("email")}
          />
          {errors.email && <span>{errors.email.message}</span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Subject</Form.Label>
          <Form.Control as="textarea" rows={4} {...register("message")} />
          {errors.message && <span>{errors.message.message}</span>}
        </Form.Group>

        <button className="primary">Send</button>
      </Form>
    </>
  );
}

export default ContactForm;
