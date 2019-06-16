import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getCompanyTestimonial() {
    Swal.fire({
      title: '4Beyond',
      html: `<i class="fas fa-quote-left"></i>
      Very agile in his work, very collaborative, understands easily the needs and shows great knowledge of his work
      <i class="fas fa-quote-right"></i>
      <footer class="blockquote-footer">Wilter Porras <span class="font-weight-bold">4Beyond Backend Developer</span></footer>`,
      showCloseButton: true,
      confirmButtonText: 'Close'
    });
  }

}
