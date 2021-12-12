<script lang="ts">
    import {onMount} from "svelte";
    import {stepProgress} from "./stores/store";
    import {graphicDesignDetailsChoice} from "./stores/store";
    import FullColor from "./graphicChoiceTwoViews/FullColor.svelte";
    import ThreeColors from "./graphicChoiceTwoViews/ThreeColors.svelte";

    let graphicDesignChoice;

    graphicDesignDetailsChoice.subscribe(value => {
        graphicDesignChoice = value;
    });

    onMount(() => stepProgress.set(['Green', 'Blue', 'LightGray', 'LightGray']));
</script>

{#if graphicDesignChoice === "threeColors"}
    <ThreeColors></ThreeColors>
{:else if graphicDesignChoice === "fullColor"}
    <FullColor></FullColor>
{:else}
    This page is not a valid page!
{/if}