const LoadTesting = require('easygraphql-load-tester')
const fs = require('fs')
const path = require('path')
const {faker} = require('@faker-js/faker')

const schema = fs.readFileSync(
    path.join(__dirname, '..', '..', 'kestrel.backend.gql', 'schema.graphql'),
    'utf8'
)


const createRandomParticipant = () => {
  return {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
  };
}

const createParticipant = [
    `mutation CreateParticipant($firstName: String!, $lastName: String!, $email: String!) {
       createExternalParticipants(participants: [{
         firstName: $firstName,
         lastName: $lastName,
         email: $email
        }]) {
        id
       }
   }`
]

const participantsToCreate = Array.from({ length: 10000 }).map(() => createRandomParticipant());

const args = {
  CreateParticipant: participantsToCreate
}

const easyGraphQLLoadTester = new LoadTesting(schema, args)
const testCases = easyGraphQLLoadTester.artillery({
    customQueries: createParticipant,
    onlyCustomQueries: true,
    queryFile: true,
    withMutations: true,
})

module.exports = {
    testCases,
}
