// ==UserScript==
// @name         CoBysZrobil-Unlocker
// @namespace    http://tampermonkey.net/
// @version      2026-10-14.3
// @description  Odblokowywacz słów do strony Mamm0n'a
// @author       breathe
// @match        https://cobyszrobil.vercel.app/*
// @icon         https://cdn.7tv.app/emote/01GK002TG80000ZMF3EKMPJKSW/4x.avif
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function () {
  'use strict';

  ['input', 'compositionend'].forEach(type =>
    window.addEventListener(type, e => {
      if (e.target.tagName === 'TEXTAREA') e.stopImmediatePropagation();
    }, true)
  );

  const origExec = RegExp.prototype.exec;
  RegExp.prototype.exec = function (s) {
    if (this.source.includes('cinkrof')) return null;
    return origExec.call(this, s);
  };

  const hide = () => {
    const sheet = new CSSStyleSheet();
    sheet.replaceSync('.question-ghost.is-hinting, .ghost-hint, .ghost-key { display:none !important; }');
    document.adoptedStyleSheets = [...document.adoptedStyleSheets, sheet];
  };
  hide();
})();
