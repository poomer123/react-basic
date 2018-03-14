import React, { Component } from 'react'

class App extends Component {
  state = {data: null, err: null}
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
      .then(respon => {
        if(respon.ok) {
          return respon
        }
        throw Error(respon.status)
      })
      .then(rs => rs.json() )
      .then(rs => this.setState({data: rs}))
      .catch( e => this.setState({err: e.message}))
  }

  render () {
    const {data, err} = this.state
    let list = <div>Loading...</div>

    if(data) {
      if(data.length > 0) {
        list = data.map( e => {
          return (
            <div key={e.id}>
              <h3>{e.title}</h3>
              {e.body}
            </div>
          )
        })
      } else {
        list = <div>No data</div>
      }
    }

    if(err) {
      list = <div>Error {err}</div>
    }

    return (
      <div className="App">
        <h1>Test</h1>
        {list}
      </div>
    )
  }
}

export default App;
