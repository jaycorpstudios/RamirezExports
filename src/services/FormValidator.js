import { isEmpty, isNumeric, isEmail, isISO8601 } from 'validator';

const availableValidations = {
  required: {
    validate: (value) => {
      return isEmpty(value.trim())
     },
    errorMessage: 'This field is required'
  },
  number: {
    validate: (value) => !isNumeric(value),
    errorMessage: 'Only numbers'
  },
  email: {
    validate: (value) => !isEmail(value),
    errorMessage: 'Please provide a valid email'
  },
  date: {
    validate: (value) => !isISO8601(value),
    errorMessage: 'Please provide a valid date'
  }
}

class FormValidator {

  constructor (validations){
    this.availableValidations = validations;
  }

  validateInput (data) {
    let input = {...data};
    const { validations = [] } = input;
    validations.some( validation => {
      const validator = this.availableValidations[validation];
      if(validator){
        const { value = '' } = input;
        const hasError = validator.validate(value);
        input.hasError = hasError;
        input.errorMessage = hasError ? validator.errorMessage : '';
      }
      return input.hasError;
    });
    return input;
  }

  validateFormSection(formSection) {
    return Object.keys(formSection).reduce( (validatedFormSection, inputKey) => {
      validatedFormSection[inputKey] = this.validateInput(formSection[inputKey])
      return validatedFormSection;
    }, {});
  }

  isFormSectionValid(formSection) {
    return !Object.keys(formSection).some( inputKey => {
      return formSection[inputKey].hasError;
    })
  }

  validateForm(form){
    return Object.keys(form).reduce( (validatedForm, sectionKey) => {
      validatedForm[sectionKey] = this.validateFormSection(form[sectionKey])
      return validatedForm;
    }, {});
  }

  isFormValid(formData){
    return !Object.keys(formData).some( formSectionKey => {
      const formSection = formData[formSectionKey];
      return Object.keys(formSection).some( inputKey => {
        return formSection[inputKey].hasError;
      })
    })
  }
}

export default new FormValidator(availableValidations);