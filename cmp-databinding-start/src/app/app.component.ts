import {Component, ContentChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{
    type : "server", name : "pankaj", content:"content"
  }];

  bluePrintElements = [
    {
      type : "server", name : "pankaj", content:"content"
    }
  ]

  @ContentChild("testingBack") testingBack: string;

onServerAdded(server: {
  name: string, content: string
}){

  console.log("server added  : ", server)
  this.serverElements.push({
    type:"server",
    name: server.name,
    content: server.content
  })
}

onBluePrintAdded(server: {
  name: string, content: string
}){
  console.log("blue print added  : ", server)
  this.serverElements.push({
    type:"blueprint",
    name: server.name,
    content: server.content
  });
}

onTest(e){
  console.log("on test at app : ", e)
}
}



// diffrene between @viewchild and two way binding..
