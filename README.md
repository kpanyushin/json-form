# Schema Description

Usual attributes (`type`, `name`, `value`, `placeholder`, etc.) for `input` and `textarea` are used.
Supported types of fields - `text`, `number`, `date`, `radio`, `checkbox`, `textarea`.
Several `radio` inputs with equal `name` attribute are switchable.
There should be at least one element in `fields` to create form.

**Schema example:**

```json
{
  "title": "Simple form",
  "description": "Simple form description",
  "fields": {
    "firstName": {
      "type": "text",
      "title": "First name",
      "value": "Kirill",
      "required": true
    },
    "lastName": {
      "type": "text",
      "title": "Last name",
      "value": "Panyushin"
    },
    "telephone": {
      "type": "text",
      "title": "Telephone"
    },
    "experience": {
      "type": "number",
      "title": "Years of experience",
      "value": 6
    },
    "bio": {
      "type": "textarea",
      "title": "Description"
    },
    "birth": {
      "type": "date",
      "title": "Date of birth",
      "value": "1993-01-02"
    },
    "js": {
      "type": "radio",
      "name": "language",
      "title": "Javascript",
      "value": "Javascript"
    },
    "cpp": {
      "type": "radio",
      "name": "language",
      "title": "C++",
      "value": "C++"
    },
    "check": {
      "type": "checkbox",
      "title": "Checkbox example"
    }
  },
  "buttons": {
    "submit": {
      "title": "Submit",
      "type": "submit"
    },
    "cancel": {
      "title": "Cancel",
      "type": "reset"
    }
  }
}
```

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
