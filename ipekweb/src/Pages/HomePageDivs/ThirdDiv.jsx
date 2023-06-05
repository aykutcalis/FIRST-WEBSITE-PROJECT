import React from 'react'
import ProjeImage1 from '../../assets/HomePageImages/boru1.jpg'
import ProjeImage2 from '../../assets/HomePageImages/boru2.jpg'
import ProjeImage3 from '../../assets/HomePageImages/boru3.jpg'
import ProjeImage4 from '../../assets/HomePageImages/boru4.jpg'
import ProjeImage5 from '../../assets/HomePageImages/boru5.jpg'
import ProjeImage6 from '../../assets/HomePageImages/boru6.jpg'
import ProjeImage7 from '../../assets/HomePageImages/boru7.jpg'
import ProjeImage8 from '../../assets/HomePageImages/boru8.jpg'
import {AiOutlineLeft,AiOutlineRight} from'react-icons/ai'
import { useState } from 'react'
import { useMediaQuery} from '@mui/material';





export const ThirdDiv = () => {
  const isXs = useMediaQuery('(max-width: 599.95px)');

  const [scrollIndex, setScrollIndex] = useState(0);
  

  const scrollLeft = () => {
    if (scrollIndex > 0) {
      setScrollIndex(scrollIndex - 1);
    }
  };

  const scrollRight = () => {
    if (isXs && scrollIndex < 7) {
      setScrollIndex(scrollIndex + 1);
    } else if (!isXs && scrollIndex < 1) {
      setScrollIndex(scrollIndex + 1);
    }
  };
  
  return (
    <div className="thirdDivMain">
      <div className={isXs ? 'DivMainXs' : 'DivMain'}>
        <h1 className='divTitle' >PROJELER</h1>
        <div className="SecondDivMainText">
          <p>
            Mühendislik Projeleri | Endüstriyel Bakım Projeleri (Prefabrikasyon
            ve Endüstriyel Montaj) | Geri Dönüşüm Çevre Projeleri.
          </p>
        </div>
      </div>
      <div className={isXs ? 'navigationButtonDivXs' : 'navigationButtonDiv'} >
        <div  >
        <button
          className="navigationButton"
          onClick={scrollRight}
          disabled={scrollIndex === (isXs ? 7 : 1)}
        >
          <AiOutlineRight />
        </button>
        <button
          className="navigationButton"
          onClick={scrollLeft}
          disabled={scrollIndex === 0}
        >
          <AiOutlineLeft />
        </button>
        </div>
        
      </div>

      <div className="scrollableContainer">
        <div
          className="scrollableContent"
          style={{ transform: `translateX(-${scrollIndex * 100}%)` }}
        >
          <div
            className={isXs ? 'thirdMainPageXs' : 'thirdMainPage'}
            style={{ backgroundImage: `url(${ProjeImage1})` }}
          >
            <h3 className="homeTextContent">MÜHENDİSLİK PROJELERİ</h3>
            <h3>Teknolojinin Getirdikleri</h3>
            <p className='thirdMainPage_p'>
              Sanayi sektöründe teknolojinin ilerlemesi ve mühendislik
              becerilerinin gelişmesi, birçok sektörde büyük bir dönüşüm
              sağlamaktadır. Bu dönüşüm, üretim süreçlerinin optimize edilmesi,
              verimliliğin artırılması ve kalitenin iyileştirilmesi gibi
              hedefler doğrultusunda gerçekleşmektedir.
            </p>
          </div>
          <div
            className={isXs ? 'thirdMainPageXs' : 'thirdMainPage'}
            style={{ backgroundImage: `url(${ProjeImage2})` }}
          >
            <h3 className="homeTextContent">SANAYİ BAKIM</h3>
            <h3>Yeni Çağ </h3>
            <p className='thirdMainPage_p'>
              Teknoloji ve mühendislik, işletmelerin daha verimli ve rekabetçi
              olmasını sağlamak için birlikte çalışmaktadır. Yeni nesil
              sensörler, otomasyon sistemleri ve yapay zeka uygulamaları, üretim
              süreçlerini daha akıllı hale getirerek insan hatasını minimize
              etmekte ve kaliteyi artırmaktadır.
            </p>
          </div>
          <div
           className={isXs ? 'thirdMainPageXs' : 'thirdMainPage'}
            style={{ backgroundImage: `url(${ProjeImage3})` }}
          >
            <h3 className="homeTextContent">GERİ DÖNÜŞÜM</h3>
            <h3>Dönüşüm Zamanı</h3>
            <p className='thirdMainPage_p'>
              Veri analitiği ve büyük veri yönetimi, işletmelerin üretim
              süreçlerinde daha iyi kararlar almasını sağlamakta ve maliyetleri
              düşürmektedir. Endüstriyel robotlar ve otomatik üretim hatları,
              daha hızlı ve hassas üretim yapılmasını sağlamakta ve iş gücü
              verimliliğini artırmaktadır.
            </p>
          </div>
          <div
            className={isXs ? 'thirdMainPageXs' : 'thirdMainPage'}
            style={{ backgroundImage: `url(${ProjeImage4})` }}
          >
            <h3 className="homeTextContent">MÜHENDİSLİK PROJELERİ</h3>
            <h3>Geleceği Şekillendirenler</h3>
            <p className='thirdMainPage_p'>
              Sürdürülebilirlik, enerji verimliliği ve çevresel etkiyi azaltma,
              teknoloji ve mühendislik tarafından da desteklenen önemli
              hedeflerdir. Yeni malzemelerin kullanımı ve yenilikçi tasarımlar,
              ürün performansını iyileştirmekte ve endüstrinin müşteri
              beklentilerine cevap vermesini sağlamaktadır.
            </p>
          </div>
          <div
           className={isXs ? 'thirdMainPageXs' : 'thirdMainPage'}
            style={{ backgroundImage: `url(${ProjeImage5})` }}
          >
            <h3 className="homeTextContent">GERİ DÖNÜŞÜM</h3>
            <h3>Yenilenebilir Enejinin Geleceği</h3>
            <p className='thirdMainPage_p'>
              Sürekli iyileştirme ve yenilikçilik kültürü, teknoloji ve
              mühendislik disiplinleri aracılığıyla kurulmaktadır. Endüstriyel
              sektörlerdeki dönüşüm, teknoloji ve mühendislik becerilerinin
              sürekli olarak geliştirilmesini gerektirmektedir.
            </p>
          </div>
          <div
            className={isXs ? 'thirdMainPageXs' : 'thirdMainPage'}
            style={{ backgroundImage: `url(${ProjeImage6})` }}
          >
            <h3 className="homeTextContent">MÜHENDİSLİK PROJELERİ</h3>
            <h3>Termonükleerin İşlevselleştirilmesi</h3>
            <p className='thirdMainPage_p'>
              Eğitim ve sürekli öğrenme, teknoloji ve mühendislik alanlarında
              yetenekli profesyonellerin yetişmesini sağlamaktadır. İnovasyon,
              teknoloji ve mühendislik çalışmalarının önemli bir sonucudur ve
              işletmelerin rekabet avantajını artırır.
            </p>
          </div>
          <div
            className={isXs ? 'thirdMainPageXs' : 'thirdMainPage'}
            style={{ backgroundImage: `url(${ProjeImage7})` }}
          >
            <h3 className="homeTextContent">SANAYİ BAKIM</h3>
            <h3>Yeni Sanayi Sektörleri</h3>
            <p className='thirdMainPage_p'>
              İşbirliği ve paylaşılan bilgi, teknoloji ve mühendislik
              alanlarında ilerlemenin anahtarıdır. Dijitalleşme, teknoloji ve
              mühendislik disiplinlerini daha fazla entegre etmekte ve
              işletmelerin verimliliğini artırmaktadır.
            </p>
          </div>
          <div
           className={isXs ? 'thirdMainPageXs' : 'thirdMainPage'}
            style={{ backgroundImage: `url(${ProjeImage8})` }}
          >
            <h3 className="homeTextContent">MÜHENDİSLİK PROJELERİ</h3>
            <h3>Plastiğin Evrimi</h3>
            <p className='thirdMainPage_p'>
              Dijital simülasyon ve sanal gerçeklik, teknoloji ve mühendislik
              çalışmalarında prototip oluşturmayı kolaylaştırır ve tasarımda
              zaman ve maliyet tasarrufu sağlar. Veri güvenliği ve gizlilik,
              teknoloji ve mühendislik çalışmalarının temel bir odak noktasıdır
              ve işletmelerin itibarını korur.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
