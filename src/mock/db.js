/* eslint-disable @typescript-eslint/no-var-requires */
const habits = require('./data/habits.json');
const questions = require('./data/questions.json');
const countries = require('./data/countries.json');

module.exports = () => ({
    habits,
    countries,
    questions,
});
