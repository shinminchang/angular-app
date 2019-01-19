import {Component, OnInit} from '@angular/core';
import {ConfigService} from '../service/service';
import {Observable} from "rxjs";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private configService: ConfigService) {
  }

  test: string;

  ngOnInit() {
    this.configService.getConfig().subscribe(res => {
      this.test = res.message;
    });
  }
}
