import { connect } from "react-redux";
import * as contactActions from "../../redux/contacts/contacts-actions";


function Filter({filter, onChange }) {
    return (
        <>
            <p>Find contacts by name</p>
            <label>
                <input
                    type="text"
                    name="filter"
                    value={filter}
                    onChange={onChange}
                />
            </label>
        </>
    )
}

const mapStateToProps = state => ({
    filter: state.contacts.filter
})

const mapDispatchToProps = dispatch => ({
    onChange: e => dispatch(contactActions.filterContacts(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

