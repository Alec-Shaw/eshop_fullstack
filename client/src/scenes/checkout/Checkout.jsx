import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Box, Button, Stepper, Step, StepLabel } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import { shades } from "../../theme";

const initialValues = {
  billingAdress: {
    firsName: "",
    lastName: "",
    country: "",
    street: "",
    city: "",
    state: "",
    zip: "",
  },
  shipingAdress: {
    isSameAddress: true,
    firsName: "",
    lastName: "",
    country: "",
    street: "",
    city: "",
    state: "",
    zip: "",
  },
  email: "",
  phoneNumber: "",
};

const checkoutSchema = [
  yup.object().shape({
    billingAdress: yup.object().shape({
      firsName: yup.string().required("required"),
      lastName: yup.string().required("required"),
      country: yup.string().required("required"),
      street: yup.string().required("required"),
      city: yup.string().required("required"),
      state: yup.string().required("required"),
      zip: yup.string().required("required"),
    }),
    shipingAdress: yup.object().shape({
      isSameAddress: yup.boolean(),
      firsName: yup.string().when("isSameAddress", {
        is: false,
        then: yup.string().required("required"),
      }),
      lastName: yup.string().when("isSameAddress", {
        is: false,
        then: yup.string().required("required"),
      }),
      country: yup.string().when("isSameAddress", {
        is: false,
        then: yup.string().required("required"),
      }),
      street: yup.string().when("isSameAddress", {
        is: false,
        then: yup.string().required("required"),
      }),
      city: yup.string().when("isSameAddress", {
        is: false,
        then: yup.string().required("required"),
      }),
      state: yup.string().when("isSameAddress", {
        is: false,
        then: yup.string().required("required"),
      }),
      zip: yup.string().when("isSameAddress", {
        is: false,
        then: yup.string().required("required"),
      }),
    }),
  }),
  yup.object().shape({
    email: yup.string().required("required"),
    phoneNumber: yup.string().required("required"),
  }),
];

const Checkout = () => {
  const [activeStep, setActiveStep] = useState(0);
  const cart = useSelector((state) => state.cart.cart);
  const isFirstStep = activeStep === 0;
  const isSecondStep = activeStep === 1;

  const handleFormSubmit = async (value, acrions) => {
    setActiveStep(activeStep + 1);
  };

  async function makePayment(value) {}

  return (
    <Box width="80%" m="100px auto">
      <Stepper activeStep={activeStep} sx={{ m: "20px 0" }}>
        <Step>
          <StepLabel>Billing</StepLabel>
        </Step>
        <Step>
          <StepLabel>Payment</StepLabel>
        </Step>
      </Stepper>
      <Box>
        <Formik
          onSubmit={handleFormSubmit}
          initialValues={initialValues}
          validationSchema={checkoutSchema}
        ></Formik>
      </Box>
    </Box>
  );
};

export default Checkout;
