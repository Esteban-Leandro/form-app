import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './basic-page.component.html',
  styles: [
  ]
})
export class BasicPageComponent implements OnInit{

  public rtx5090 = { 
    name: 'RTX 5090',
    price: 2500,
    inStorage: 6
  }
  public myForm: FormGroup = this.fb.group({
      name: [ null, [ Validators.required, Validators.minLength( 3 )]],
      price: [ null, [ Validators.required, Validators.min( 0 )]],
      inStorage: [ null, [ Validators.required, Validators.min( 0 )]],
  })

  constructor(
    private fb: FormBuilder
  ){}

  ngOnInit(): void {
    // this.myForm.reset( this.rtx5090 );
  }

  isInvalidField( field: string ): boolean {
    return ( this.myForm.controls[field].errors || false ) && ( this.myForm.controls[field].touched || !this.myForm.controls[field].pristine );
  }

  getFieldError( field: string ): string {
    const errors = this.myForm.controls[field].errors;
    if( !errors ) return '';

    for (const key of Object.keys(errors)) {
      switch ( key ) {
        case 'required':
          return 'Este campo es requerido.';
        case 'minlength':
          return `Mínimo de ${ errors['minlength'].requiredLength } caracters.`;      
      }
    }
    return '';
  }

  onSave(): void {
    if(this.myForm.invalid){
      this.myForm.markAllAsTouched();
      return;
    }
    console.log( this.myForm.getRawValue() );
    this.myForm.reset( this.rtx5090 );

  }
}
