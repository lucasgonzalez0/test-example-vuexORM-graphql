import { Model } from '@vuex-orm/core';
import Comment from './comment';

/**
 * The Vuex-ORM post model
 */
export default class Post extends Model {
    // Tell Vuex-ORM the path where the records should be stored in Vuex
    static entity = 'posts';

    // Tell Vuex-ORM-GraphQL to eagerly load all comments when we fetch a post.
    static eagerLoad = ['comments'];

    // Setup the fields and relations for Vuex-ORM
    static fields () {
        return {
            id: this.increment(),
            title: this.string(''),
            content: this.string(''),
            publishedAt: this.string(''),

            comments: this.hasMany(Comment, 'postId')
        }
    }
}