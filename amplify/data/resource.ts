import { type ClientSchema, a, defineData } from '@aws-amplify/backend';

const schema = a.schema({
  UserStats: a
    .model({
      username:a.string(),
      infinityscore: a.string(),
      survivalscore: a.string(),
    })
    .authorization((allow) => [allow.owner()]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'userPool',
  },
});
