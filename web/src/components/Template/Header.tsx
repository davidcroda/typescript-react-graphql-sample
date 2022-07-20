import Bio from "../Bio";
import SocialLinks from "../SocialLinks/SocialLinks";

export default function Header() {
  return (
    <header className="main-header" style={{backgroundImage: 'url(assets/img/img_bg_header.jpg)'}}>
    <div className="container">
      <div className="row personal-profile">
        <div className="col-md-4 personal-profile__avatar">
          <img className="" style={{filter: 'grayscale(0.2)'}} src="https://avatars.githubusercontent.com/u/115285?v=4" alt="avatar" />
        </div>
        <div className="col-md-8">
          <Bio 
              name="David Roda"
              title="Senior Backend Engineer" 
              age={36} 
              phone="(561) 249-9348"
              email="davidroda@gmail.com" 
              address="2143 E. Norris St, Philadelphia, PA, 19125"
          />
          <SocialLinks />
        </div>
      </div>
    </div>
  </header>
  )
}