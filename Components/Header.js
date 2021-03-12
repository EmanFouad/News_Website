import headerStyles from './../styles/Header.module.css';

const Header = ({locale}) => {
 
    
    return (
        <>
        {locale === "en" ?
        
        <div locale="en">
            <h1 className={headerStyles.title}>
               Live <span>News</span>
            </h1>
            <p className={headerStyles.description}>The Latest Daily News</p>
        </div>:
        <div locale="ar">
        <h1 className={headerStyles.title}>
                Live <span>News</span> 
        </h1>
        <p className={headerStyles.description}>أحدث الأخبار اليوميه</p>
        </div>
        
        } 
        </>
     );
}
 
export default Header;