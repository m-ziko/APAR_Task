class VerifyClass{
    elements = {
        Country:()=>cy.get('.head-links > .country-current')



    }

    ValidateType(Type,Value){
        cy.get('#'+Type).should(($name)=>{
            expect($name.text()).equal(Value)
    
        })
        
      
        
      }
      ValidatePrice(Type,price){
        cy.get('#'+Type+"_tierCurrency").should(($name)=>{
            expect($name.text()).contain(price)    
        }
        
        )
   
  }
  Validatecurrency(Type, Currency){
    
    cy.get('#'+Type+"_tierCurrency").should(($Currency)=>{
        expect($Currency.text()).contain(Currency)    

    }
    )
  
  
}
}
module.exports = new VerifyClass();
