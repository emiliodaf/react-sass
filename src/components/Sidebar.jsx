import Avatar from '../img/photo.jpg'
import '../styles/components/sidebar.sass'
import InformationContainer from './InformationContainer';
import SocialNetworks from './SocialNetworks';


const Sidebar = () => {
  return <aside id="sidebar">
  <img src={Avatar} alt='Emílio Daf'/>
  <p className="title">Desenvolvedor Front End</p>
  <SocialNetworks/>
  <InformationContainer/>
  
  
  <a href="" className="btn">Download CV
  </a>
</aside>;

    
};

export default Sidebar;