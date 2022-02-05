const Input =  ({value, label, onChange}) => {
    return (
        <>
        <label>{label}</label>
        <input value={value} onChange={onChange}/>
        
        </>
    )
}

export default Input