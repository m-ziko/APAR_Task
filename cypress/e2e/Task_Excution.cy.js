import VerifyClass from "../POM/VerifyClass.cy"
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})
describe('template spec', () => {
  it('Verify Plan In Bahrin', () => {
    cy.visit('https://www.stctv.com/bh-ar')
    VerifyClass.ValidateType("classic","أساسية")
    VerifyClass.ValidatePrice("classic","3")
    VerifyClass.Validatecurrency("classic","دينار بحريني")
    VerifyClass.ValidateType("lite","لايت")
    VerifyClass.ValidatePrice("lite","2")
    VerifyClass.Validatecurrency("lite","دينار بحريني")
    VerifyClass.ValidateType("premium","بريميوم")
    VerifyClass.ValidatePrice("premium","6")
    VerifyClass.Validatecurrency("premium","دينار بحريني")


    
})
it('Verify Plan In kwait', () => {
  cy.visit('https://www.stctv.com/kw-ar')
  VerifyClass.ValidateType("classic","أساسية")
  VerifyClass.ValidatePrice("classic","2.5")
  VerifyClass.Validatecurrency("classic"," دينار كويتي")
  VerifyClass.ValidateType("lite","لايت")
  VerifyClass.ValidatePrice("lite","1.2")
  VerifyClass.Validatecurrency("lite"," دينار كويتي")
  VerifyClass.ValidateType("premium","بريميوم")
  VerifyClass.ValidatePrice("premium","4.8")
  VerifyClass.Validatecurrency("premium"," دينار كويتي")


  
})
it('Verify Plan In Saudi Arabia', () => {
  cy.visit('https://www.stctv.com/sa-ar')
  VerifyClass.ValidateType("classic","أساسية")
  VerifyClass.ValidatePrice("classic","25")
  VerifyClass.Validatecurrency("classic"," ريال سعودي")
  VerifyClass.ValidateType("lite","لايت")
  VerifyClass.ValidatePrice("lite","15")
  VerifyClass.Validatecurrency("lite","ريال سعودي")
  VerifyClass.ValidateType("premium","بريميوم")
  VerifyClass.ValidatePrice("premium","60")
  VerifyClass.Validatecurrency("premium"," ريال سعودي")


  
})
})