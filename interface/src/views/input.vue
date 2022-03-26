<template>
	<v-container>
		<h1 class="page-header">Temperature scan</h1>
		<div class="warehouse">
            <v-card class="form">
                <h3>ID Student</h3>
                <v-text-field class="text-field" v-model="user_id" @change="validateForm" placeholder="62050..."/>
                <h3>Temperature</h3>
                <v-text-field class="text-field" v-model="user_temperature" @change="validateForm" placeholder="37.5"/>
                <h3>Add Date</h3>
                <v-text-field class="text-field" v-model="user_date" @change="validateForm" placeholder="27/03/2565"/>
                
                <!-- validation status-->
                <p :class="'validation-text ' + `${form_status} `"> {{ `*${stat_validation_text}` }}</p>
                
                <!-- display list of data -->
                <li v-for="(data, index) in statistic" :key="index">
                    user_id: {{data.user_id}} user_temperature: {{data.user_temperature}} user_date: {{data.user_date}}
                </li>

                <!-- submit button -->
                <v-btn @click="submitForm" > enter </v-btn>
                <!-- validation status-->
                <p :class="'validation-text ' + `${form_status} `"> {{ `*${form_validation_text}` }}</p>
            </v-card>
		</div>
	</v-container>
</template>

<style src="./style.css"> </style>

<script>
export default {
	data: () => ({
        user_id: '',
        user_temperature: 0,
        user_date: '',
        statistic: [],
        timeIsValid: true,
        form_validation_text: '',
        stat_validation_text: '',
        form_status: 'form-status__hidden',
        form_is_valid: false
	}),

    created(){
        
    },

    computed: {
        // users data
        users(){
            return this.$store.getters.users
        }
    },

    methods: {
        // form handler
        addStat() {
            let stat = {
                    user_id: this.user_id,
                    user_temperature: this.user_temperature,
                    user_date: this.user_date
                }
            this.statistic.push(stat)
        },
        submitForm() {
            //this.validateForm()
        //    if(this.form_is_valid){
                let formData = {
                    user_id: this.user_id,
                    user_temperature: this.user_temperature,
                    user_date: this.user_date,
                }
                this.$store.dispatch('addUser', formData)
        //    } else {
                // alert('form is not valid')
        //    }
        },
    }
};

</script>

