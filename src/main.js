// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyAZFTlrb1Bv13CHmg5-mar8rvoceWS3jEI",
  authDomain: "sala-chat-b26f2.firebaseapp.com",
  projectId: "sala-chat-b26f2",
  storageBucket: "sala-chat-b26f2.appspot.com",
  messagingSenderId: "367361355075",
  appId: "1:367361355075:web:0cd3a7750294544ff493f6"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

firebase.auth().onAuthStateChanged(function () {
  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
  })  
});

