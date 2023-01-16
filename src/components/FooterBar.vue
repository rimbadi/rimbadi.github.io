<template>
    <v-footer :style="{background:$vuetify.theme.themes.light.background}">
        <v-card
        flat
        tile
        class="black white--text py-5 px-5 text center"
        width="100%"
        >
            <v-row>
                <v-col cols="12" sm="4">
                    <v-card-text class="pt-2">
                        <v-btn
                        v-for="icon in icons"
                        :key="icon"
                        class="mx-1 black--text"
                        icon>
                            <v-icon size="24px">{{ icon }}</v-icon>
                        </v-btn>
                    </v-card-text>
                </v-col>
                <v-col cols="12" sm="4">
                    <v-card-text class="pt-2">
                        Created by Rimbadi
                    </v-card-text>
                </v-col>
            </v-row>
        </v-card>
    </v-footer>
</template>

<script>
export default{};
</script>

<style>

</style>