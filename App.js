import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor () {
    super()
    this.state = {val: 0}
    this.update = this.update.bind(this)
  }
  update () {
    this.setState({val: this.state.val + 1})
  }
  componentWillMount () {
    console.log('mounting')
  }
  componentDidMount () {
    console.log('mounted')
  }
  componentWillUnmount () {
    console.log('bye')
  }
  render () {
    console.log('rendering')
    return (
      <button onClick={this.update}>{this.state.val}</button>
    )
  }
}

class Wrapper extends React.Component {
  constructor () {
    super()
  }
  mount () {
    ReactDOM.render(<App/>, document.getElementById('a'))
  }
  unmount () {
    ReactDOM.unmountComponentAtNode(document.getElementById('a'))
  }
  render () {
    return (
      <div>
        <button onClick={this.mount.bind(this)}>Mount</button>
        <button onClick={this.unmount.bind(this)}>Unmount</button>
        <div id='a'></div>
      </div>
    )
  }
}

export default Wrapper
// export default App

ReactDOM.render(<Wrapper/>, document.getElementById('app'))


// class App extends React.Component {
//   render () {
//     return (
//       <Button>I <Heart/> React</Button>
//     )
//   }
// }

// class Button extends React.Component {
//   render () {
//     return (
//       <button>{this.props.children}</button>
//     )
//   }
// }

// const Heart = () => <span className='glyphicon glyphicon-heart'></span>

// class App extends React.Component {
//   constructor () {
//     super()
//     this.state = {
//       red: 0,
//       green: 0,
//       blue: 0
//     }
//     this.update = this.update.bind(this)
//   }

//   update (event) {
//     this.setState({
//       red: ReactDOM.findDOMNode(this.refs.red.refs.inp).value,
//       green: ReactDOM.findDOMNode(this.refs.green.refs.inp).value,
//       blue: ReactDOM.findDOMNode(this.refs.blue.refs.inp).value
//     })
//   }

//   render () {
//     return (
//       <div>
//         <Slider ref='red' update={this.update} />
//         {this.state.red}
//         <br />
//         <Slider ref='green' update={this.update} />
//         {this.state.green}
//         <br />
//         <Slider ref='blue' update={this.update} />
//         {this.state.blue}
//         <br />
//       </div>
//     )
//   }
// // before widget implemented
//   // render () {
//   //   return (
//   //     <div>
//   //       <input type='text' onChange={this.update} />
//   //       <h1>{this.state.txt}</h1>
//   //     </div>
//   //   )
//   // }
// }

// App.propTypes = {
//   txt: React.PropTypes.string,
//   cat: React.PropTypes.number.isRequired
// }

// App.defaultProps = {
//   txt: 'default text'
// }

// class Slider extends React.Component {
//   render () {
//     return (
//       <div>
//         <input ref='inp' type='range' min='0' max='255' onChange={this.props.update} />
//       </div>
//     )
//   }
// }

// const Widget = (props) => {
//   return (
//     <div>
//       <input type='text' onChange={props.update} />
//       <h1>{props.txt}</h1>
//     </div>
//   )
// }

// ReactDOM.render(<App/>, document.getElementById('app'))
