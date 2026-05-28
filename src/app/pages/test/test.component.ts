import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {

}
