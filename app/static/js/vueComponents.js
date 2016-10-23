/**
 * Created by BernardKlatkaSquiz on 23/10/16.
 */


Vue.component('user-list-single', {
    props: ['username'],
    template: '<li>{{username}}</li>'
});

//single input
Vue.component('single-input', {
    props: ['fieldname', 'type', 'frontname'],
    template: `<div class="form-group">
                <label v-bind:for="fieldname">{{frontname}}:</label>
                <input v-bind:type="type" v-bind:id="fieldname" v-bind:placeholder="frontname + '...'" v-bind:name="fieldname">
            </div>`
});

