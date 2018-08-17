import React, {PureComponent} from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import './Switch.css'

interface SwitchProps {
  className: string,
  onChange: (checked: boolean) => void,
  checkBackgroudColor: string,
  disabled: boolean,
  checked: boolean
}

class Switch extends React.PureComponent<SwitchProps> {
  constructor(props) {
    super(props)
    let checked = false
    if ('checked' in props) {
      checked = !!props.checked
    }
    this.state = {checked}
  }
  setCheckedValue (checked:boolean) {
    if (this.props.disabled) {
      return
    }
    this.setState({
      checked
    })
    if (this.props.onChange) {
      this.props.onChange(checked)
    }
  }
  toggle = () => {
    this.setCheckedValue(!this.state.checked)
  }
  render (): React.Element {
    console.log(this.props.checked)
    const {className, checkBackgroudColor, disabled} = this.props
    const {checked} = this.state
    return (
      <span className={
        classnames('xerxes-switch', className, {
          'switch-checked': !disabled && checked,
          'switch-disabled': disabled
        })}
        style={{
          backgroundColor: checked ? checkBackgroudColor : '#ccc'
        }}
        onClick={this.toggle}
        >
        <span className="xerxes-switch__inner"></span>
      </span>
    )
  }
}

Switch.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func,
  checkBackgroudColor: PropTypes.string,
  disabled: PropTypes.bool,
  checked: PropTypes.bool
}

Switch.defaultProps = {
  checkBackgroudColor: '#1AAD19'
}

export default Switch
