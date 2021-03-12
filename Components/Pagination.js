import { useRouter } from 'next/router';
import styles from './../styles/Layout.module.css';

const Pagination = ({ locale ,  pageNumber }) => {
    const router = useRouter();
    return ( 
        <div className={styles.paginator}>
                <div className={pageNumber === 1 ? styles.disabled : styles.active} 
                    onClick={() =>{
                        if (pageNumber > 1) {
                            router.push(`/article/${pageNumber - 1}`)
                        }
                    }} >
                    {locale === 'en' ? 'Previous' : 'السابق'}
                </div>
                <div>{pageNumber}</div>
                <div className={pageNumber === 5 ? styles.disabled : styles.active} 
                    onClick={() =>{
                        if (pageNumber < 5) {
                            router.push(`/article/${pageNumber + 1}`).then(() => window.scrollTo(0,0))
                        }
                    }} >
                     {locale === 'en' ? 'Next' : 'التالى'}
                </div>
        </div>
     );
}
 
export default Pagination;