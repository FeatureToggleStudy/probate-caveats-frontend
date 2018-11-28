'use strict';

const co = require('co');
const request = require('supertest');
const a11y = require('test/util/a11y');
const {expect} = require('chai');
const app = require('app');
const initSteps = require('app/core/initSteps');
const {endsWith} = require('lodash');
const stepsToExclude = [];
const steps = initSteps.steps;

Object.keys(steps)
    .filter(stepName => stepsToExclude.includes(stepName))
    .forEach(stepName => delete steps[stepName]);

for (const step in steps) {
    let results;
    const currentStep = steps[step];

    describe(`Verify accessibility for the page ${currentStep.name}`, () => {
        let server = null;
        let agent = null;
        const title = currentStep.content.title
            .replace(/&lsquo;/g, '‘')
            .replace(/&rsquo;/g, '’')
            .replace(/\(/g, '\\(')
            .replace(/\)/g, '\\)');

        before((done) => {
            server = app.init();
            agent = request.agent(server.app);
            co(function* () {
                let urlSuffix = '';
                if (endsWith(agent.get(currentStep.constructor.getUrl()), '*')) {
                    urlSuffix = '/0';
                }
                results = yield a11y(agent.get(currentStep.constructor.getUrl()).url + urlSuffix, title);
            })
                .then(done, done)
                .catch((error) => {
                    done(error);
                });
        });

        after((done) => {
            server.http.close();
            done();
        });

        it('should not generate any errors', () => {
            const errors = results.filter((res) => res.type === 'error');
            expect(errors.length).to.equal(0, JSON.stringify(errors, null, 2));
        });

        it('should not generate any warnings', () => {
            const warnings = results.filter((res) => res.type === 'warning');
            expect(warnings.length).to.equal(0, JSON.stringify(warnings, null, 2));
        });
    });
}