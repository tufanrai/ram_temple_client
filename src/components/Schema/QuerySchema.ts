import * as yup from "yup";

export const QuerySchema = yup.object({
  full_name: yup.string().required("please enter your full name"),
  email: yup
    .string()
    .email("please enter a valid email")
    .required("please enter your email"),
  contactNumber: yup
    .number()
    .min(10, "your contact number must contain 10 degits.")
    .required("please enter your phone number"),
  query: yup.string().required("please describe your queries"),
});
