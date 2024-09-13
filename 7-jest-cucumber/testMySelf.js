//imprt the jest-cucumber features
import { loadFeature, defineFeature } from "jest-cucumber";

//load the feature file
const featurepath = './specs/features/basic-scenarios.feature'
const feature = loadFeature (featurepath);

//define the feature
defineFeature(feature,(test)=> {
let calculator;

//initialize the calculator before each scenario
beforeEach(()=> {
    calculator = {
        result: 0,
        add: (a,b) => {
            calculator.result = a + b;
        }
    };
});


