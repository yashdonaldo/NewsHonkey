import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Loading from './loading';
import PropTypes from 'prop-types'
// import PropTypes from 'prop-types'


export class News extends Component {
    static defaultProps = {
        country : "in",
        catageory : "business",
        pagesize : 10
    }
    static PropType = {
        country : PropTypes.string,
        category : PropTypes.string,
        pagesize : PropTypes.number,
    }

    constructor() {
        super();
        console.log("Hello Iam constraustor of news item")
        this.state = {
            articles: [],
            loading: false,
            page: 1,
        }
    }
    async componentDidMount() {
        console.log("component did catch")
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=2c79ddb0ce464923bf899ed63b960229&page=1&pagesize=20`
        let data = await fetch(url);
        let parsedata = await data.json();
        // console.log(parsedata)
        this.setState({ articles: parsedata.articles, totalresult: parsedata.totalResults })
    }

    previousclick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=2c79ddb0ce464923bf899ed63b960229&page=${this.state.page - 1}&pagesize=20`
        {this.setState({loading : true})}
        let data = await fetch(url);
        let parsedata = await data.json();
        // console.log(parsedata)

        this.setState({
            page: this.state.page - 1,
            articles: parsedata.articles,
            loading: false
        })
    }
    nextclick = async () => {
        if (this.state.page + 1 > Math.ceil(this.state.totalresult/20)) {

        } else {

            let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=2c79ddb0ce464923bf899ed63b960229&page=${this.state.page + 1}&pagesize=20`
            {this.setState({loading : true})}
            let data = await fetch(url);
            let parsedata = await data.json();
            // console.log(parsedata)

            this.setState({
                page: this.state.page + 1,
                articles: parsedata.articles,
                loading: false
            })
        }
    };
    paginationclick = async () => {
        if (this.state.page > Math.ceil(this.state.totalresult / 69)) {
        }else{

            let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=2c79ddb0ce464923bf899ed63b960229&page=${this.state.page}&pagesize=20`
            {this.setState({loading : true})}
            let data = await fetch(url);
            let parsedata = await data.json();
            // console.log(parsedata)
            
            this.setState({
                page: this.state.page,
                articles: parsedata.articles,
                loading: false
            })
        }
    }
    paginationclick2 = async () => {
        if (this.state.page + 1 > Math.ceil(this.state.totalresult / 69)) {
        }else{

            let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=2c79ddb0ce464923bf899ed63b960229&page=${this.state.page + 1}&pagesize=20`
            {this.setState({loading : true})}
            let data = await fetch(url);
            let parsedata = await data.json();
            // console.log(parsedata)
            
            this.setState({
                page: this.state.page + 1,
                articles: parsedata.articles,
                loading: false,
            
            })
        }
    }
    paginationclick3 = async () => {
        if (this.state.page + 2 > Math.ceil(this.state.totalresult / 69)) {
        }else{

            let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=2c79ddb0ce464923bf899ed63b960229&page=${this.state.page + 2}&pagesize=20`
            {this.setState({loading : true})}
            let data = await fetch(url);
            let parsedata = await data.json();
            // console.log(parsedata)
            
            this.setState({
                page: this.state.page + 2,
                articles: parsedata.articles,
                loading: false
            })
        }
    }
    render() {
        console.log("render")
        return (
            <div>
                <h1 className='my-3' style={{ textAlign: "center" }}>NewsHonkey - Top Business Headlines</h1>
                {this.state.loading && <Loading />}
                <div className="newscontainer">
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <Newsitem tittle={element.title} discription={element.description} imgurl={element.urlToImage} url={element.url} key={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                    })}
                </div>
                <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center">
                        <li >
                            <a aria-disabled={this.state.page <= 1} className="page-link" tabIndex="-1" onClick={this.previousclick}>Previous</a>
                        </li>
                        <li className="page-item"><a className="page-link"  onClick={this.paginationclick}>{this.state.page}</a></li>
                        <li className="page-item"><a className="page-link"  onClick={this.paginationclick2}>{this.state.page + 1}</a></li>
                        <li className="page-item"><a className="page-link"  onClick={this.paginationclick3}>{this.state.page + 2}</a></li>
                        <li className="page-item">
                            <a className="page-link"  onClick={this.nextclick}>Next</a>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default News
