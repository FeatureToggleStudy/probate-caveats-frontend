'use strict';

const stepList = {
    StartPage: 'ApplicantName',
    ApplicantName: 'ApplicantEmail',
    ApplicantEmail: 'ApplicantAddress',
    ApplicantAddress: 'DeceasedName',
    DeceasedName: 'DeceasedDod',
    DeceasedDod: 'DeceasedDobKnown',
    DeceasedDobKnown: {
        dobknown: 'DeceasedDob',
        otherwise: 'DeceasedAlias'
    },
    DeceasedDob: 'DeceasedAlias',
    DeceasedAlias: {
        assetsInOtherNames: 'DeceasedOtherNames',
        otherwise: 'EndJourneyPage'
    },
    DeceasedOtherNames: 'EndJourneyPage',
    AddAlias: 'DeceasedOtherNames',
    RemoveAlias: 'DeceasedOtherNames',
    AddressLookup: 'AddressLookup'
};

module.exports.stepList = stepList;
