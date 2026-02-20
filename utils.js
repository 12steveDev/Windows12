// utils.js
const $ = (query, parent=document) => parent.querySelector(query);
const $$ = (query, parent=document) => parent.querySelectorAll(query);
const E = (tag) => document.createElement(tag);

const desktop = $(".desktop");
