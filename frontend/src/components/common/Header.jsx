import '../../styles/Header.css'
import { FiShoppingCart as CartButton } from "react-icons/fi";
import { CgProfile as ProfileButton} from "react-icons/cg";
import { FaSearch as SearchIcon} from "react-icons/fa";
import Logo from "../../assets/images/AppLogo3D.png";
import Title from "../../assets/images/AppTitle3D.png";
import { useNavigate } from 'react-router-dom';
import { FaRegHeart as HeartIcon} from "react-icons/fa";
export default function Header()
{
    const navigate=useNavigate();
    return (
        <>
            <div className='HeaderPortion'>
                <span className='LogoTitle'>
                    <button onClick={()=>navigate('/')}>
                        <img src={Logo} alt="Logo" height={50}  />
                    </button>
                    <button onClick={()=>navigate('/')}>
                        <img src={Title} alt="Title" height={35} />
                    </button>
                </span>
                <button onClick={()=>navigate('/Wishlist')} style={{right:90}}>
                    <HeartIcon size={30}/>
                </button>
                <button onClick={()=>navigate('/Cart')} style={{right:45}}>
                    <CartButton size={30}/>
                </button>
                <button onClick={()=>navigate('/SignIn')} style={{right:0}}>
                    <ProfileButton size={30}/>   
                </button>
                <div className='SearchBox' >
                    <input name='SearchInput' id='searchinput' placeholder='Search' autoComplete='off'/>
                    <button style={{right:12}}>
                        <SearchIcon size={25} style={{color:"rgba(0, 0, 0, 0.75)"} }/>
                    </button>
                </div>
            </div>
        </>
    )
}