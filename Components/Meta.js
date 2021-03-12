import Head from 'next/head';

const Meta = ({title , keywords}) => {
    return ( 
    <Head>
        <title>{title}</title>
        <meta name='keywords' content={keywords} />
      </Head>
     );
}

Meta.defaultProps = {
    title: 'News Website',
    keywords: 'web development , programming'
}
 
export default Meta;