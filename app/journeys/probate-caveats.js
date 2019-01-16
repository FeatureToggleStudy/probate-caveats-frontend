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
        otherwise: 'DeceasedAddressKnown'
    },
    DeceasedAddressKnown: {
        addressknown: 'DeceasedAddress',
        otherwise: 'EndJourneyPage'
    },
    DeceasedOtherNames: 'DeceasedAddressKnown',
    AddAlias: 'DeceasedOtherNames',
    RemoveAlias: 'DeceasedOtherNames',
    DeceasedAddress: 'EndJourneyPage',
    AddressLookup: 'AddressLookup'

};

module.exports.stepList = stepList;
