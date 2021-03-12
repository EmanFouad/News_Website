import Link from 'next/link';
import articleStyles from './../styles/Articles.module.css';

const ArticleItem = ({article , locale}) => {
    const style = locale === "en" ? "left" : "right";
    const arrowStyle = locale === "en" ? <h3 style={{textAlign: style}}>{article.title} &rarr;</h3> : <h3 style={{textAlign: style}}>&larr; {article.title}</h3>;

    return ( 
        <a className={articleStyles.card} onClick={() => (window.location.href = article.url)} style={{cursor:"pointer" , direction: "rtl"}} >
            {arrowStyle}
            {article.urlToImage && <img src={article.urlToImage} />}
            <p style={{textAlign: style}}>{article.description}</p>
        </a>
     );
}
 
export default ArticleItem;