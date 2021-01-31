import React from 'react';
import NewsList from './NewsList'

export default class NewsApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = { items: [], textTitle: '', textDescription: '', 
                    textCategory: '' };
      this.handleTitleChange = this.handleTitleChange.bind(this);
      this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
      this.handleCategoryChange = this.handleCategoryChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
      return (
        <div> 
          <form onSubmit={this.handleSubmit}>
            <table>
            <tr>
            <td>
            <label htmlFor="news-title" style={{'margin-left':'270px'}}>
              News Title
            </label>
            </td>
            <td>
            <input
              id="news-title"
              maxLength="11"
              style={{'margin-left':'0px', 'height':'36px', 'width':'250px'}}
              onChange={this.handleTitleChange}
              value={this.state.textTitle}
            />
            </td>
            </tr>
            <tr>
            <td>
            <label htmlFor="news-description" style={{'margin-left':'270px'}}>
              News Description
            </label>
            </td>
            <td>
            <input
              id="news-description"
              maxLength="200"
              word-wrap="break-word"
              style={{'margin-left':'0px', 'height':'100px', 'width':'250px',
                      'word-wrap': 'break-word', 'word-break': 'break-all'}}
              onChange={this.handleDescriptionChange}
              value={this.state.textDescription}
            />
            </td>
            </tr>
            <tr>
            <td>  
            <label htmlFor="news-category" style={{'margin-left':'270px'}}>
              News Category
            </label>
            </td>
            <td>
            <input
              id="news-category"
              maxLength="11"
              style={{'margin-left':'0px', 'height':'36px', 'width':'250px'}}
              onChange={this.handleCategoryChange}
              value={this.state.textCategory}
            />
            </td>
            </tr>
            <tr>
            <button class="btn btn-success" 
              style={{'margin-left':'320px', 'width':'100px', 
                    'column-span':'2', 'margin-top':'10px'}}>
              Add News{/*#{this.state.items.length + 1}*/}
            </button>
            </tr>
            </table>
          </form>
          <NewsList items={this.state.items} />
        </div>
      );
    }
  
    handleTitleChange(e) {
      this.setState({ textTitle: e.target.value });
    }

    handleDescriptionChange(e) {
      this.setState({ textDescription: e.target.value });
    }

    handleCategoryChange(e) {
      this.setState({ textCategory: e.target.value });
    }
  
    handleSubmit(e) {
      e.preventDefault();
      if (this.state.textTitle.length === 0) {
        return;
      }
      const newItem = {
        textTitle: this.state.textTitle,
        textDescription: this.state.textDescription,
        textCategory: this.state.textCategory,
        id: Date.now()
      };
      this.setState(state => ({
        items: state.items.concat(newItem),
        textTitle: '',
        textDescription: '',
        textCategory: ''
      }));
    }
  }