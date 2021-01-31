import React from 'react';
import CardList from './CardList'

export default class CardApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = { items: [], text: '' };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    render() {
      return (
        <div>
          <h3 style={{'background-color':'cyan'}}>PRODUCT WEB APP</h3>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="new-todo" style={{'margin-left':'270px'}}>
              Product Name
            </label>
            <input
              id="new-todo"
              maxLength="11"
              style={{'margin-left':'20px', 'width':'200px', 'height':'36px'}}
              onChange={this.handleChange}
              value={this.state.text}
            />
            <br></br>
            <button class="btn btn-success" style={{'margin-left':'392px', 'width':'200px'}}>
              Add Product {/*#{this.state.items.length + 1}*/}
            </button>
          </form>
          <CardList items={this.state.items} />
        </div>
      );
    }
  
    handleChange(e) {
      this.setState({ text: e.target.value });
    }
  
    handleSubmit(e) {
      e.preventDefault();
      if (this.state.text.length === 0) {
        return;
      }
      const newItem = {
        text: this.state.text,
        id: Date.now()
      };
      this.setState(state => ({
        items: state.items.concat(newItem),
        text: ''
      }));
    }
  }
  