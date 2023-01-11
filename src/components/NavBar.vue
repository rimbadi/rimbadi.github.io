<template>
<v-app-bar app color="#111111" dark flat class="px-8">
    <v-btn icon>
        <v-icon color="#A7121D"> fas fa-dragon</v-icon>
    </v-btn>
    <v-spacer></v-spacer>
    <v-btn> Home </v-btn>
    <v-btn> Project </v-btn>
    <v-btn> About </v-btn>
    <v-btn> Contact </v-btn>
</v-app-bar>
</template>

<script>
export default{
    methods:{
        scroll(refNamme){
            const element = document.getElementById(refName);
            element.scrollIntoView({behavior:"smooth"});
        },
    },
};
</script>

<style>

</style>