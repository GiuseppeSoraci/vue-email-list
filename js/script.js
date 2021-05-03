const app = new Vue({
    el: "#app",
    data: {
        email: [],
    },
    computed: {
        emails() {
            return this.email.length !== 10 ? true : false;
        }
    },
    created() {
        this.randomEmails();
    },
    methods: {
        randomEmails() {
            for (let i = 0; i < 10; i++) {
                axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
                    .then(result => {
                        this.email.push(result.data.response)
                    })
                    .catch(error => {
                        console.log("Errore:", error);
                    })

            }
        }
    }
});