import React, { Component } from 'react'

class App extends Component {
  state = {
    pcode: '',
    pname: '',
    pcategories: '',
    pstatus: true,
  }
  render () {
    return (
      <div className="App">
        <h1>Sample From</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            หมวดสินค้า
            <select name="pcategories" onChange={this.handleChange} value={this.state.pcategories}>
              <option value=''>--- เลือกหมวดสินค้า ---</option>
              <option value='0'>PC</option>
              <option value='1'>Notebook</option>
              <option value='2'>Smart Phone</option>
            </select>
          </div>
          <div> รหัสสินค้า
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
              name="pcode"
              placeholder="ระบุข้อมูล"
            />
          </div>
          <div> ชื่อสินค้า
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
              name="pname"
              placeholder="ระบุข้อมูล"
            />
          </div>

          <div>
            ปกติ
            <input 
              type="checkbox"
              checked={this.state.pstatus}
              onChange={this.handleChange}
              name="pstatus"
            />
          </div>

          <button type="submit">Submit</button>
        </form> 
      </div>
    )
  }

  handleChange = (event) => {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value
    const name = event.target.name
    this.setState({
      [name]: value
    })
    console.warn(this.state)
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.warn(this.state)
  }


}

export default App;
