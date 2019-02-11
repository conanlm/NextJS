import Head from 'next/head';
import Link from 'next/link';
export default ({children})=>(
    <div>
        <Head>
            <title>
                共通头部测试-next
            </title>
        </Head>
        <div>
            <Link href="/">主页</Link> |
            <Link as="l" href="/list">列表</Link> |
            <Link href="/nextStyle">内嵌样式-sample</Link>
        </div>
        {children}
        <footer>
            版权所有
        </footer>

    </div>

)