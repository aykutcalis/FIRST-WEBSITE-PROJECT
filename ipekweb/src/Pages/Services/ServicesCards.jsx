import React from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import ServicesImage1 from "../../assets/engineering.jpg";
import ServicesImage2 from "../../assets/endustri.png";
import ServicesImage3 from "../../assets/geridonusum.jpg";
import { Link, Outlet } from "react-router-dom";

const MAX_CHARACTERS = 300;

const TruncateText = ({ text, maxLength }) => {
  if (text.length <= maxLength) {
    return text;
  }
  return text.slice(0, maxLength) + "...";
};

export const ServicesCards = () => {
  return (
    <Grid className="ServicesCardsMainGrid" container spacing={1}>
      <Grid item xs={12} sm={4}>
        <Card className="cards">
          <CardMedia height="200px" component="img" image={ServicesImage1} />
          <CardContent>
            <Typography variant="h5" component="div">
              Mühendislik Projeleri
            </Typography>
            <Typography variant="body2" component="p">
              {TruncateText({
                text: "İpek Mühendislik, diğer faaliyet alanlarının yanı sıra ön imalat ve endüstriyel montaj alanlarında öne çıkıyor. Genel planları / yerleşimleri, izometrik planları, PID veya SKIDS prensibini ve çalışma şemalarını yorumlayarak, her türlü akışkan ve çeşitli faaliyet sektörleri için endüstriyel boruların prefabrikasyonunu ve montajını yapmaktayız. Boru rafları, köprüler veya destekler gibi metal yapıların ve diğer tamamlayıcı yapıların inşası ve montajı da İpekMühendislik'ın hem üretim araçları hem de ekibini oluşturan insan kaynakları açısından uygun olduğu ve öne çıktığı bir faaliyet sektörüdür. . İpekMühendislik, farklı müdahale alanlarını kapsamak için gıda pompaları veya parlatılmış bitirme gibi hem parlak hem de fırçalanmış parçaların dönüştürülmesi ve bitirilmesinde de farklılık gösterir. Çeşitli malzeme ve yüzeylerde bölmeli kapılar, ızgaralar/kapılar, merdivenler ve özel yapım yapılar, kaplamalar ve incelikli ve lüks kaplamalar gibi her türlü sanatsal sivil çilingir ürünlerini üretiyoruz. Üretim ve yönetim için uygun şekilde yapılandırılmış ve ileri teknolojiye sahip farklı makinelerle donatılmış iki tesise sahibiz; bunlardan 3 eksenli sayısal kontrollü bükme makinesi, oksigaz kesme ekipmanı, 40 mm'ye kadar plazma kesme, her türlü profili kesmek için şerit testere öne çıkıyor. 600 mm'ye kadar çok sayıda kaynak makinesinin yanı sıra: TIG Orbital kaynak makinesi, yüksek frekanslı TIG kaynak makineleri veya sinerjik MIG/MAG kaynak makineleri. Projelerin tüm planlaması ve hazırlığı, izometrik planlama için CAD araçlarıyla yapılır ve teknik çizim yazılımımız SOLIDWORKS'e sahibiz. çeşitli malzeme ve kaplamalarda ızgaralar/kapılar, merdivenler ve özel yapım yapılar, kaplamalar ve incelikli ve lüks kaplamalar. Üretim ve yönetim için uygun şekilde yapılandırılmış ve ileri teknolojiye sahip farklı makinelerle donatılmış iki tesise sahibiz; bunlardan 3 eksenli sayısal kontrollü bükme makinesi, oksigaz kesme ekipmanı, 40 mm'ye kadar plazma kesme, her türlü profili kesmek için şerit testere öne çıkıyor. 600 mm'ye kadar çok sayıda kaynak makinesinin yanı sıra: TIG Orbital kaynak makinesi, yüksek frekanslı TIG kaynak makineleri veya sinerjik MIG/MAG kaynak makineleri. Projelerin tüm planlaması ve hazırlığı, izometrik planlama için CAD araçlarıyla yapılır ve teknik çizim yazılımımız SOLIDWORKS'e sahibiz. çeşitli malzeme ve kaplamalarda ızgaralar/kapılar, merdivenler ve özel yapım yapılar, kaplamalar ve incelikli ve lüks kaplamalar. Üretim ve yönetim için uygun şekilde yapılandırılmış ve ileri teknolojiye sahip farklı makinelerle donatılmış iki tesise sahibiz; bunlardan 3 eksenli sayısal kontrollü bükme makinesi, oksigaz kesme ekipmanı, 40 mm'ye kadar plazma kesme, her türlü profili kesmek için şerit testere öne çıkıyor. 600 mm'ye kadar çok sayıda kaynak makinesinin yanı sıra: TIG Orbital kaynak makinesi, yüksek frekanslı TIG kaynak makineleri veya sinerjik MIG/MAG kaynak makineleri. Projelerin tüm planlaması ve hazırlığı, izometrik planlama için CAD araçlarıyla yapılır ve teknik çizim yazılımımız SOLIDWORKS'e sahibiz. Üretim ve yönetim için uygun şekilde yapılandırılmış ve ileri teknolojiye sahip farklı makinelerle donatılmış iki tesise sahibiz; bunlardan 3 eksenli sayısal kontrollü bükme makinesi, oksigaz kesme ekipmanı, 40 mm'ye kadar plazma kesme, her türlü profili kesmek için şerit testere öne çıkıyor. 600 mm'ye kadar çok sayıda kaynak makinesinin yanı sıra: TIG Orbital kaynak makinesi, yüksek frekanslı TIG kaynak makineleri veya sinerjik MIG/MAG kaynak makineleri. Projelerin tüm planlaması ve hazırlığı, izometrik planlama için CAD araçlarıyla yapılır ve teknik çizim yazılımımız SOLIDWORKS'e sahibiz. Üretim ve yönetim için uygun şekilde yapılandırılmış ve ileri teknolojiye sahip farklı makinelerle donatılmış iki tesise sahibiz; bunlardan 3 eksenli sayısal kontrollü bükme makinesi, oksigaz kesme ekipmanı, 40 mm'ye kadar plazma kesme, her türlü profili kesmek için şerit testere öne çıkıyor. 600 mm'ye kadar çok sayıda kaynak makinesinin yanı sıra: TIG Orbital kaynak makinesi, yüksek frekanslı TIG kaynak makineleri veya sinerjik MIG/MAG kaynak makineleri. Projelerin tüm planlaması ve hazırlığı, izometrik planlama için CAD araçlarıyla yapılır ve teknik çizim yazılımımız SOLIDWORKS'e sahibiz. çok sayıda kaynak makinesinin yanı sıra: TIG Orbital kaynak makinesi, yüksek frekanslı TIG kaynak makineleri veya sinerjik MIG/MAG kaynak makineleri. Projelerin tüm planlaması ve hazırlığı, izometrik planlama için CAD araçlarıyla yapılır ve teknik çizim yazılımımız SOLIDWORKS'e sahibiz. çok sayıda kaynak makinesinin yanı sıra: TIG Orbital kaynak makinesi, yüksek frekanslı TIG kaynak makineleri veya sinerjik MIG/MAG kaynak makineleri. Projelerin tüm planlaması ve hazırlığı, izometrik planlama için CAD araçlarıyla yapılır ve teknik çizim yazılımımız SOLIDWORKS'e sahibiz.",
                maxLength: MAX_CHARACTERS,
              })}
            </Typography>
          </CardContent>
          <CardActions className="CardActionsDiv">
            <Link className="moreLinkButton" to="/services/engineering-project">
              DAHA FAZLASINI KEŞFET
            </Link>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Card className="cards">
          <CardMedia height="200px" component="img" image={ServicesImage2} />
          <CardContent>
            <Typography variant="h5" component="div">
              Endüstriyel Bakım Hizmetleri
            </Typography>
            <Typography variant="body2" component="p">
              {TruncateText({
                text: "Endüstriyel bakım, mevcut kaynakların optimizasyonu, kullanım ömrünün uzatılması ve müşteriden tahliye edilmesi yoluyla şirketlerin stratejik vizyonunda giderek daha önemli hale geliyor.Endüstriyel Bakım hizmetleri ara sıra müdahale ve sürekli müdahale olmak üzere iki farklı şekilde yürütülebilir.Ara sıra yapılan bakım, faaliyet sektöründen bağımsız olarak, esasen müşterinin özel ihtiyaçlarına karşılık gelen düzeltici faaliyetlerle yönetilir. Bu anlamda Pipemasters, organizasyonun her alanında bizi farklı kılan değerlerle faaliyetlerine yön vermektedir: anında müdahale, ekip çalışması, deneyim, sonuçlara odaklanma, müşteriye yakınlık ve çalışanlarımızın motivasyonu ve şevki, bunun koşullarını oluşturur. başarılı müdahaleSürekli bakım, genellikle dış kaynak kullanımıyla gerçekleştirilen daha önleyici bir yönetimde hem kaynakların hem de tesislerin doğru çalışmasını sağlar.",
                maxLength: MAX_CHARACTERS,
              })}
            </Typography>
          </CardContent>
          <CardActions className="CardActionsDiv">
            <Link className="moreLinkButton" to="/services/ındustrial-project">
              DAHA FAZLASINI KEŞFET
            </Link>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Card className="cards">
          <CardMedia height="200px" component="img" image={ServicesImage3} />
          <CardContent>
            <Typography variant="h5" component="div">
              Çevre Projeleri - Freetilizer
            </Typography>
            <Typography variant="body2" component="p">
              {TruncateText({
                text: "Uzun bir araştırma ve prosedürel ve mekanik çözümler üretme sürecinin ardından FREETILIZER doğdu. Yan ürünleri ve organik atıkları dönüştüren ve değerlendiren, bunları düzeltici maddelere veya organik gübrelere ve hatta hayvan yemi için unlara dönüştüren hızlı ve çevre dostu bir teknoloji. Bu teknoloji aynı zamanda aromaların ve esansiyel yağların, mevcut yöntemlerden çok daha yüksek verim oranlarıyla karlılık düzeyleriyle çıkarılmasına izin verir ve bunların değerlendirilmesine izin veren tüm özellikleri garanti eder.FREETILIZER teknolojisi, organik yan ürünlerde bulunan besin maddelerinin, seçilmiş enzimlerden oluşan bir kompleks kullanılarak homojenizasyon, çalkalama, pH ve sıcaklık kontrollü bir reaktörde dönüştürülmesinden oluşur. İşlem, bir vakumlu kurutma adımıyla sona erer - verimli kurutma, bu da stabilize bir ürünün oluşumuyla sonuçlanır.Pipe Masters'ın amacı, kârlılığın yanı sıra, kuruluşların sosyal ve çevresel farkındalığını artırmak, döngüsel ekonomi perspektifinde ekonomik ve çevresel katma değer sağlayan çözümler sunmaktır.",
                maxLength: MAX_CHARACTERS,
              })}
            </Typography>
          </CardContent>
          <CardActions className="CardActionsDiv">
            <Link className="moreLinkButton" to="/services/environment-project">
              DAHA FAZLASINI KEŞFET
            </Link>
          </CardActions>
        </Card>
      </Grid>
      <Outlet />
    </Grid>
  );
};
