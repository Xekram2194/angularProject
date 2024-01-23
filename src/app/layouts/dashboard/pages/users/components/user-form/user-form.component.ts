import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


interface Rol {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})

export class UserFormComponent {
  roles: Rol[] = [
    {value: 'admin', viewValue: 'Administrador'},
    {value: 'user', viewValue: 'Usuario'},
    {value: 'student', viewValue:  'Estudiante'},
    {value: 'teacher', viewValue:  'Docente'}
  ]

  userForm: FormGroup;

  @Output()
  userSubmitted = new EventEmitter 

  constructor(private fb:FormBuilder){
    this.userForm = this.fb.group({
      firstName: this.fb.control('', Validators.required),
      lastName: this.fb.control('', Validators.required),
      email: this.fb.control('', Validators.required),
      password: this.fb.control('', Validators.required),
      role: this.fb.control('', Validators.required),
    })
  }

  onSubmit(): void{
    this.userSubmitted.emit(this.userForm.value)
    // console.log(this.userForm.value)
  }
}
