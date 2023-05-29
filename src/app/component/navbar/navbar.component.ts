import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  modalOpen = false;
  productoForm: FormGroup;
  iniciarSesion: any;
  guardarNombre: any;
  guardarEmpresa: any;
  popo: any;
  pepe: any = ''
  revisarCorreo = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/
  @ViewChild('img') imgHTML?: ElementRef;
  @ViewChild('password') passwordHTML?: ElementRef;
  @ViewChild('botonInicio') botonInicio?: ElementRef
  constructor(private fb: FormBuilder,
      private renderer2: Renderer2,
      private router: Router,) {
      this.productoForm = fb.group({
          email: ['', [Validators.required, Validators.pattern(this.revisarCorreo)]],
          password: ['', Validators.required],
      })
  }
  isNavbarScrolled: boolean = false;

  @HostListener('window:scroll')
  onWindowScroll() {
    this.isNavbarScrolled = (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) > 0;
  }

  Analizando() {
    let obj = {
      correo: "equipoDeTrabajo@gmail.com",
      contraseña: "equipo123456"
    }
    if(this.productoForm.controls['email'].value == obj.correo && this.productoForm.controls['password'].value){
        this.pepe = 'Equipo de Trabajo'
        this.productoForm.reset()
        this.closeModal()
    }

  }
  cerrarSesion(){
    this.pepe = ''
  }

    openModal() {
      this.modalOpen = true;
      document.body.classList.add('modal-open'); // Agregar clase para evitar scroll en el fondo
    }
  
    closeModal() {
      this.modalOpen = false;
      document.body.classList.remove('modal-open'); // Remover clase para permitir scroll en el fondo
    }

    ngOnInit(): void {
       
    }
    cambio1() {
      const elemento = this.passwordHTML?.nativeElement;
      const imagen = this.imgHTML?.nativeElement;
      const juan = elemento.dataset.muestraj;
      if (juan == 'false') {
          this.renderer2.setAttribute(elemento, 'type', 'text');
          this.renderer2.setAttribute(elemento, 'data-muestraj', 'true');
          this.renderer2.setAttribute(imagen, 'src', './assets/img/eye-solid.svg');

      } else {
          this.renderer2.setAttribute(elemento, 'type', 'password');
          this.renderer2.setAttribute(elemento, 'data-muestraj', 'false');
          this.renderer2.setAttribute(imagen, 'src', './assets/img/eye-slash-solid.svg');
      }
  }

}
