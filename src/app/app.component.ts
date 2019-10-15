import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-cv';
  name: string = "Greg Doud";
  address = "4900 Parkway Dr.";
  city = "Mason";
  state = "OH";
  zip = "45040";
  phone = "513-555-1212";
  email = "greg@maxtrain.com";
  tech = [
    "Git/GitHub", "SQL", "C#", 
    "EF", "MVC", "WebAPI",
    "HTML", "CSS", "JS"
  ];
  jobs = [
    { company: "MAX", title: "Sr. Instructor", duration: "2.5yr", value: "Taught students" },
    { company: "TIY", title: "Sr. Instructor", duration: "1yr", value: "Taught some students" }
  ];
  schools = [
    { school: "Athenaeum of Ohio", degree: "MA LPM", year: "2016" },
    { school: "UC", degree: "BS IPS", year: "1985" }
  ];
}
