import {Given,When,Then} from "@badeball/cypress-cucumber-preprocessor";
import mobilesPages from "../../Locators/mobiles"; //mobiles steps commands to connect with mobilesSteps to mobiles.js
import allData from '../../data/data' // date.js page connected to URL & time wait.
import 'cypress-file-upload';           //import cypress file upload 
Cypress.config('defaultCommandTimeout', 60000) // time wait
const locator = new mobilesPages(); 
const data = new allData();

// Given('Open Browser and Visit Website',()=> {
//     // Enter the URL
//     cy.visit(data.bikroy_url);
//     });
//     When('Check that bikroy logo is present', () => {
//         //Check that bikroy logo
//         cy.wait(2000);
//         cy.xpath(locator.logo).should('be.visible')
//         });
    Then('click on mobiles icon', ()=> {
        cy.xpath(locator.mobile1).should('be.visible')
        cy.xpath(locator.mobile1).click()
        cy.wait(2000)
     });
    When('check that select location is present', () => {     
       //type iphone input text
       cy.wait(2000);
       cy.xpath(locator.location).should('be.visible')
    //    cy.xpath(locator.search_box).type('iphone');
       });
    Then('click on select  location',  ()=> {              
    //    cy.xpath(locator.search).should('be.visible')
       cy.xpath(locator.location).click()
       cy.wait(2000)
      });
   
    When('check that dhaka options is present', () => {   
        //Check mobiles text
        cy.xpath(locator.dhaka).should('be.visible');
        // cy.xpath(locator.mobiles).click()
        });
    Then('click on dhaka',  ()=> {              
        // cy.xpath(locator.electrics).should('be.visible')
        cy.xpath(locator.dhaka).click()
        cy.wait(2000)
        });
    Then('check that mirpur is present',  ()=> {              
        cy.xpath(locator.mirpur).should('be.visible')
        // cy.xpath(locator.vehicles).click()
        cy.wait(2000)
        });    
    Then('click on mirpur',  ()=> {              
        // cy.xpath(locator.property).should('be.visible')
        cy.xpath(locator.mirpur).click()
        cy.wait(2000)
        });
    Then('check that short results by is present',  ()=> {              
        cy.xpath(locator.shortBy).should('be.visible')
        // cy.xpath(locator.homeLiving).click()
        cy.wait(2000)
        });
    Then('click on short results by box',  ()=> {              
        // cy.xpath(locator.shortByBox).should('be.visible')
        cy.xpath(locator.shortByBox).click()
        cy.wait(2000)
        });
    Then('check that sort by is present',  ()=> {              
        cy.xpath(locator.newest).should('be.visible')
        // cy.xpath(locator.mensFashion).click()
         cy.wait(2000)
        });
    Then('click on sort by newest',  ()=> {              
        // cy.xpath(locator.womensFashion).should('be.visible')
        cy.xpath(locator.newest).click()
        cy.wait(2000)
        });   
    Then('check that filter ads by is present',  ()=> {              
        cy.xpath(locator.filterBy).should('be.visible')
        // cy.xpath(locator.hobbiesSportsGrooming).click()
        cy.wait(2000)
        }); 
    Then('check that urgent is present',  ()=> {              
        cy.xpath(locator.urgent).should('be.visible')
        // cy.xpath(locator.businessIndustry).click()
        cy.wait(2000)
        }); 
    Then('click on urgent',  ()=> {              
        // cy.xpath(locator.education).should('be.visible')
                cy.xpath(locator.urgent).click()
                cy.wait(2000)
                }); 
    Then('check that type of poster is present',  ()=> {              
        cy.xpath(locator.typePoster).should('be.visible')
        // cy.xpath(locator.essentials).click()
        cy.wait(2000)
                    }); 
    Then('click on options box',  ()=> {              
        // cy.xpath(locator.agriculture).should('be.visible')
        cy.xpath(locator.typePosterBox).click()
        cy.wait(2000)
        }); 
    Then('click on all options',  ()=> {              
        // cy.xpath(locator.jobs).should('be.visible')
        cy.xpath(locator.all).click()
        cy.wait(2000)
        }); 
    Then('check that category is present',  ()=> {              
        cy.xpath(locator.category).should('be.visible')
        // cy.xpath(locator.services).click()
        cy.wait(2000)
        }); 
    Then('check that mobiles is present',  ()=> {              
        cy.xpath(locator.mobiles).should('be.visible')
        // cy.xpath(locator.overseas).click()
        cy.wait(2000)
        }); 

    Then('click on all mobile phones', ()=> {
        cy.xpath(locator.mobilePhones).should('be.visible')
        cy.xpath(locator.mobilePhones).click()
        cy.wait(2000)
     });
     Then('check that search box is present', ()=> {
        cy.xpath(locator.search_box).should('be.visible')
        // cy.xpath(locator.mobilePhones).click()
        cy.wait(2000)
     });
     Then('click on search box', ()=> {
        // cy.xpath(locator.mobilePhones).should('be.visible')
        cy.xpath(locator.search_box).click()
        cy.xpath(locator.search_box).type('iphone{enter}')
        // cy.xpath(locator.iphone).click()
        cy.wait(2000)
     });
    //  Then('click on search icon ', ()=> {
    //     // cy.xpath(locator.search).should('be.visible')
    //     cy.xpath(locator.search).click()
    //     cy.wait(2000)
    //  });
     Then('check that result is present', ()=> {
        cy.xpath(locator.showResult).should('be.visible')
        // cy.xpath(locator.mobilePhones).click()
        cy.wait(2000)
     });
