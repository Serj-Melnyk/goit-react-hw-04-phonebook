import PropTypes from "prop-types"
import { Component } from "react"
import { Input, P } from "./FilterStyled"

export class Filter extends Component {


state = {
  contacts: [],
  filter: '',
  name: '',
  number: ''
   
}
    
    
        
    render() {
        const {values, onChange } = this.props
        // const { name, number} = this.state


        return (
            <div>
                <P> Find contacts by name</P>

                <Input
                    type="text"
                    values={values}
                    onChange={onChange}
                      />
            </div>
        )
    }
};

Filter.propTypes = {
    values: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};
