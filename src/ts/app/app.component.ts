import { Component } from "@angular/core";

@Component({
    selector: "main",
    template: require("./app.component.html"),
    styles: [require("./app.component.scss")]
})
export class AppComponent {

    public header: string = "color tool!";

    public colors: string[] = [
        'white', 'green', 'red', 'orange', 'yellow'
    ]

    public newColor: string = "";
    public addColor() {
        this.colors.push(this.newColor);
        this.newColor = "";
    }

}
