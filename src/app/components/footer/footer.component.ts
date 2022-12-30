import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  myFooterText: string = `This is placeholder text. This is where you should place your legal text and/or privacy notice. It is recommended that you consult with your legal advisors for text that is relevant and adequate for your context and use. UI Toolkit cannot offer advice on legal text or privacy notices, this is outside our remit as a design system. Thank you for using UI Toolkit.`;
  constructor() { }

  ngOnInit(): void {
  }

}
