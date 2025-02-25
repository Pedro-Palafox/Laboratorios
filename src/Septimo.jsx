import PropTypes from 'prop-types'

export const Septimo = ({title,subTitle}) => {
    Septimo.PropTypes={
        title: PropTypes.string.isRequired,
        subTitle: PropTypes.string.isRequired
    }
  return (
    <>
    <h2> {title}</h2>
    <h3>{subTitle}</h3>
    </>
  )
}

