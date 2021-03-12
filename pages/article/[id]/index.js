import ArticleList from './../../../Components/ArticleList';
import Header from './../../../Components/Header';
import Pagination from './../../../Components/Pagination';
import { useRouter } from 'next/router';

const Article = ({articles , pageNumber}) => {
    const { locale } = useRouter();
 
     return (
       <>
       <Header locale={locale} />
       <div>
         <ArticleList locale={locale} articles={articles} pageNumber={pageNumber}  />
       </div>
       <Pagination locale={locale} pageNumber={pageNumber} />
       </>
     )
}

export const getServerSideProps = async pageContext => {
    const pageNumber = pageContext.query.id;
    const locale = pageContext.locale;
    const country = locale === 'ar' ? 'eg' : 'us';
    console.log(locale)
  
    if(!pageNumber || pageNumber < 1 || pageNumber > 5){
      return{
          props:{
              articles: [],
              pageNumber: 1,
          }
      }
  }
  
    const apiResponse = await fetch(
        `https://newsapi.org/v2/top-headlines?country=${country}&pageSize=8&page=${pageNumber}` , 
        {
            headers : {
                Authorization: `${process.env.NEXT_PUBLIC_NEWS_KEY}`
            }
        }
    )
  
    const apiJson = await apiResponse.json();
    const {articles} = apiJson;
    return{
        props: {
            articles,
            pageNumber: Number.parseInt(pageNumber)
        }
    }
    
  }
 
export default Article;