import React from 'react'
import { Container } from "react-bootstrap";
import { useMediaQuery} from '@mui/material';


export const SecondDiv = () => {
  const isXs = useMediaQuery('(max-width: 599.95px)');
  return (
    <div>
        <div className={isXs ? 'DivMainXs' : 'DivMain'}>
            <div><h1 className='divTitle'>İPEK MÜHENDİSLİK HAKKINDA DAHA FAZLA BİLGİ</h1></div>
            <div className='DivMainText'><p>Filmimizi izleyin ve herhangi bir projeye dahil olduğumuzda ekiplerimizin sorumluluk
                 duygusunu ve misyonunu takdir edin. İPEK MÜHENDİSLİK,
                 mutlak güveninize layık bir ortak olmak için sürekli büyüyor ve yenilik yapıyor.</p></div>
        </div>
        <Container className="d-flex justify-content-center align-items-center">
      <div style={{ width: "100%" }}>
        <iframe
          width="100%"
          height="400"
          src="https://www.youtube.com/embed/rurtJhnEkTE"
          title="YouTube Video"
          allowFullScreen
        ></iframe>
      </div>
    </Container>
    </div>
  )
}
