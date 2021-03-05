'use strict';

fetch('./users.json').then((response)=>{response.json().then((user)=>{console.table(user)})})