import PropTypes from "prop-types"
function HeadingElement({title}){
    return <h1>{title}</h1>
}
HeadingElement.propTypes={
    type:PropTypes.string.isRequired,
    placeholder:PropTypes.string,
}
export default HeadingElement