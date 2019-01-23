'use strict';

const Step = require('app/core/steps/Step');
const isEmpty = require('lodash').isEmpty;
const FormatName = require('app/utils/FormatName');

class Summary extends Step {

    static getUrl(redirect = '*') {
        return `/summary/${redirect}`;
    }

    generateContent (ctx, formdata) {
        const content = {};

        Object.keys(this.steps)
            .filter((stepName) => stepName !== this.name)
            .forEach((stepName) => {
                const step = this.steps[stepName];
                content[stepName] = step.generateContent(formdata[step.section], formdata);
                content[stepName].url = step.constructor.getUrl();
            });
        content[this.name] = super.generateContent(ctx, formdata);
        content[this.name].url = Summary.getUrl();
        const deceasedName = FormatName.format(formdata.deceased);
        content.DeceasedAlias.question = content.DeceasedAlias.question.replace('{deceasedName}', deceasedName ? deceasedName : content.DeceasedAlias.theDeceased);
        return content;
    }

    generateFields (ctx, errors, formdata) {
        const fields = {};
        Object.keys(this.steps)
            .filter((stepName) => stepName !== this.name)
            .forEach((stepName) => {
                const step = this.steps[stepName];
                if (isEmpty(fields[step.section])) {
                    fields[step.section] = step.generateFields(formdata[step.section], errors, formdata);
                }
            });
        fields[this.section] = super.generateFields(ctx, errors, formdata);
        return fields;
    }

}

module.exports = Summary;