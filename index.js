import { LightningElement } from 'lwc';

export default class HelloQuerySelectorDOM extends LightningElement {
    userDetails=["Hari","Sai","Mahesh","Raju","Dinesh"]
    handlerDOM(){
        const elem = this.template.querySelector('h1')
        console.log(elem.innerText)
        const eleme= this.template.querySelectorAll('.name')
       Array.from(eleme).forEach(item => {
          console.log(item.innerText)
          item.setAttribute("title",item.innerText)
       });
    }
}