import React from 'react'
import ReactDOM from 'react-dom'
import Switch from '../src'

class App extends React.Component {
  state = {
    checked1: false,
    checked2: true
  }
  handleOnChange1 = (checked) => {
    console.log('checked ===============', checked)
    this.setState({checked1: checked})
  }
  handleOnChange2 = (checked) => {
    this.setState({checked2: checked})
  }
  render () {
    return (
      <div style={{
        marginLeft: '100px'
      }}>
        <h2>switch 基本</h2>
        <Switch onChange={this.handleOnChange1} checked={this.state.checked1} />
        <h2>switch 默认选中的</h2>
        <Switch onChange={this.handleOnChange2} defaultChecked checked={this.state.checked2} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root') as HTMLElement)
