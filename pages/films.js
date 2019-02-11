import React, { Component } from 'react';
import axios from 'axios';

export default class Films extends Component {
    static async getInitialProps() {
        const res =await axios.get('https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=5918912',{
            headers:{
                'X-Host': 'mall.film-ticket.film.list'
            }
        });
        // console.log(res);
        return {
            films: res.data.data.films
        }
    }
    render() {
        return (
            <div>
                <h2>电影</h2>
                <ul>
                    {
                        this.props.films.map(itme => {
                            return <li key={itme.filmID}>
                                {itme.name}
                                <img src={itme.poster} />
                            </li>
                        })
                    }
                </ul>
            </div>
        )
    }
}