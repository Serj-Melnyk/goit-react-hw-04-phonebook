import PropTypes from "prop-types"
import { Input, P } from "./FilterStyled"



export const Filter = ({ values, onChange }) => {

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


Filter.propTypes = {
    values: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};
