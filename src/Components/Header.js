import myImage from './om.jpg';
import sarashwatiMaa from './sarashwatiMaa.jpg'

export default function Header() {
  return (
    <>
      <div className="headDiv">
        <img src={myImage} alt="OM LOGO" className='header-img' />
        <h1>S.D. MEMORIAL ACADEMY</h1>
        <img  className="maa" src={sarashwatiMaa} alt="Saraswati Maa"/>
      </div>
      
    </>
  );
}
