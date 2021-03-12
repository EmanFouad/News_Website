import Link from 'next/link';
import navStyles from './../styles/Nav.module.css';
import { useRouter } from 'next/router';

const Nav = () => {
    const {locale} = useRouter();
    // console.log(locale)
    const style = locale === "en" ? "flex-start" : "flex-end" ;
    return ( 
        <nav className={navStyles.nav} style={{justifyContent:style}}>
            {locale === "en" ? 
            <ul>
                <li>
                    <Link locale="en"  href='/article/1'>Home</Link>
                </li>
                <li>
                    <Link locale="ar" href='/article/1'>ع</Link>
                </li>
            </ul>:
            <ul>
                 <li>
                    <Link locale="en" href='/'>EN</Link>
                </li>
                <li>
                    <Link locale="ar"  href='/article/1'>الرئيسية</Link>
                </li>
            </ul>
        }
        </nav>
     );
}
 
export default Nav;