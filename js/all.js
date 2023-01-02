const {createApp}= Vue ;
const App = {
		
    data() {
        return {
            user:{
                "username": '',
                "password": '',
            },
        }
    },
		//方法function
		methods: {
            login(){
                axios.post(`${url}admin/signin`,this.user)
                    .then(res=>{
                        console.log(res.data);
                        const {token,expired} = res.data;
                        document.cookie = `kevinToken=${token}; expires=${new Date(expired)};`;
                        window.location = 'products.html';
                    })
                    .catch(err=>{
                        console.log(err);
                    })
            },
    },
		//生命週期
    mounted() {
            
    },
}
createApp(App).mount('#app');
