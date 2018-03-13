import { Component } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  options: FormGroup;
  panelOpenState: boolean = false;

  constructor(fb: FormBuilder) {
    this.options = fb.group({
      'fixed': false,
      'top': 0,
      'bottom': 0,
    });
  }

  shouldRun = true;


  ngOnInit() {
  
  }
}

