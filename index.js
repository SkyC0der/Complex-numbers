
class ComplexNumber {
//type code here
constructor(real,imaginary){
    this.real = real;
    this.imag = imaginary;
}

real(){
    return this.real;
}

imag(){
    return this.imag;
}

add(func){
   return new ComplexNumber(this.real+func.real, this.imag+func.imag)
}


sub(func){
    return new ComplexNumber(this.real-func.real, this.imag-func.imag)
 }
mul(product){
    return new ComplexNumber( this.real*product.real - this.imag*product.imag , this.real*product.imag + this.imag*product.real)
 }

div(quotient){
    return new ComplexNumber(
        (this.real * quotient.real + this.imag * quotient.imag)/(quotient.real**2 + quotient.imag**2) , (this.imag * quotient.real - this.real * quotient.imag)/(quotient.real**2 + quotient.imag**2)  
         );
}

get abs(){
    return Math.sqrt(this.real**2 + this.imag**2);
}

get conj(){
    return new ComplexNumber (this.real, this.imag != 0 ? -this.imag : 0);
}

get exp(){
    return new ComplexNumber(Math.E**this.real * Math.cos(this.imag), Math.E**this.real * Math.sin(this.imag))
}

}

module.exports = ComplexNumber
