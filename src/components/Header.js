import React, { Component } from 'react';
import Countdown from '../containers/Countdown';
import Data from '../data/data.json';

class Header extends Component {
  render () {
    return (
      <div className='header'>
        <img alt='Header image' src={'https://lh3.googleusercontent.com/AAVwMeSIMh7lH2IkgA1TPQ3S-67UEpSXlv7YMNBRV1yus8jg3IzKJ60E8K1F-F3v_0edQ2DKznMYL1SGuZjxt8WGkXzdYajyQf96bmVKGa34-pEFbXobJW75XZmjxJee1XcgmarR4KkGzImhmazBI-hyRcmZosm6DBLVTj0WU4VRc9JJXZGyYFjqApTMMWYDRL-e_AmyTf324K4iXeHK2W5SCr4od2R6Zq0QkbzZgOk2h7TVjZimsyeFAGZ1VkrQpAH_FqCifvpi4aj0Nfwnp_MA7yhr0aFrk3w87_InMvmfmb4HnCuSxjjk7TZo6hrXTfmilmaw0BaTiqpa1yQQzZoJYtZRZUKwagO96kly_sF3r89v0R3hGzbFwtpDH_XxFoqfhMUztauSBOYZq5vFH1KVyaDo5WBZRpEsZqNP2Zx7UcxGkKoXHNpKD9spZqqBW39PO0kiUHztTD9cqdr1c9CYVmf7aFQ__T3VErfUfT63xIIsJoFXR7rbwoDPYMGZZIo45ErGrY6OlG4KouVLbLgUnKV5CGSdLQ6HES8h5qWd5a1IbOHCtDaHbd57Zwl3XatCM0zUVOC9yQrzFJbZZrV8hvqwjKAMBl3wFFA=w1018-h424-no'} />
        <div className='header-details'>
          <h1>{Data.headerTitle}</h1>
          <Countdown />
          <h1>{Data.headerDate}</h1>
        </div>
      </div>
    );
  }
}
export default Header;
