import '../styles/Medias.css';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Medias = () => {
  const links = [{
    key: 0,
    link: '',
    logo: <FaFacebookF />,
  }, {
    key: 1,
    link: '',
    logo: <FaTwitter />,
  }, {
    key: 2,
    link: '',
    logo: <FaInstagram />,
  }];
  return (
    <div className="social-medias">
     <h4>Post your Quote's in Social Media!</h4>
     <div className="social-media">
     {links.map((item) => (
        <a key={item.key} href={item.link}>
          {item.logo}
        </a>))}
     </div>
    </div>
    )
}

export default Medias;