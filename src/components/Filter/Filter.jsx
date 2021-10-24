export default function Filter({ value, onChange }) {
    return (
        <>
            <p>Find contacts by name</p>
            <label>
                <input
                    type="text"
                    name="filter"
                    value={value}
                    onChange={onChange}
                />
            </label>
        </>
    )
}