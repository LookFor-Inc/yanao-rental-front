import React from 'react'
import PropTypes from 'prop-types'
import {withRouter} from 'react-router'

/**
 * Route компонент, реализованный с помощью кнопки
 * @param {Object} props Передаваемые свойства
 * @returns {JSX.Element} Route компонент реализованный с помощью кнопки
 */
function LinkButton(props) {
  const {
    history,
    to,
    // eslint-disable-next-line no-unused-vars
    staticContext,
    onClick,
    ...rest
  } = props
  return (
    <button
      {...rest}
      onClick={event => {
        onClick && onClick(event)
        history.push(to)
      }}
    />
  )
}

LinkButton.propTypes = {
  onClick: PropTypes.func,
  history: PropTypes.object,
  to: PropTypes.string.isRequired,
  staticContext: PropTypes.object,
  children: PropTypes.node.isRequired
}

export default withRouter(LinkButton)
