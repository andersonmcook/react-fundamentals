import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      txt: 'this is the state text'
    }
    this.update = this.update.bind(this)
  }

  update (event) {
    this.setState({txt: event.target.value})
  }

  render () {
    return (
      <Widget txt={this.state.txt} update={this.update} />
    )
  }
// before widget implemented
  // render () {
  //   return (
  //     <div>
  //       <input type='text' onChange={this.update} />
  //       <h1>{this.state.txt}</h1>
  //     </div>
  //   )
  // }
}

App.propTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
}

App.defaultProps = {
  txt: 'default text'
}

const Widget = (props) => {
  return (
    <div>
      <input type='text' onChange={props.update} />
      <h1>{props.txt}</h1>
    </div>
  )
}

ReactDOM.render(<App cat={5}/>, document.getElementById('app'))
