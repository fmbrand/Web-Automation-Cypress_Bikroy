import {Given,When,Then} from "@badeball/cypress-cucumber-preprocessor";
import ItemsPages from "../../Locators/item"; //home steps commands to connect with homestep to home.js
import allData from '../../data/data' // date.js page connected to URL & time wait.
import 'cypress-file-upload';           //import cypress file upload 
Cypress.config('defaultCommandTimeout', 60000) // time wait
const item = new ItemsPages(); 
const data = new allData();

Given('User Open nextlab Website',()=> {
    cy.visit(data.pos_Url);
   //  cy.wait(data.fiveSecond)
    });
   
    When('Click on the subtitle',  ()=> {
      // cy.wait(data.fiveSecond);
      cy.xpath(organization.subtitle).click()
      cy.wait(data.fiveSecond)
   })
   
   When('Enter the user login credentials', () => {
      // const feature_dats = dataTable.hashes();
      // cy.wait(data.oneSecond );
      cy.xpath(locators.userName).should('be.visible');
      cy.xpath(locators.userName).type('fahim.nextlab@gmail.com'); 
      // cy.wait(data.oneSecond);
      cy.xpath(locators.password).should('be.visible');
      cy.xpath(locators.password).type('qwerty'); 
      // cy.wait(data.oneSecond );
   });
   
   Then('Click the Login Button',  ()=> {
      //  cy.wait(data.threeSecond );
       cy.xpath(locators.login).should('be.visible');
       cy.xpath(locators.login).click()
      //  cy.wait(data.oneSecond)
    })
    Then('Click on Hambergger menu',()=>{
      // cy.wait(data.twoSecond );
      // cy.xpath(organization.side_view).should('be.visible');
      cy.xpath(dashboard.hamburgermenue).click()
      }) 
   
   /*===============================================
                           Item
   =================================================*/
   
   When('Click on the Items dropdown',()=>{
      cy.wait(data.twoSecond );
      cy.xpath(item.itemsidebar).should('be.visible');
      cy.xpath(item.itemsidebar).click()
      })
   
   When('Click on the All Items',()=>{
      cy.wait(data.twoSecond );
      cy.xpath(item.allitem).should('be.visible');
      cy.xpath(item.allitem).click()
      })
   
   When('Check that all table column are show properly',()=>{
      cy.wait(data.twoSecond );
      cy.document().then(doc => {
         const el = doc.createElement('div');
         el.setAttribute('id', 'center-click-target');
         Object.assign(el.style, {
           position: 'fixed',
           top: '50%',
           left: '50%',
           width: '1px',
           height: '1px',
           backgroundColor: 'transparent',
           zIndex: '9999',
         });
         doc.body.appendChild(el);
       });
     
       cy.get('#center-click-target').click();
      cy.xpath(item.itemcode).should('be.visible');
      cy.xpath(item.itemname).should('be.visible');
      cy.xpath(item.brand).should('be.visible');
      cy.xpath(item.group).should('be.visible');
      cy.xpath(item.type).should('be.visible');
      cy.xpath(item.unitprice).should('be.visible');
      cy.xpath(item.status).should('be.visible');
      cy.xpath(item.action).should('be.visible')
      })
   
   When('Enter that Item Name',()=>{
      cy.wait(data.twoSecond );
      cy.xpath(item.fitemname).invoke('show');
      cy.xpath(item.fitemname).should('be.visible');
      cy.xpath(item.fitemname).click();
      cy.xpath(item.fitemname).type('iPhone 16 Pro Max')
      })
   
   When('Click on Filter button',()=>{
      cy.wait(data.twoSecond );
      cy.xpath(item.filter).invoke('show');
      cy.xpath(item.filter).click({force: true});
      })
   When('Check that given item(iPhone 16 Pro Max) are show properly',()=>{
      cy.wait(data.twoSecond );
      cy.xpath(item.fexampleitemname).should('be.visible');
      })
   