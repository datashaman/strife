<script setup lang="ts">
import { ref } from "vue";
import type { MainMenu } from "./game/scenes/MainMenu";
import PhaserGame from "./game/PhaserGame.vue";

//  References to the PhaserGame component (run and scene are exposed)
const phaserRef = ref();
</script>

<template>
    <PhaserGame ref="phaserRef" @current-active-scene="MainMenu" />
</template>
