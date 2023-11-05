import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Loading from './loading';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component"



export class News extends Component {
    static defaultProps = {
        country: "in",
        catageory: "business",
        pagesize: 10,
    }
    static PropType = {
        country: PropTypes.string,
        category: PropTypes.string,
        pagesize: PropTypes.number,
    }
    firstletter = (string) => {
        let first = string.charAt(0);
        let restofstring = string.slice(1);
        let capataize = first.toUpperCase() + restofstring;
        return capataize;
    }
    
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalresult: 0,
        }
        document.title = `NewsHonkey - Get Top ${this.firstletter(this.props.category)} News Live`
    }
    async componentDidMount() {
        this.props.setProgress(10)
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apikey}&page=1&pagesize=20`
        let data = await fetch(url);
        this.props.setProgress(30)
        let parsedata = await data.json();
        this.props.setProgress(70)
        this.setState({ articles: parsedata.articles, totalresult: parsedata.totalResults })
        this.props.setProgress(100)
    }

    previousclick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page - 1}&pagesize=20`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedata = await data.json();

        this.setState({
            page: this.state.page - 1,
            articles: parsedata.articles,
            loading: false
        })
    }
    nextclick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page + 1}&pagesize=20`
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedata = await data.json();

        this.setState({
            page: this.state.page + 1,
            articles: parsedata.articles,
            loading: false
        })
    };
    paginationclick = async () => {
        if (this.state.page > Math.ceil(this.state.totalresult / 69)) {
        } else {

            let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pagesize=20`
            this.setState({ loading: true })
            let data = await fetch(url);
            let parsedata = await data.json();

            this.setState({
                page: this.state.page,
                articles: parsedata.articles,
                loading: false
            })
        }
    }
    paginationclick2 = async () => {
        if (this.state.page + 1 > Math.ceil(this.state.totalresult / 69)) {
        } else {

            let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page + 1}&pagesize=20`
            this.setState({ loading: true })
            let data = await fetch(url);
            let parsedata = await data.json();

            this.setState({
                page: this.state.page + 1,
                articles: parsedata.articles,
                loading: false,

            })
        }
    }
    paginationclick3 = async () => {
        if (this.state.page + 2 > Math.ceil(this.state.totalresult / 69)) {
        } else {

            let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page + 2}&pagesize=20`
            this.setState({ loading: true })
            let data = await fetch(url);
            let parsedata = await data.json();

            this.setState({
                page: this.state.page + 2,
                articles: parsedata.articles,
                loading: false
            })
        }
    }
    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 })
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page - 1}&pagesize=20`;
        let data = await fetch(url);
        let parsedata = await data.json();

        this.setState({
            page: this.state.page - 1,
            articles: this.state.articles.concat(parsedata.articles),
        })
    }
    render() {
        ("render")
        return (
            <div>
                <h1 className='my-3' style={{ textAlign: "center" }}>NewsHonkey - Top {this.firstletter(this.props.category)} News Headlines</h1>
                {this.state.loading && <Loading />}

                
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalresult}
                    loader={<Loading />} style={{overflow: "hidden"}}
                >
                    <div className="newscontainer">
                        {this.state.articles.map((element) => {
                            return <Newsitem tittle={element.title} discription={element.description} imgurl={element.urlToImage} url={element.url} key={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                        })}
                    </div>
                </InfiniteScroll>
                <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center">
                        <li className="page-item">
                            <button className="btn btn-outline-primary" disabled={this.state.page <= 1} onClick={this.previousclick}>Previous</button>
                        </li>
                        <li className="page-item"><button className="btn btn-outline-primary" onClick={this.paginationclick} disabled={this.state.page > Math.ceil(this.state.totalresult / 69)}>{this.state.page}</button></li>
                        <li className="page-item"><button className="btn btn-outline-primary" onClick={this.paginationclick2} disabled={this.state.page > Math.ceil(this.state.totalresult / 69)}>{this.state.page + 1}</button></li>
                        <li className="page-item"><button className="btn btn-outline-primary" onClick={this.paginationclick3} disabled={this.state.page > Math.ceil(this.state.totalresult / 69)}>{this.state.page + 2}</button></li>
                        <li className="page-item">
                            <button className="btn btn-outline-primary" onClick={this.nextclick} disabled={this.state.page + 1 > Math.ceil(this.state.totalresult / 20)}>Next</button>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default News
