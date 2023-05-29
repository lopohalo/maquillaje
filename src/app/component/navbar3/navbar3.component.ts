import { Component, ViewChild } from '@angular/core';
import { A11y, Mousewheel, Navigation, Pagination, SwiperOptions } from 'swiper';

@Component({
  selector: 'app-navbar3',
  templateUrl: './navbar3.component.html',
  styleUrls: ['./navbar3.component.css']
})
export class Navbar3Component {
  @ViewChild('swiperContainer') swiperContainer: any;
  datos:any = [
    {
      nombre: "Peluquería El Estilo",
      calificacion: 4.5,
      imagen: "https://media.istockphoto.com/id/640274128/es/foto/barbero-usando-tijeras-y-peine.jpg?s=612x612&w=0&k=20&c=auAw5KKIYSD9QTcztggDPHOHnY68bRtgHnGCslTlmcs="
    },
    {
      nombre: "Masajes Relajantes Spa",
      calificacion: 3.4,
      imagen: "https://media.istockphoto.com/id/1332275419/es/foto/mujer-disfrutando-del-masaje-de-muslos-en-el-centro-de-bienestar.jpg?s=612x612&w=0&k=20&c=4LEKGGRLxH24sGn91D9sVPFJY6upDHsExCDH0RPCBaU="
    },
    {
      nombre: "Consultorio de Belleza BellaMente",
      calificacion: 4.2,
      imagen: "https://media.istockphoto.com/id/1357613166/es/foto/peluquer%C3%ADa-joven-secando-el-cabello-de-un-cliente.jpg?s=612x612&w=0&k=20&c=uLklGC_Bocc-e4mDoU3BD5r82iTj-L4RwVwke5n3pds="
    },
    {
      nombre: "Salón de Belleza Glamour",
      calificacion: 4.8,
      imagen: "https://media.istockphoto.com/id/941797878/es/foto/ni%C3%B1a-en-una-peluquer%C3%ADa.jpg?s=612x612&w=0&k=20&c=7aDW5B-K9KQeT645sxpSFJTFSagdyzxfQieQiyvI4KU="
    },
    {
      nombre: "Spa de Belleza Harmony",
      calificacion: 3.9,
      imagen: "https://media.istockphoto.com/id/1369101264/es/foto/foto-de-una-atractiva-joven-acostada-en-una-cama-y-disfrutando-de-un-masaje-en-el-spa.jpg?s=612x612&w=0&k=20&c=w991OqV_xw00uqr0YsKhti5y7FIscI90AdFAQWwPeMY="
    },
    {
      nombre: "Peluquería Elegante",
      calificacion: 4.1,
      imagen: "https://media.istockphoto.com/id/1285770450/es/foto/interior-moderno-de-la-peluquer%C3%ADa.jpg?s=612x612&w=0&k=20&c=vQNmsInPDPdEYvC5-lt9UJm1UH2n21MGbx1E270bqt4="
    },
    {
      nombre: "Masajes Terapéuticos Serenidad",
      calificacion: 4.6,
      imagen: "https://media.istockphoto.com/id/691715966/es/foto/morena-sonriente-recibiendo-un-masaje-de-hombro.jpg?s=612x612&w=0&k=20&c=9kM1kd0m0Wh2oQO7fEl1UEfmdX-GWoo53FqFuXpplIk="
    },
    {
      nombre: "Consultorio de Belleza Radiante",
      calificacion: 3.7,
      imagen: "https://media.istockphoto.com/id/501399102/es/foto/cosmetology-mujer-paciente-que-en-la-cl%C3%ADnica-de-consulta-m%C3%A9dica.jpg?s=612x612&w=0&k=20&c=M71-0N54IDbKX_KlNUadapmxIWOrYn1LwYIVEkb6ykc="
    },
    {
      nombre: "Salón de Belleza Moderno",
      calificacion: 4.3,
      imagen: "https://media.istockphoto.com/id/1355417173/es/foto/hermosa-mujer-sentada-en-la-silla-de-barbero.jpg?s=612x612&w=0&k=20&c=bQIDLjQrxrbdR20pGxd5vR5Pk7FzwlFjrbDEkzUWWXA="
    },
    {
      nombre: "Spa de Masajes Harmony",
      calificacion: 4.4,
      imagen: "https://media.istockphoto.com/id/1389139829/es/foto/un-hombre-atl%C3%A9tico-recibiendo-un-masaje-de-recuperaci%C3%B3n-por-parte-de-un-fisioterapeuta-en.jpg?s=612x612&w=0&k=20&c=FiibBAvmtZp65fJ3Tr7gp0olYJt-cr3Sh5MT1AOHCSY="
    },
    {
      nombre: "Peluquería Bella Vista",
      calificacion: 3.6,
      imagen: "https://media.istockphoto.com/id/692999494/es/foto/peluquer%C3%ADa-corte-algunos-consejos-para-el-cabello.jpg?s=612x612&w=0&k=20&c=ZQK8JtvxpivNsTYmJnJfDh-52wgwIiGkBiPHDtIQQXA="
    },
    {
      nombre: "Masajes Orientales Zen",
      calificacion: 4.7,
      imagen: "https://media.istockphoto.com/id/1151432692/es/foto/masajista-freelance-dando-un-masaje-a-un-cliente-en-casa.jpg?s=612x612&w=0&k=20&c=zXYwwr7LBS1rcxkg1EIT9UDLuuKOG5aHZKzETay5NEM="
    },
    {
      nombre: "Consultorio de Belleza Armonía",
      calificacion: 3.8,
      imagen: "https://media.istockphoto.com/id/1249579135/es/foto/hombre-que-examina-los-dientes-en-los-dentistas.jpg?s=612x612&w=0&k=20&c=Jmg_LZtVxY90GTOZxV_RctG2_kY0pJSvgj_4QVGq0Ek="
    },
    {
      nombre: "Salón de Belleza Elegancia",
      calificacion: 4.0,
      imagen: "https://media.istockphoto.com/id/639682878/es/foto/bella-mujer-obtenci%C3%B3n-de-peluquer%C3%ADa-corte-de-cabello.jpg?s=612x612&w=0&k=20&c=98otHG6WKB7RSmXlamJYAj5dPmanugTT1JuTmvRWL24="
    },
    {
      nombre: "Spa de Relajación Total",
      calificacion: 4.9,
      imagen: "https://media.istockphoto.com/id/1414006903/es/foto/centro-de-spa-al-aire-libre-en-un-complejo-vacacional-de-lujo.jpg?s=612x612&w=0&k=20&c=Qg_aWzntxmb01age-AqTbnfdJIYD2mCWH8hKvYjEbqk="
    },
    {
      nombre: "Peluquería Moderna",
      calificacion: 4.2,
      imagen: "https://media.istockphoto.com/id/1339268647/es/foto/vista-superior-del-cliente-sentado-cerca-del-fregadero.jpg?s=612x612&w=0&k=20&c=bIc4kpWWmqo1QnO4Q0uUq1jv-LgcglMjXQ_7AM2yfPI="
    },
    {
      nombre: "Masajes Terapéuticos Harmony",
      calificacion: 3.5,
      imagen: "https://media.istockphoto.com/id/502131823/es/foto/ahora-todos-los-lugares-adecuados.jpg?s=612x612&w=0&k=20&c=kjaLg4EGgKDbq_VlODVwtL2kHX3eJsafi93TG74bkXM="
    },
    {
      nombre: "Consultorio de Belleza Esplendor",
      calificacion: 4.3,
      imagen: "https://media.istockphoto.com/id/1316620497/es/foto/mujer-en-consulta-con-un-m%C3%A9dico-esteticista-en-hospital-de-belleza.jpg?s=612x612&w=0&k=20&c=cjT3FBXb3taQacUiERg5HC4G4fIoSdVyv0XRItw34Y4="
    },
    {
      nombre: "Spa de Masajes Serenidad",
      calificacion: 3.9,
      imagen: "https://media.istockphoto.com/id/1344696218/es/foto/mujeres-embarazadas-felices-en-toalla-en-el-estudio.jpg?s=612x612&w=0&k=20&c=iyQmSi5n2IrcoYT2p_y_QsIF7K0wOo5HMPfnCBZVptI="
    },
    {
      nombre: "Peluquería Estilo y Belleza",
      calificacion: 4.6,
      imagen: "https://media.istockphoto.com/id/1350573811/es/foto/estilistas-trenzando-y-extendiendo-el-cabello-de-un-cliente-en-el-sal%C3%B3n-de-belleza.jpg?s=612x612&w=0&k=20&c=PgoqJjrSAyCcxNb0Tcr_91BuYgmGh2CyvozBklAqB6k="
    },
    {
      nombre: "Masajes Relajantes y Terapéuticos",
      calificacion: 3.7,
      imagen: "https://media.istockphoto.com/id/1172602109/es/foto/instructor-de-masajista-que-muestra-la-pr%C3%A1ctica-a-los-estudiantes.jpg?s=612x612&w=0&k=20&c=wsCalBACkxL3eafBrWpnAGF1kfLkxigsdJccsZYxlWA="
    },
    {
      nombre: "Consultorio de Belleza Encanto",
      calificacion: 4.4,
      imagen: "https://media.istockphoto.com/id/1297746170/es/foto/recepcionista-femenina-en-cl%C3%ADnica-m%C3%A9dica-consulta-tableta-y-ense%C3%B1a-radiograf%C3%ADa-dental-a-los.jpg?s=612x612&w=0&k=20&c=UWra3TUfPavDGGcQR9Zp7IxQDFd4EaqYooxX1Ri6cf8="
    },
    {
      nombre: "Salón de Belleza Elegante",
      calificacion: 4.1,
      imagen: "https://media.istockphoto.com/id/1270598349/es/foto/sala-de-masajes-de-spa-moderno.jpg?s=612x612&w=0&k=20&c=UV9t18jl5xzAetmEvCLmQMBox61A9OnFCKwvsJCtV3E="
    },
    {
      nombre: "Spa de Belleza Serenidad Total",
      calificacion: 4.8,
      imagen: "https://media.istockphoto.com/id/1205279929/es/foto/fisioterapeuta-femenino-o-quiropr%C3%A1ctico-ajustando-el-cuello-de-los-pacientes-fisioterapia.jpg?s=612x612&w=0&k=20&c=mMs1xKOQhtT4XDJQlDApSwhImvXB3UfLOR_2RTdjfw0="
    },
    {
      nombre: "Peluquería Moderna y Estilizada",
      calificacion: 3.6,
      imagen: "https://media.istockphoto.com/id/134052142/es/foto/peluquer%C3%ADa-situaci%C3%B3n.jpg?s=612x612&w=0&k=20&c=L_zKMVvvykg7VUFNaovTmKfgtgZd3SKSnOCggtFxOQg="
    },
    {
      nombre: "Masajes de Relajación Absoluta",
      calificacion: 4.3,
      imagen: "https://media.istockphoto.com/id/1479348956/es/foto/paciente-femenina-con-quiropr%C3%A1ctico-con-dolor-de-mu%C3%B1eca-enfoque-en-la-mu%C3%B1eca.jpg?s=612x612&w=0&k=20&c=qDIS9dgqv6LcSkxIEca49Er2cUSaLxx1kAMVd6u9OfU="
    },
    {
      nombre: "Consultorio de Belleza Belleza y Bienestar",
      calificacion: 3.8,
      imagen: "https://media.istockphoto.com/id/1173734121/es/foto/sesi%C3%B3n-de-tratamiento-de-eliminaci%C3%B3n-de-tatuajes-l%C3%A1ser-en-el-paciente-utilizando-la-tecnolog%C3%ADa.jpg?s=612x612&w=0&k=20&c=FtfgciCSnixs2Jdo9UXLcuCCJFMKziTE6whMOc7jLW4="
    },
    {
      nombre: "Salón de Belleza Glamour y Estilo",
      calificacion: 4.2,
      imagen: "https://media.istockphoto.com/id/1278225160/es/foto/estilista-junior-con-cliente-y-mentor.jpg?s=612x612&w=0&k=20&c=QSIY38ie9Qzj91D5QEROvhzdPo9vGuGp6QjEw3otMqA="
    },
    {
      nombre: "Spa de Masajes de Ensueño",
      calificacion: 4.7,
      imagen: "https://media.istockphoto.com/id/1445875946/es/foto/pareja-relajada-masaje-de-espalda-con-piedra-de-spa-y-bienestar-de-lujo-para-la-terapia-zen-la.jpg?s=612x612&w=0&k=20&c=N0mo4YdjTS8ngycWtsyfXMNGEXgCFydeAvXGRVzZNrs="
    },
    {
      nombre: "Peluquería Bella y Moderna",
      calificacion: 3.4,
      imagen: "https://media.istockphoto.com/id/511772969/es/foto/profesor-ayudando-a-los-estudiantes-formaci%C3%B3n-para-ser-hairdressers.jpg?s=612x612&w=0&k=20&c=FHATpVdBnLUxudLmF85QtjMn8DjeM0-iA4BvEqD4XHg="
    },
    {
      nombre: "Masajes Relajantes Zen",
      calificacion: 4.9,
      imagen: "https://media.istockphoto.com/id/1408385265/es/foto/empleada-sentada-en-un-sill%C3%B3n-de-masaje-port%C3%A1til-en-la-oficina-de-negocios-terapeuta.jpg?s=612x612&w=0&k=20&c=7SF41Gpgm_RG5N-4N7ik1m8bKY0yO1EVB1TEckWN2Eo="
    },
    {
      nombre: "Consultorio de Belleza Belleza Pura",
      calificacion: 3.3,
      imagen: "https://media.istockphoto.com/id/913095166/es/foto/mujeres-j%C3%B3venes-en-mantos-blancos-relajantes-en-el-centro-de-spa-de-belleza.jpg?s=612x612&w=0&k=20&c=qsj26FnL62Csfrimu0TRaoXF3b5LtJFHV9e_JOOrBiE="
    },
    {
      nombre: "Salón de Belleza Exclusivo",
      calificacion: 4.5,
      imagen: "https://media.istockphoto.com/id/506513408/es/foto/corte-de-pelo-con-lo-perfecto.jpg?s=612x612&w=0&k=20&c=K9id3SuZ8ggsaKLmJ9rGTPtFjzEJV27l2bJ7uhVEUn0="
    },
    {
      nombre: "Spa de Belleza y Bienestar",
      calificacion: 3.5,
      imagen: "https://media.istockphoto.com/id/1420933458/es/foto/masaje-capilar-femenino-en-casa-foto-de-archivo.jpg?s=612x612&w=0&k=20&c=862q6Pc4uBxkGyvCuwUpSGpS2PgESPqHpw5M1zHJZjQ="
    },
    {
      nombre: "Peluquería Elegancia Total",
      calificacion: 4.4,
      imagen: "https://media.istockphoto.com/id/1272772518/es/foto/encontrar-ese-peinado-perfecto.jpg?s=612x612&w=0&k=20&c=NxZoWA8Y1utbyLxLyRLt3fmlBcXVNyLuVw7Y7S0P8iQ="
    },
    {
      nombre: "Masajes Terapéuticos Armonía",
      calificacion: 3.9,
      imagen: "https://media.istockphoto.com/id/1428417112/es/foto/m%C3%A9dico-fisioterapeuta-paciente-mayor-y-cirug%C3%ADa-de-piernas-fisioterapia-y-curaci%C3%B3n-ortop%C3%A9dica.jpg?s=612x612&w=0&k=20&c=_KI9qXVgLcvg1fIOEleQ0-6-MiVTJGQywaFtVh4X-fc="
    },
    {
      nombre: "Consultorio de Belleza Divina",
      calificacion: 4.2,
      imagen: "https://media.istockphoto.com/id/1351835225/es/foto/pareja-acostada-en-masaje-en-el-spa.jpg?s=612x612&w=0&k=20&c=6waH1NHAGF0mBFlummkNlWHnhLr9rUPBqXUwcEPSRuw="
    },
    {
      nombre: "Salón de Belleza Moderno y Sofisticado",
      calificacion: 4.7,
      imagen: "https://media.istockphoto.com/id/1182128730/es/foto/la-mano-del-peluquero-en-guantes-negros-pinta-el-pelo-de-la-mujer-en-un-color-rosa.jpg?s=612x612&w=0&k=20&c=JMyZP1pE8c5QTOlzER-__HAz8is9HmC_MgNleAvw1Ss="
    },
    {
      nombre: "Spa de Masajes Relajantes y Terapéuticos",
      calificacion: 3.6,
      imagen: "https://media.istockphoto.com/id/1411429775/es/foto/joven-recibiendo-un-mensaje-en-un-spa.jpg?s=612x612&w=0&k=20&c=hzekegnQWxkezTI97PO6PfJCzZhEDF6lHkdBFZ9c47Q="
    },
    {
      nombre: "Peluquería Estilo y Glamour",
      calificacion: 4.3,
      imagen: "https://media.istockphoto.com/id/947995974/es/foto/mujer-joven-hablando-con-su-estilista-durante-una-cita-de-sal%C3%B3n.jpg?s=612x612&w=0&k=20&c=wHv3z4dvJyEMxXiHt6yt8jlz9y9fQe5kLNXBc3ydAok="
    }
  ];


  config: SwiperOptions = {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    effect: 'coverflow',
    coverflowEffect: {
      rotate: 0,
      stretch: 50, // Ajusta el valor para controlar el tamaño de las imágenes de fondo
      depth: 100, // Ajusta el valor para controlar la perspectiva de las imágenes de fondo
      modifier: 1,
      slideShadows: true
    },
    slidesPerView: 5,
    centeredSlides: true,
    breakpoints: {
      400: {
        slidesPerView: 'auto',
        centeredSlides: false
      }
    },
    on: {
      init: () => {
        setTimeout(() => {
          this.updateSlides();
        }, 100);
      }
    }
  };
  updateSlides() {
    if (this.swiperContainer && this.swiperContainer.directiveRef) {
      this.swiperContainer.directiveRef.update();
    }
  }
  onSlideChange() {
    console.log('slide change');
  }
  onSwiper($event: any) {
    console.log($event)
  }
}
