import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        posts: {},
        selected: []
    },
    getters: {
        getPosts: (state) => {
            return state.posts;
        },
        getSelectedPosts: (state) => {
            return state.selected;
        }
    },
    mutations: {
        setPosts: (state, payload) => {
            Object.assign(state.posts, payload);
        },
        setStatusPost: (state, payload) => {
            const posts = state.posts[payload.userId];
            posts.find(post => {
                if (post.id === payload.postId) {
                    post.enable = payload.postStatus
                }
            });
        },
        setStatusPosts: (state, payload) => {
            const posts = state.posts[payload.userId];
            posts.find(post => {
                if (payload.postsId.includes(post.id)) {
                    post.enable = payload.postStatus
                }
            });
        },
        setSelectedPosts: (state, payload) => {
            state.selected.push(payload);
        },
        removeSelectedPosts: (state, payload) => {
            state.selected.splice(payload, 1)
        },
        resetSelectedPosts: (state) => {
            state.selected = [];
        }
    },
    actions: {
        setPosts({ commit }, payload) {
            commit('setPosts', payload);
        },
        setStatusPost({ commit }, payload) {
            commit('setStatusPost', payload);
        },
        setStatusPosts({ commit }, payload) {
            commit('setStatusPosts', payload);
        },
        setSelectedPosts({ commit }, payload) {
            commit('setSelectedPosts', payload);
        },
        removeSelectedPosts({ commit }, payload) {
            commit('removeSelectedPosts', payload);
        },
        resetSelectedPosts({ commit }){
            commit('resetSelectedPosts');
        }
    },
    plugins: [createPersistedState()]
});