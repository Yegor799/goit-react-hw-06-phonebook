import { connect } from "react-redux";
import * as contactActions from "../../redux/contacts/contacts-actions";


function Filter({onChange }) {
    return (
        <>
            <p>Find contacts by name</p>
            <label>
                <input
                    type="text"
                    name="filter"
                    onChange={onChange}
                />
            </label>
        </>
    )
}

const mapDispatchToProps = dispatch => ({
    onChange: e => dispatch(contactActions.filterContacts(e.target.value)),
});

export default connect(null, mapDispatchToProps)(Filter);

