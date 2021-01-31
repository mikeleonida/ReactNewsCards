import React, { Component } from 'react'

export default class NewsList extends React.Component {
    render() {
      return (
        //<ul>
        <div class="row row-cols-1 row-cols-md-5 g-4">
          {this.props.items.map(item => (
            // <li key={item.id}>{item.text}</li>  
             
             <div class="card h-100" style={{'width': '70px', 'margin-left': '32px', 
                                            'margin-top': '20px'}} >
                <div class="card-body">
                 <h5 class="card-title" style={{'background-color': 'yellow'}}>{item.textTitle}</h5>
                 <p class="card-text">{item.textDescription}</p>
                 <a href="#" class="card-link"></a>
                 <a href="#" class="card-link"></a>
                 <h6 class="card-subtitle mb-2 text-muted">{item.textCategory}</h6>
                 
                </div>
            </div>
          ))}
        </div>
        //</ul>
      );
    }
  }