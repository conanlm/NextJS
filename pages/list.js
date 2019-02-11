import React,{Component} from 'react';
import Layout from './components/layout'
import '../styles/list.css';
import Router from 'next/router';

export default class List extends Component {
    state={
        list:["hello","nice to meet you","I am ok"]
    }
    render(){
        return(
            <Layout>
                <div>
                    <ul>
                        {
                            this.state.list.map(item=>(
                                // <li onClick={()=>Router.push('/detail?arg='+ item)}>
                                <li onClick={()=>Router.push({
                                    pathname:"/detail",
                                    query:{arg:item}
                                })}>
                                    {item}
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </Layout>
        )
    }
}