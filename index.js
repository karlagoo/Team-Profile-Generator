const inquirer = require('inquirer');
const fs = require('fs');
const jest = require('jest');
const path = require('path');

const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');