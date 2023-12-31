import React, { Component } from 'react'

export class Newsitem extends Component {

    render() {
        let {tittle, discription, imgurl, url, author, date, source} = this.props;
        return (
            <div>
                <div className="card" style={{width: "18rem"}}>
                <span className="badge rounded-pill bg-danger" style={{position: "absolute", right: "2px"}}>{source}</span>
                    <img src={!imgurl? "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png" :imgurl} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{tittle}</h5>
                            <p className="card-text">{discription}</p>
                            <p className='card-text'><small className='text-muted'>By {!author? "Unknown" : author} on {new Date(date).toUTCString()}</small></p>
                            <a href={url}  rel="noreferrer" target="_blank"  className="btn btn-primary">Read More..</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default Newsitem
