import React, { Component } from 'react'

export default class CardList extends React.Component {
    render() {
      return (
        //<ul>
        <div class="row row-cols-1 row-cols-md-6 g-6">
          {this.props.items.map(item => (
            // <li key={item.id}>{item.text}</li>  
             
             <div class="card h-100" style={{'width': '40px', 'margin-left': '32px', 
                                            'margin-top': '20px'}} >
                <div class="card-body">
                 <h3 class="card-title">{item.text}</h3>
                 <h5 class="card-subtitle mb-2 text-muted">{item.id}</h5>
                 <p class="card-text"></p>
                 <a href="#" class="card-link">Product Details</a>
                 <a href="#" class="card-link"></a>
                </div>
            </div>
          ))}
        </div>
        //</ul>
      );
    }
  }
