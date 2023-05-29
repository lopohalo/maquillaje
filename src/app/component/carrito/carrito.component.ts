import { Component } from '@angular/core';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {
   arrayProductos = [
    {
      id: 1,
      nombre: "Silla de Peluquería",
      precio: "$240,000",
      imagen: "https://ejemplo.com/silla.jpg"
    },
    {
      id: 2,
      nombre: "Secadora de Pelo Profesional",
      precio: "$120,000",
      imagen: "https://ejemplo.com/secadora.jpg"
    },
    {
      id: 3,
      nombre: "Tijeras de Peluquería",
      precio: "$50,000",
      imagen: "https://ejemplo.com/tijeras.jpg"
    },
    {
      id: 4,
      nombre: "Lápiz Labial de larga duración",
      precio: "$25,000",
      imagen: "https://ejemplo.com/labial.jpg"
    },
    {
      id: 5,
      nombre: "Plancha de Pelo",
      precio: "$80,000",
      imagen: "https://ejemplo.com/plancha.jpg"
    },
    {
      id: 6,
      nombre: "Mesa de Manicura",
      precio: "$150.000",
      imagen: "https://ejemplo.com/mesa.jpg"
    },
    {
      id: 7,
      nombre: "Toallas de Algodón (Paquete de 10)",
      precio: "$50,000",
      imagen: "https://ejemplo.com/toallas.jpg"
    },
    {
      id: 8,
      nombre: "Lámpara LED para Uñas",
      precio: "$90,000",
      imagen: "https://ejemplo.com/lampara.jpg"
    },
    {
      id: 9,
      nombre: "Cepillo para el Cabello",
      precio: "$20,000",
      imagen: "https://ejemplo.com/cepillo.jpg"
    },
    {
      id: 10,
      nombre: "Mascarilla Facial Hidratante",
      precio: "$35,000",
      imagen: "https://ejemplo.com/mascarilla.jpg"
    },
    {
      id: 11,
      nombre: "Set de Brochas de Maquillaje",
      precio: "$60,000",
      imagen: "https://ejemplo.com/brochas.jpg"
    },
    {
      id: 12,
      nombre: "Espejo de Maquillaje con Luces",
      precio: "$180,000",
      imagen: "https://ejemplo.com/espejo.jpg"
    },
    {
      id: 13,
      nombre: "Esmalte de Uñas de Colores Variados (Set de 5)",
      precio: "$40,000",
      imagen: "https://ejemplo.com/esmalte.jpg"
    },
    {
      id: 14,
      nombre: "Rizador de Pestañas",
      precio: "$25,000",
      imagen: "https://ejemplo.com/rizador.jpg"
    },
    {
      id: 15,
      nombre: "Cortador de Cutículas",
      precio: "$15,000",
      imagen: "https://ejemplo.com/cortador.jpg"
    },
    {
      id: 16,
      nombre: "Pincel para Delinear Cejas",
      precio: "$12,000",
      imagen: "https://ejemplo.com/pincel.jpg"
    },
    {
      id: 17,
      nombre: "Crema Hidratante para el Cuerpo",
      precio: "$45,000",
      imagen: "https://ejemplo.com/crema.jpg"
      },
      {
      id: 18,
      nombre: "Sistema de Depilación con Cera",
      precio: "$180,000",
      imagen: "https://ejemplo.com/depilacion.jpg"
      },
      {
      id: 19,
      nombre: "Acondicionador para Cabello Dañado",
      precio: "$30,000",
      imagen: "https://ejemplo.com/acondicionador.jpg"
      },
      {
      id: 20,
      nombre: "Cepillo Alisador de Pelo",
      precio: "$70,000",
      imagen: "https://ejemplo.com/alisador.jpg"
      },
      {
      id: 21,
      nombre: "Lima de Uñas Profesional",
      precio: "$10,000",
      imagen: "https://ejemplo.com/lima.jpg"
      },
      {
      id: 22,
      nombre: "Perfume Floral",
      precio: "$65,000",
      imagen: "https://ejemplo.com/perfume.jpg"
      },
      {
      id: 23,
      nombre: "Máquina de Afeitar Eléctrica",
      precio: "$90,000",
      imagen: "https://ejemplo.com/afeitadora.jpg"
      },
      {
      id: 24,
      nombre: "Pinzas de Depilación",
      precio: "$5,000",
      imagen: "https://ejemplo.com/pinzas.jpg"
      },
      {
      id: 25,
      nombre: "Kit de Maquillaje Profesional",
      precio: "$120,000",
      imagen: "https://ejemplo.com/kitmaquillaje.jpg"
      },
      {
      id: 26,
      nombre: "Espuma Limpiadora Facial",
      precio: "$30,000",
      imagen: "https://ejemplo.com/espuma.jpg"
      },
      {
      id: 27,
      nombre: "Cera para Cejas",
      precio: "$15,000",
      imagen: "https://ejemplo.com/ceracejas.jpg"
      },
      {
      id: 28,
      nombre: "Loción Corporal Hidratante",
      precio: "$25,000",
      imagen: "https://ejemplo.com/locion.jpg"
      },
      {
      id: 29,
      nombre: "Cortadora de Cabello",
      precio: "$180,000",
      imagen: "https://ejemplo.com/cortadora.jpg"
      },
      {
      id: 30,
      nombre: "Rizador de Cabello",
      precio: "$80,000",
      imagen: "https://ejemplo.com/rizadorcabello.jpg"
      },
      {
      id: 31,
      nombre: "Gel Fijador de Peinado",
      precio: "$20,000",
      imagen: "https://ejemplo.com/gelfijador.jpg"
      },
      {
      id: 32,
      nombre: "Mascarilla Capilar Reparadora",
      precio: "$35,000",
      imagen: "https://ejemplo.com/mascarillacapilar.jpg"
      },
      {
      id: 33,
      nombre: "Pestañas Postizas",
      precio: "$10,000",
      imagen: "https://ejemplo.com/pestanas.jpg"
      },
      {
      id: 34,
      nombre: "Desmaquillante Bifásico",
      precio: "$18,000",
      imagen: "https://ejemplo.com/desmaquillante.jpg"
      },
      {
      id: 35,
      nombre: "Pulidor de Uñas",
      precio: "$15,000",
      imagen: "https://ejemplo.com/pulidor.jpg"
      },
      {
      id: 36,
      nombre: "Aceite de Argán para el Cabello",
      precio: "$25,000",
      imagen: "https://ejemplo.com/aceiteargan.jpg"
      },
      {
      id: 37,
      nombre: "Crema Reafirmante Facial",
      precio: "$45,000",
      imagen: "https://ejemplo.com/cremareafirmante.jpg"
      },
      {
      id: 38,
      nombre: "Mascarilla Exfoliante",
      precio: "$30,000",
      imagen: "https://ejemplo.com/mascarillaexfoliante.jpg"
      }
      ];
      
      
  
    
    
  
}
