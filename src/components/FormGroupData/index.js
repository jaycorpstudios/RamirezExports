import React from 'react';
import ThemeInput from './../ThemeInput';
import './FormGroupData.scss';

const createInputs = ({ fields = {}, fieldsOrder, handleInputData } = {}) => {

  return [...fieldsOrder.values()].map( fieldKey => {
    const field = fields[fieldKey];
    const { type } = field;
    if(type === 'textarea') {
      return null
    } else {
      return <ThemeInput
                key={fieldKey}
                name={fieldKey}
                onChange={handleInputData}
                autoComplete='offAutocomplete'
                {...field}
              />
    }
  })
}

class FormGroupData extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        fieldsOrder: new Map()
      }
    }
    componentDidMount() {
      // Ensure render fields in order
      const fieldsOrder = new Map();
      const { data = {} } = this.props;
      for(const field in data) {
        fieldsOrder.set(field, field)
      }
      this.setState({ fieldsOrder });
    }
    render(){
      const { handleInputData, data = {} } = this.props;
      const { fieldsOrder } = this.state;
      
      return(
        <React.Fragment>
            {createInputs({ fields: data, handleInputData, fieldsOrder })}
        </React.Fragment>
      )
    }
}

export default FormGroupData;