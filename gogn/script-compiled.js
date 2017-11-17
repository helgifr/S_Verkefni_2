'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Niðurteljari!
 */
var Countdown = function () {
  /**
   * Finnur container fyrir niðurteljara og form.
   * Bindur submit eventhandler við form.
   */
  function Countdown() {
    _classCallCheck(this, Countdown);
  }
  /*
  this.keyName = 'countdown';
  this.container = document.querySelector('.countdown');
  this.form = document.querySelector('form');
    // til þess að submit hafi þennan klasa sem "this" verðum við
  // að nota bind hér (og í öðrum föllum sem við bindum!)
  this.form.addEventListener('submit', this.submit.bind(this));
  */


  /**
   * Sækir gögn úr localStorage eftir this.keyName
   * Ef gögn eru til, hleður þeim inn með því að kalla í this.create()
   */


  _createClass(Countdown, [{
    key: 'load',
    value: function load() {
      var _this = this;

      /*
      const saved = window.localStorage.getItem(this.keyName);
        if (saved) {
        const parsed = JSON.parse(saved);
        this.create(parsed.title, new Date(parsed.date));
      }
      */
      this.headings = document.querySelectorAll('.heading--category');

      $.getJSON("videos.json", function (json) {
        _this.json = json;
        console.log(_this.json);
        _this.done();
      });
    }
  }, {
    key: 'done',
    value: function done() {
      for (var i = 0; i < this.headings.length; i++) {
        this.headings[i].innerText = this.json.categories[i].title;
      }
      var newVideos = document.querySelector('#new-videos');
      var tutoringVideos = document.querySelector('#tutoring-videos');
      var entertainmentVideos = document.querySelector('#entertainment-videos');

      var cNewVideosId = this.json.categories[0].videos;
      var cTutoringVideosId = this.json.categories[1].videos;
      var cEntertainmentVideosId = this.json.categories[2].videos;

      for (var i = 0; i < this.json.categories[0].videos.length; i++) {
        newVideos.appendChild(this.createVideoElement(this.json.videos[cNewVideosId[i] - 1]));
      }
      for (var i = 0; i < this.json.categories[1].videos.length; i++) {
        tutoringVideos.appendChild(this.createVideoElement(this.json.videos[cTutoringVideosId[i] - 1]));
      }
      for (var i = 0; i < this.json.categories[2].videos.length; i++) {
        entertainmentVideos.appendChild(this.createVideoElement(this.json.videos[cEntertainmentVideosId[i] - 1]));
      }
    }
  }, {
    key: 'createVideoElement',
    value: function createVideoElement(video) {
      var container = document.createElement('figure');
      container.setAttribute('class', 'col');
      container.classList.add('col-4');
      container.classList.add('col-sm-6');
      container.classList.add('col-sm-sm-12');

      var img = document.createElement('img');
      img.src = video.poster;

      var caption = document.createElement('figcaption');
      caption.appendChild(document.createTextNode(video.title));

      var p = document.createElement('p');
      var now = new Date();
      var time = new Date(video.created);
      time = now.getTime() - time.getTime();

      var totalSecs = Math.ceil(time / 1000);

      var totalMin = Math.floor(totalSecs / 60);

      var totalHrs = Math.floor(totalSecs / (60 * 60));

      var days = Math.floor(totalSecs / (60 * 60 * 24));

      if (days >= 365) time = 'Fyrir ' + Math.floor(days / 365) + ' \xE1rum s\xED\xF0an';else if (days >= 31) time = 'Fyrir ' + Math.floor(days / 31) + ' m\xE1nu\xF0um s\xED\xF0an';else if (days > 0) {
        if (days >= 7) {
          time = 'Fyrir ' + Math.floor(days / 7) + ' vikum s\xED\xF0an';
        } else {
          time = 'Fyrir ' + days + ' d\xF6gum s\xED\xF0an';
        }
      } else if (totalHrs > 0) time = 'Fyrir ' + time.getHours() + ' klukkut\xEDmum s\xED\xF0an';else time = 'Fyrir ' + totalMin + ' m\xEDn\xFAtum s\xED\xF0an';
      p.appendChild(document.createTextNode(time));

      container.appendChild(img);
      container.appendChild(caption);
      container.appendChild(p);

      return container;
    }
    /**
     * Tekur við title sem streng og date sem Date hlut
     * Vistar sem json gögn í localStorage undir this.keyName
     */
    /*
    save(title, date) {
     const data = { title, date };
     const json = JSON.stringify(data);
     window.localStorage.setItem(this.keyName, json);
    }
    */

    /**
     * Tekur við:
     *  - date sem streng á forminu "yyyy-mm-dd", t.d. "2017-11-06"
     *  - time sem streng á forminu "hh:mm", t.d. "09:00"
     * Skilar date hlut með gögnum úr date og time
     */
    /*
    parseDate(date, time) {
     return new Date(`${date} ${time}`);
    }
    */

  }]);

  return Countdown;
}();

document.addEventListener('DOMContentLoaded', function () {
  var countdown = new Countdown();
  countdown.load();
});

//# sourceMappingURL=script-compiled.js.map