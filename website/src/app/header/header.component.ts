import { Component } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule, MatIconRegistry } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule } from "@angular/material/menu";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-header",
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    RouterModule,
  ],
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.scss",
})
export class HeaderComponent {
}
