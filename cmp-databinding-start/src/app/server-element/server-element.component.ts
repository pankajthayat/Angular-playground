import {Component, ContentChild, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {

  @ContentChild("testing") testing: string;
  @Input("srvElement") element :{
    type: string, name: string, content: string
  }
  constructor() { }

  ngOnInit(): void {
  }

  onCheck(e){
    console.log("on check : ", e)
  }
}
