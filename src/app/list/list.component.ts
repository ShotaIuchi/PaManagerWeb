import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
})
export class ListComponent implements OnInit {
  items: string[] = ["abc", "123", "def", "ABC"];

  constructor() {}

  ngOnInit(): void {}
}
