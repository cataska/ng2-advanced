import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-classic2',
  templateUrl: './classic2.component.html',
  styleUrls: ['./classic2.component.css']
})
export class Classic2Component implements OnInit {

  form: FormGroup;

  data: any = {
    name: 'cat',
    sid: 'A123456789'
  };

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: [
        'cat', Validators.required
      ],
      sid: [
        'A123456789', [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10)
        ]
      ]
    })
  }

}
