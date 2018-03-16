'use strict';

angular.
  module('projectSlider').
    component('projectSlider', {
      templateUrl: 'project-slider/project-slider.template.html',
      controller: function projectSliderController() {
      this.projects = {
        "0": {
          'name': "İç Mekan",
          'imgURL': 'images/icmekankapak.png',
          'sliderImg': [
            {sliderImgId: 0, sliderImageURL: "images/icmekankapak.png"},
            {sliderImgId: 1, sliderImageURL: "images/icmekankapak.png"},
            {sliderImgId: 2, sliderImageURL: "images/icmekankapak.png"}
          ]
        }
        // {
        //   id: 0,
        //   name: 'İç Mekan',
        //   imgURL: 'images/icmekankapak.png'
        // },
        // {
        //   id: 1,
        //   name: 'Villa ',
        //   imgURL: 'images/villakapak.png'
        // },
        // {
        //   id: 2,
        //   name: 'Blok Girişleri',
        //   imgURL: 'images/villakapak.png'
        // },
        // {
        //   id: 3,
        //   name: 'Jet Bite',
        //   imgURL: 'images/icmekankapak.png'
        // },
        // {
        //   id: 4,
        //   name: 'Site',
        //   imgURL: 'images/icmekankapak.png'
        // },
        // {
        //   id: 5,
        //   name: 'Yakuplu',
        //   imgURL: 'images/icmekankapak.png'
        // }
      };
      console.log(this.projects);
    }
});