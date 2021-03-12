import Router from 'next/router'

const Home = () => null

Home.getInitialProps = async ({ res }) => {
    if (res) {
        res.writeHead(302, {
            Location: `/article/1`
        })
        res.end()
    } 
    else
        Router.push(`/article/1`)

    return {}
}

export default Home
