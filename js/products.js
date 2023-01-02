const {createApp} = Vue;

const App = {
    data() {
        return {
            products:[],
            template:{},
        }
    },
    methods: {
        checkAdmin(){
            axios.post(`${url}api/user/check`)
            .then(res=>{
                this.getProducts();
            })
        },
        getProducts(){
            axios.get(`${url}api/${path}/admin/products`)
                .then(res=>{
                    this.products = res.data.products;
                })
        },
        openProduct(item){
            this.template = item;
        }

        
    },
    mounted() {
        const token = document.cookie.replace(/(?:(?:^|.*;\s*)kevinToken\s*\=\s*([^;]*).*$)|^.*$/, "$1");
        axios.defaults.headers.common['Authorization'] = token;
        this.checkAdmin();

    },
}


// axios.get(`${url}api/${path}/admin/products`)
//     .then(res=>{
//         console.log(res.data);
//     })
createApp(App).mount('#app');