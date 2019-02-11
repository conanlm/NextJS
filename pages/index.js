// import React,{Component} from 'react';

// export default class Index extends Component {
//     render(){
//         return(
//             <div>
//                 <h1>hello world</h1>
//             </div>
//         )
//     }
// }
// import Head from 'next/head'
import Layout from './components/layout'
import '../styles/index.sass'

export default ()=>(
    <Layout>
        <div>
        {/* <Head>
            <title>next教程！！</title>
            <meta charSet='utf-8'/>
        </Head> */}
            <h1>hello world simple!!!</h1>
        </div>
    </Layout>
    
)