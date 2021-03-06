'use strict';

const commonContent = require('app/resources/en/translation/common');
const pageUnderTest = require('app/steps/ui/deceased/alias/index');

module.exports = function (answer = 'optionYes') {
    const I = this;

    I.seeCurrentUrlEquals(pageUnderTest.getUrl());
    I.click(`#alias-option${answer}`);
    I.waitForNavigationToComplete(`input[value="${commonContent.saveAndContinue}"]`);
};
