import { Component } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { MatIconModule, MatIconRegistry } from "@angular/material/icon";

@Component({
  selector: "app-root",
  imports: [HeaderComponent, MatIconModule],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  constructor(iconRegistry: MatIconRegistry) {
    iconRegistry.registerFontClassAlias("ph", "ph")
  }
}
