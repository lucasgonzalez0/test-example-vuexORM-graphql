import Vue from 'vue';
import Vuex from 'vuex';
import VuexORM from '@vuex-orm/core'

import Post from './models/post';
import Comment from './models/comment';


// Setup Vuex
Vue.use(Vuex);

// Setup Vuex-ORM database
const database = new VuexORM.Database();
database.register(Post, {});
database.register(Comment, {});


// --8<-------------
// This is the new part
import installVuexORMGraphQL from '@vuex-orm/plugin-graphql';
VuexORM.use(installVuexORMGraphQL, {
  database: database,
  debug: process.env.NODE_ENV !== 'production',
  url:'http://192.168.0.127/graphql',
  connectionQueryMode: 'edges',

});
// --8<-------------

// Create Vuex Store and register the Vuex ORM plugin.
export default new Vuex.Store({
  plugins: [VuexORM.install(database)]
});