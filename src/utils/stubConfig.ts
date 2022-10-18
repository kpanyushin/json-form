export const stubConfig = {
  title: "Simple form",
  description: "Simple form description",
  fields: {
    firstName: {
      type: "text",
      title: "First name",
      value: "Kirill",
      required: true,
    },
    lastName: {
      type: "text",
      title: "Last name",
      value: "Panyushin",
    },
    telephone: {
      type: "text",
      title: "Telephone",
    },
    experience: {
      type: "number",
      title: "Years of experience",
      value: 6,
    },
    bio: {
      type: "textarea",
      title: "Description",
    },
    birth: {
      type: "date",
      title: "Date of birth",
      value: "1993-01-02",
    },
    js: {
      type: "radio",
      name: "language",
      title: "Javascript",
      value: "Javascript",
    },
    cpp: {
      type: "radio",
      name: "language",
      title: "C++",
      value: "C++",
    },
    check: {
      type: "checkbox",
      title: "Checkbox example",
    },
  },
  buttons: {
    submit: {
      title: "Submit",
      type: "submit",
    },
    cancel: {
      title: "Cancel",
      type: "reset",
    },
  },
};
