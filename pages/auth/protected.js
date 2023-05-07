import withAuth from '../../components/withAuth';

<template>
    <v-container>
      <v-card>
        <v-card-title>Authenticated Page</v-card-title>
        <v-card-text>
          This is an authenticated page that shows the details of someone.
        </v-card-text>
      </v-card>
    </v-container>
  </template>

const ProtectedPage = () => {
  return <div>Protected Content</div>;
};

export default withAuth(ProtectedPage);