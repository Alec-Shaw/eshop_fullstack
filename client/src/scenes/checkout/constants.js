import * as yup from "yup";
import { loadStripe } from "@stripe/stripe-js";

//Checkout constants
export const initialValues = {
  billingAddress: {
    firstName: "",
    lastName: "",
    country: "",
    street: "",
    city: "",
    state: "",
    zip: "",
  },
  shippingAddress: {
    isSameAddress: true,
    firstName: "",
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

export const checkoutSchema = [
  yup.object().shape({
    billingAddress: yup.object().shape({
      firstName: yup.string().required("required"),
      lastName: yup.string().required("required"),
      country: yup.string().required("required"),
      street1: yup.string().required("required"),
      city: yup.string().required("required"),
      state: yup.string().required("required"),
      zipCode: yup.string().required("required"),
    }),
    shippingAddress: yup.object().shape({
      isSameAddress: yup.boolean(),
      firstName: yup.string().when("isSameAddress", {
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
      street1: yup.string().when("isSameAddress", {
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
      zipCode: yup.string().when("isSameAddress", {
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

export const stripePromise = loadStripe(
  "pk_test_51MG1RSGqJDRe22BnLXwZy7NuOnb9QSnCngPOuFSG6qhfPYED5JRaAxRA2dY69SRrLHEUudXxhmV5PrXvRnOCzXL400EfHy9uhc"
);
