import * as yup from "yup";
const mapValues = require("lodash/mapValues");

export const jsonSchema = yup
  .object()
  .shape({
    title: yup.string().notRequired(),
    desciption: yup.string().notRequired(),
    fields: yup.lazy((obj) =>
      yup
        .object(
          mapValues(obj, () =>
            yup.object().shape({
              type: yup
                .mixed()
                .oneOf(
                  ["text", "number", "textarea", "date", "radio", "checkbox"],
                  "Supported types of fields - text, number, textarea, date, radio, checkbox"
                )
                .required("Type of input is required"),
              title: yup.string().required("Title is required"),
              required: yup.boolean().notRequired(),
              value: yup.mixed().notRequired(),
              placeholder: yup.string().notRequired(),
            })
          )
        )
        .nullable()
        .required("Form inputs required")
    ),
    buttons: yup.lazy((obj) =>
      yup
        .object(
          mapValues(obj, () =>
            yup.object().shape({
              type: yup
                .mixed()
                .oneOf(
                  ["submit", "reset", "button"],
                  "Supported types of buttons - submit, reset, button"
                )
                .required(
                  "Type of button is required. At least one should be submit"
                ),
              title: yup.string().required("Title is required"),
              required: yup.boolean().notRequired(),
              value: yup.mixed().notRequired(),
              placeholder: yup.string().notRequired(),
            })
          )
        )
        .nullable()
    ),
  })
  .nullable();
