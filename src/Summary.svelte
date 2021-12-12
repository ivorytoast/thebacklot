<script lang="ts">
    import {onMount} from "svelte";
    import {stepProgress} from "./stores/store";
    import {graphicDesignDetailsChoice} from "./stores/store";
    import {artworkStyleChoice} from "./stores/store";
    import {bodyChoice} from "./stores/store";
    import {shadowChoice} from "./stores/store";
    import {backgroundChoice} from "./stores/store";
    import {additionalInfoChoice} from "./stores/store";
    import {stepCount} from "./stores/store";
    import {costChoice} from "./stores/store";
    import {Link} from "svelte-navigator";
    import {writable} from "svelte/store";

    function doSomething() {

    }

    function goBackToStepTwo() {
        stepCount.set(2);
    }

    function goToStepFour() {
        stepCount.set(4);
    }

    function goBackToHomePage() {
        stepCount.set(1);
        graphicDesignDetailsChoice.set('')
        bodyChoice.set('Body')
        shadowChoice.set('Shadow')
        backgroundChoice.set('Background')
        additionalInfoChoice.set('Additional Info')
        costChoice.set('')
    }

    onMount(() => stepProgress.set(['Green', 'Green', 'Blue', 'LightGrey']));
</script>

{#if $artworkStyleChoice === "graphic"}
    <div class="pure-g" style="text-align: center">
        <div class="pure-u-1-1">
            <h1>Review Details!</h1>
        </div>
        <div class="pure-u-1-1 pure-u-md-12-24 pure-u-lg-12-24">
            <p><span class="title">Cost: </span>{$costChoice}</p>
            <p><span class="title">Artwork Style: </span>{$artworkStyleChoice}</p>
            <p><span class="title">Illustration Type: </span>{$graphicDesignDetailsChoice}</p>
            {#if $graphicDesignDetailsChoice === "threeColors"}
                <p><span class="title">Body: </span>{$bodyChoice}</p>
                <p><span class="title">Shadow: </span>{$shadowChoice}</p>
                <p><span class="title">Background: </span>{$backgroundChoice}</p>
            {:else if $graphicDesignDetailsChoice === "fullColor"}

            {:else}
                This page is not a valid page!
            {/if}
            <p><span class="title">Color Preference: </span>{$graphicDesignDetailsChoice}</p>
            <p><span class="title">Additional Info: </span>{$additionalInfoChoice}</p>
        </div>
        <div class="pure-u-1-1 pure-u-md-11-24 pure-u-lg-11-24">
            <div class="centered">
                <div class="inputBox">
                    <div>
                        <h1>Please Attach a Reference Photo!</h1>
                    </div>
                    <div>
                        <div><input type="file" id="img" name="img" accept="image/*"></div>
                    </div>
                    <br>
                    <br>
                </div>
            </div>
        </div>
        <div class="pure-u-1-1">
            <br>
            <br>
            <button on:click={() => goToStepFour()}>Next</button>
            <br>
            <br>
        </div>
        <div class="pure-u-1-1">
            <button on:click={() => goBackToStepTwo()}>Go Back To Step Two</button>
            <Link to="/artwork"><button on:click={() => goBackToHomePage()}>Cancel Request</button></Link>
            <br>
            <br>
        </div>
    </div>
{/if}

<style>
    button {
        width: 200px;
    }

    .title {
        font-size: 20px;
        font-weight: bold;
        text-anchor: start;
    }
</style>