'use strict';

angular.
  module('experiencePage').
    component('experiencePage', {
      templateUrl: 'experience-page/experience-page.template.html',
      controller: function experiencePageController() {
      this.architects = {
          "0": {
              'name':"Murat Danışman",
             'info': [
              {'imgURL': 'images/exp1.png',
              'projectName': 'bechtel-enka',
              'projectDetail':'Muscat havalimanı'},
                 
              {'imgURL': 'images/exp1.png',
              'projectName': 'EAA',
              'projectDetail':'ulus-savoy'},
                 
                     
              {'imgURL': 'images/exp1.png',
              'projectName': 'EAA',
              'projectDetail':'ulus-savoy'},
                     
              {'imgURL': 'images/exp1.png',
              'projectName': 'EAA',
              'projectDetail':'ulus-savoy'},
                     
              {'imgURL': 'images/exp1.png',
              'projectName': 'EAA',
              'projectDetail':'ulus-savoy'},
                     
              {'imgURL': 'images/exp1.png',
              'projectName': 'EAA',
              'projectDetail':'ulus-savoy'},
                     
          ]
                 
      },
          
             "1": {
              'name':"Gamze MULGAN",
             'info': [
              {'imgURL': 'images/exp1.png',
              'projectName': 'İGA',
              'projectDetail':'Proje kordinasyon'},
                 
                  {'imgURL': 'images/exp1.png',
              'projectName': 'İGA',
              'projectDetail':'Proje kordinasyon'}
          ]
                 
      }
      }
               console.log(this.architects); 
      }
      });
          