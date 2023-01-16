<template>
<v-app-bar app :style="{background: $vuetify.theme.themes.light.background}" dark flat class="Navbar px-8">
    <v-btn color="#111111">
        <a color="white">Rim</a>
        <a color="#A7121D">badi</a>
    </v-btn>
    <v-spacer></v-spacer>
    <v-btn color="#111111"> Home </v-btn>
    <v-btn color="#111111"> Project </v-btn>
    <v-btn color="#111111"> About </v-btn>
    <v-btn color="#111111"> Contact </v-btn>
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
.Navbar{
    position: absolute;
}
</style>