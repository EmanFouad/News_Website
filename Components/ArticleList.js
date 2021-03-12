import ArticleItem from './ArticleItem';
import articleStyles from './../styles/Articles.module.css';

const ArticleList = ({articles , locale}) => {
    return ( 
        <div className={articleStyles.grid}>
            {articles.map((article , index) =>{
               return <ArticleItem locale={locale} article={article} key={index} />
            })}
        </div>
     );
}
 
export default ArticleList;