<template>
	<v-container>
		<h1 class="page-header">User Dashboard</h1>
		<div class="user">
            <v-card class="form" v-for="(user, index) in sortedUser" :key="index" >
                <h3>ID Student: {{ user.user_id }}</h3>
                <h3>Temperature: {{ user.temp_status }}</h3>
                <h3>Date: {{ user.user_date }}</h3>
            </v-card>
		</div>
	</v-container>
</template>

<style src="./style.css"> </style>

<script>
export default {
	data: () => ({

	}),

    computed: {
        sortedUser(){
            let users = this.$store.getters.users
            // sort product used_core
                users = users.sort((a, b) => {
                    return b.user_temperature - a.user_temperature
                })

            console.log(users);

                users = users.map((user) => {
                    return {
                        ...user,
                        temp_status: user.user_temperature > 37.5 ? 'High' 
                        : user.user_temperature > 35 ? Number(user.user_temperature.toFixed(1))
                        : 'Low'
                    }
                })

            // remove object after index 10 if statistic length > 10
                // users = users.map((user) => {
                //     return {
                //         user.temp_status.length > 10 ? 10 : user.temp_status.length;
                //         user.temp_status = user.temp_status.slice(0,n)
                //     }
                // }
                

            return users
        },
    },

    // before render component -> get product
    created(){
        this.$store.dispatch('getUsers')
    },

    methods: {

    }
};
</script>



