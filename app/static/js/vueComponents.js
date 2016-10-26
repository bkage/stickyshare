/**
 * Created by BernardKlatkaSquiz on 23/10/16.
 */


Vue.component('user-list-single', {
    props: ['username'],
    template: '<li>{{username}}</li>'
});

//single input
Vue.component('single-input', {
    props: ['fieldName', 'type', 'frontName'],
    template: `<div class="form-group">
                <label :for="fieldName">{{frontName}}:</label>
                <input 
                    class="form-input" 
                    :type="type" 
                    :id="fieldName" 
                    :placeholder="frontName + '...'" 
                    :name="fieldName">
            </div>`
});

Vue.component('login-area', {
    data: function(){
        return {
            systemMessage: 'hello',
            fields: [
                {
                    frontName: 'Username',
                    fieldName: 'username',
                    type: 'text'
                },
                {
                    frontName: 'Password',
                    fieldName: 'password',
                    type: 'password'
                }
            ]
        };
    },
    template: `<div class="login-area">
            <p id="login-message">{{systemMessage}}</p>
            <form @submit="login">
            <single-input
                v-for="single in fields" 
                :fields="fields" 
                :front-name="single.frontName" 
                :field-name="single.fieldName" 
                :type="single.type"
                ></single-input>
            <button type="submit">Login</button>
            </form>
        </div>`,

    methods: {
        login: function(e){
            e.preventDefault();

            var username = $('#' + this.fields[0].fieldName).val();
            var password = $('#' + this.fields[1].fieldName).val();

            console.log('Try to login\t' + username + '\t' + password);

            socket.emit('login attempt', {
                username: username,
                password: password,
            }, function(response){
                if(response === true){
                    socket.loggedIn = true;
                    vueApp.loggedIn = true;
                }
                else{
                    alert('wrong password');
                }
            });    //emit socket event and pass
        }
    }
});