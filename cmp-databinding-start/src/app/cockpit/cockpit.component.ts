import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverAdded =  new EventEmitter<{name:string, content: string}>();
  @Output() blueprintAdded =  new EventEmitter();
  newServerName = '';
  newServerContent = '';


  @ViewChild("serverName") servernameInput: ElementRef

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(event: HTMLInputElement) {
    console.log("server : ", event);
    console.log("server : ", event.value);

    console.log("server name  : ", this.servernameInput.nativeElement.value);
    const data = {
      name: event.value, //this.newServerName,
      content: this.newServerContent
    }

    this.serverAdded.emit(data);
    // this.serverElements.push({
    //   type: 'server',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });
  }

  onAddBlueprint(event: HTMLInputElement) {
    const data = {
      name: event.value,
      content: this.newServerContent
    }
    this.blueprintAdded.emit(data);
    // this.serverElements.push({
    //   type: 'blueprint',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });
  }

}


// diffrene between @viewchild and two way binding..
//ndModal vs viewPort
