import { Component } from "@angular/core";
import { NbMenuItem, NbSidebarService } from "@nebular/theme";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "PaManagerWeb";

  items: NbMenuItem[] = [
    {
      title: "Profile",
      icon: "person-outline",
    },
    {
      title: "Change Password",
      icon: "lock-outline",
    },
    {
      title: "Privacy Policy",
      icon: { icon: "checkmark-outline", pack: "eva" },
    },
    {
      title: "Logout",
      icon: "unlock-outline",
    },
  ];

  constructor(private sidebarService: NbSidebarService) {}

  toggle() {
    this.sidebarService.toggle(true);
    return false;
  }
}
