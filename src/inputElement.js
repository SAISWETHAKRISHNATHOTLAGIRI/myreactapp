import PropTypes from "prop-types"
function InputElement({type,placeholder}){
return (<input type={type} placeholder={placeholder}/>);
}
InputElement.propTypes={
    type:PropTypes.string,
    placeholder:PropTypes.string,
}
export default  InputElement;