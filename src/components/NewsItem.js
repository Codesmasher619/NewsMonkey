import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
   let {title,description,imageUrl,newsUrl,author,date,source}=this.props
    return (
      <div>
        <span class="badge rounded-pill bg-danger">{source}</span>
        <div className="card my-3" style={{width: "18rem;"}}>
  <img className="card-img-top" src={imageUrl?imageUrl:'https://c.ndtvimg.com/2018-11/ni1f5jm4_ship-generic_625x300_21_November_18.jpg'} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <p class="card-text"><small class="text-muted"><b> By {author?author:'Unknown'} on {date.slice(0,10)}</b></small></p>
    <a href={newsUrl} target='blank' className="btn btn-dark btn-sm">Read More</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItem
