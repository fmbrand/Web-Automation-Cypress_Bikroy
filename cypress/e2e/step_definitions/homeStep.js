import {Given,When,Then} from "@badeball/cypress-cucumber-preprocessor";
import homePages from "../../Locators/home"; //home steps commands to connect with homestep to home.js
import allData from '../../data/data' // date.js page connected to URL & time wait.
import 'cypress-file-upload';           //import cypress file upload 
Cypress.config('defaultCommandTimeout', 60000) // time wait
const locator = new homePages(); 
const data = new allData();

Given('Open Browser and Visit Website',()=> {
    // Enter the URL
    cy.visit(data.bikroy_url);
    });
    When('Check that bikroy logo is present', () => {
        //Check that bikroy logo
        cy.wait(2000);
        cy.xpath(locator.logo).should('be.visible')
        });
    Then('Click on search box', ()=> {
        cy.xpath(locator.search_box).should('be.visible')
        cy.xpath(locator.search_box).click()
        cy.wait(2000)
     });
    When('Enter text to search option', () => {     
       //type iphone input text
       cy.wait(2000);
       cy.xpath(locator.search_box).should('be.visible')
       cy.xpath(locator.search_box).type('iphone');
       });
    Then('Click on search option',  ()=> {              
       cy.xpath(locator.search).should('be.visible')
       cy.xpath(locator.search).click()
       cy.wait(2000)
      });
    When('Back to the previous page', () => {   
        //Back to the previous page
        cy.go('back');
        });
    When('Check that Mobiles logo is present', () => {   
        //Check mobiles text
        cy.xpath(locator.mobiles).should('be.visible');
        // cy.xpath(locator.mobiles).click()
        });
    Then('Check that Electronics logo is present',  ()=> {              
        cy.xpath(locator.electrics).should('be.visible')
        // cy.xpath(locator.electrics).click()
        cy.wait(2000)
        });
    Then('Check that Vehicles logo is present',  ()=> {              
        cy.xpath(locator.vehicles).should('be.visible')
        // cy.xpath(locator.vehicles).click()
        cy.wait(2000)
        });    
    Then('Check that Property logo is present',  ()=> {              
        cy.xpath(locator.property).should('be.visible')
        // cy.xpath(locator.property).click()
        cy.wait(2000)
        });
    Then('Check that Home & Living logo is present',  ()=> {              
        cy.xpath(locator.homeLiving).should('be.visible')
        // cy.xpath(locator.homeLiving).click()
        cy.wait(2000)
        });
    Then('Check that Pets & Animals logo is present',  ()=> {              
        cy.xpath(locator.petsAnimals).should('be.visible')
        // cy.xpath(locator.petsAnimals).click()
        cy.wait(2000)
        });
    Then('Check that Mens Fashion & Grooming logo is present',  ()=> {              
        cy.xpath(locator.mensFashion).should('be.visible')
        // cy.xpath(locator.mensFashion).click()
         cy.wait(2000)
        });
    Then('Check that Womens Fashion & Beauty logo is present',  ()=> {              
        cy.xpath(locator.womensFashion).should('be.visible')
        // cy.xpath(locator.womensFashion).click()
        cy.wait(2000)
        });   
    Then('Check that Hobbies,Sports & kids logo is present',  ()=> {              
        cy.xpath(locator.hobbiesSportsGrooming).should('be.visible')
        // cy.xpath(locator.hobbiesSportsGrooming).click()
        cy.wait(2000)
        }); 
    Then('Check that business & industry logo is present',  ()=> {              
        cy.xpath(locator.businessIndustry).should('be.visible')
        // cy.xpath(locator.businessIndustry).click()
        cy.wait(2000)
        }); 
    Then('Check that education logo is present',  ()=> {              
        cy.xpath(locator.education).should('be.visible')
                // cy.xpath(locator.education).click()
                cy.wait(2000)
                }); 
    Then('Check that Essentials logo is present',  ()=> {              
        cy.xpath(locator.essentials).should('be.visible')
        // cy.xpath(locator.essentials).click()
        cy.wait(2000)
                    }); 
    Then('Check that agriculture logo is present',  ()=> {              
        cy.xpath(locator.agriculture).should('be.visible')
        // cy.xpath(locator.agriculture).click()
        cy.wait(2000)
        }); 
    Then('Check that Jobs logo is present',  ()=> {              
        cy.xpath(locator.jobs).should('be.visible')
        // cy.xpath(locator.jobs).click()
        cy.wait(2000)
        }); 
    Then('Check that Services logo is present',  ()=> {              
        cy.xpath(locator.services).should('be.visible')
        // cy.xpath(locator.services).click()
        cy.wait(2000)
        }); 
    Then('Check that Overseas Jobs logo is present',  ()=> {              
        cy.xpath(locator.overseas).should('be.visible')
        // cy.xpath(locator.overseas).click()
        cy.wait(2000)
        }); 
    When('Check that login button is present', () => {   
        //Check mobiles text
        cy.xpath(locator.login).should('be.visible');
        // cy.xpath(locator.mobiles).click()
        });
    Then('Click on login button',  ()=> {              
       cy.xpath(locator.login).should('be.visible')
       cy.xpath(locator.login).click()
       cy.wait(2000)
      });
    Then("Click on 'ইমেইল দিয়ে লগ ইন করুন'",  ()=> {              
       cy.xpath(locator.emaillogin).should('be.visible')
       cy.xpath(locator.emaillogin).click()
       cy.wait(2000)
      });
    When('Enter valid email', () => {     
       //type iphone input text
       cy.wait(2000);
       cy.xpath(locator.emailbox).should('be.visible')
       cy.xpath(locator.emailbox).click()
       cy.xpath(locator.emailbox).type('fahim1.qups@gmail.com')
       });
    When('Enter valid password', () => {     
       //type iphone input text
       cy.wait(2000);
       cy.xpath(locator.passwordbox).should('be.visible')
       cy.xpath(locator.passwordbox).click()
       cy.xpath(locator.passwordbox).type('12345')
       });
    Then("Click login button",  ()=> {              
        cy.xpath(locator.loginbutton).should('be.visible')
        cy.xpath(locator.loginbutton).click()
       });
// ------------------------------------Verify that user can see mobile items--------------------
    When('Check that browse items by category is visible', () => {   
        cy.xpath(locator.category).should('be.visible');
        // cy.xpath(locator.mobiles).click()
        });
    Then('Click on mobiles',  ()=> {              
       cy.xpath(locator.mobilescategory).should('be.visible')
       cy.xpath(locator.mobilescategory).click()
       cy.wait(2000)
      });
    When('Search mobile model', () => {     
       cy.wait(2000);
       cy.xpath(locator.categorysearch_box).should('be.visible')
       cy.xpath(locator.categorysearch_box).click()
       cy.xpath(locator.categorysearch_box).type('Redmi Note 8')
       });
    Then('Click on search icon',  ()=> {              
       cy.xpath(locator.categorysearch_button).should('be.visible')
       cy.xpath(locator.categorysearch_button).click()
       cy.wait(2000)
      })
    Then('Check that search list is visible',  ()=> { 
       cy.wait(2000)             
       cy.xpath(locator.categorysearch_list).should('be.visible')
       cy.xpath(locator.categorysearch_list).and('contain.text', 'Redmi Note 8');
       
      })
// ------------------------------------Verify that user can see electronics items--------------------
    Then('Click on electronics',  ()=> {              
       cy.xpath(locator.electricscategory).should('be.visible')
       cy.xpath(locator.electricscategory).click()
       cy.wait(2000)
      });
    When('Search  electronics', () => {     
       cy.wait(2000);
       cy.xpath(locator.categorysearch_box).should('be.visible')
       cy.xpath(locator.categorysearch_box).click()
       cy.xpath(locator.categorysearch_box).type('Asus vivobook s15')
       });
    // Then('Click on search icon',  ()=> {              
    //    cy.xpath(locator.categorysearch_button).should('be.visible')
    //    cy.xpath(locator.categorysearch_button).click()
    //    cy.wait(2000)
    //   })
    Then('Check that that electrinics list is visible',  ()=> { 
       cy.wait(2000)             
       cy.xpath(locator.electricssearchlist).should('be.visible')
       cy.xpath(locator.electricssearchlist).and('contain.text', 'Asus vivobook s15');
       
      })
// ------------------------------------Verify that user can see vehicles items--------------------
    Then('Click on vehicles',  ()=> {              
       cy.xpath(locator.vehiclescategory).should('be.visible')
       cy.xpath(locator.vehiclescategory).click()
       cy.wait(2000)
      });
    When('Search  vehicles', () => {     
       cy.wait(2000);
       cy.xpath(locator.categorysearch_box).should('be.visible')
       cy.xpath(locator.categorysearch_box).click()
       cy.xpath(locator.categorysearch_box).type('Yamaha R15 v3')
       });
    // Then('Click on search icon',  ()=> {              
    //    cy.xpath(locator.categorysearch_button).should('be.visible')
    //    cy.xpath(locator.categorysearch_button).click()
    //    cy.wait(2000)
    //   })
    Then('Check that vehicles list is visible',  ()=> { 
       cy.wait(2000)             
       cy.xpath(locator.electricssearchlist).should('be.visible')
       cy.xpath(locator.electricssearchlist).and('contain.text', 'Yamaha R15 v3');
       
      })