import { Model } from '@vuex-orm/core';
import Post from './post';

/**
 * The Vuex-ORM comment model
 */
export default class Comment extends Model {
    // Tell Vuex-ORM the path where the records should be stored in Vuex
    static entity = 'comment';

    // Setup the fields for Vuex-ORM
    static fields () {
        return {
            id: this.increment(),
            author: this.string(''),
            content: this.string(''),
            publishedAt: this.string(''),

            postId: this.number(0),
            post: this.belongsTo(Post, 'postId')
        }
    }
}