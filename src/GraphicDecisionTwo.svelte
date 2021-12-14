<script lang="ts">
    import {onMount} from "svelte";
    import {stepProgress} from "./stores/store";
    import {graphicDesignDetailsChoice} from "./stores/store";
    import {stepCount} from "./stores/store";
    import {bodyChoice} from "./stores/store";
    import {shadowChoice} from "./stores/store";
    import {backgroundChoice} from "./stores/store";
    import {additionalInfoChoice} from "./stores/store";
    import {costChoice} from "./stores/store";
    import {artworkStyleChoice} from "./stores/store";
    import {Link} from "svelte-navigator";

    function goBackToStepOne() {
        stepCount.set(1);
        graphicDesignDetailsChoice.set('')
    }

    function goToStepThree() {
        stepCount.set(3);
    }

    function goBackToHomePage() {
        stepCount.set(1);
        graphicDesignDetailsChoice.set('')
        costChoice.set('')
    }

    function submitData() {
    }

    onMount(() => stepProgress.set(['Green', 'Blue', 'LightGray', 'LightGray']));
</script>

{#if $artworkStyleChoice === "graphic"}
    {#if $graphicDesignDetailsChoice === "threeColors"}

        <div class="pure-g" style="text-align: center">
            <div class="pure-u-1-1">
                <div class="inputBox">
                    <label for="body">Body Color</label>
                    <input id="body" type="color" placeholder="" bind:value={$bodyChoice}>
                    <br>
                    <br>
                </div>
                <div class="inputBox">
                    <label for="shadow">Shadow Color</label>
                    <input id="shadow" type="color" placeholder="" bind:value={$shadowChoice}>
                    <br>
                    <br>
                </div>

                <div class="inputBox">
                    <label for="background">Background Color</label>
                    <input id="background" type="color" placeholder="" bind:value={$backgroundChoice}>
                    <br>
                    <br>
                </div>

                <div class="inputBox">
                    <label for="additionalInfo">Add Additional Details</label>
                    <textarea id="additionalInfo" rows="6" cols="35" bind:value={$additionalInfoChoice}></textarea>
                </div>
                <br>
            </div>
            <div class="pure-u-1-1">
                <button on:click={() => goToStepThree()}>Next</button>
                <br>
                <br>
            </div>
            <div class="pure-u-1-1">
                <button on:click={() => goBackToStepOne()}>Go Back To Step One</button>
                <Link to="/homepage">
                    <button on:click={() => goBackToHomePage()}>Cancel Request</button>
                </Link>
                <br>
                <br>
            </div>
        </div>

    {:else if $graphicDesignDetailsChoice === "fullColor"}

        <div class="pure-g" style="text-align: center">
            <div class="pure-u-1-1">
                <div class="inputBox">
                    <label for="additionalInfo2">Add Additional Details</label>
                    <textarea id="additionalInfo2" name="additionalInfo" rows="6" cols="35"
                              bind:value={$additionalInfoChoice}></textarea>
                </div>
                <br>
            </div>
            <div class="pure-u-1-1">
                <button on:click={() => goToStepThree()}>Next</button>
                <br>
                <br>
            </div>
            <div class="pure-u-1-1">
                <button on:click={() => goBackToStepOne()}>Go Back To Step One</button>
                <Link to="/homepage">
                    <button on:click={() => goBackToHomePage()}>Cancel Request</button>
                </Link>
                <br>
                <br>
            </div>
        </div>

    {:else}

        This page is not a valid page!

    {/if}
{/if}

{#if $artworkStyleChoice === "pixel"}
    {#if $graphicDesignDetailsChoice === "vehicle"}

        <div class="pure-g" style="text-align: center">
            <div class="pure-u-1-1">
                <div class="inputBox">
                    <label for="additionalInfo6">Add Additional Details</label>
                    <textarea id="additionalInfo6" rows="6" cols="35" bind:value={$additionalInfoChoice}></textarea>
                </div>
                <br>
            </div>
            <div class="pure-u-1-1">
                <button on:click={() => goToStepThree()}>Next</button>
                <br>
                <br>
            </div>
            <div class="pure-u-1-1">
                <button on:click={() => goBackToStepOne()}>Go Back To Step One</button>
                <Link to="/homepage">
                    <button on:click={() => goBackToHomePage()}>Cancel Request</button>
                </Link>
                <br>
                <br>
            </div>
        </div>

    {:else if $graphicDesignDetailsChoice === "vehicleAndBackground"}

        <div class="pure-g" style="text-align: center">
            <div class="pure-u-1-1">
                <div class="inputBox">
                    <label for="background17">Background Color</label>
                    <input id="background17" type="color" placeholder="" bind:value={$backgroundChoice}>
                    <br>
                    <br>
                </div>

                <div class="inputBox">
                    <label for="additionalInfo18">Add Additional Details</label>
                    <textarea id="additionalInfo18" rows="6" cols="35"
                              bind:value={$additionalInfoChoice}></textarea>
                </div>
                <br>
            </div>
            <div class="pure-u-1-1">
                <button on:click={() => goToStepThree()}>Next</button>
                <br>
                <br>
            </div>
            <div class="pure-u-1-1">
                <button on:click={() => goBackToStepOne()}>Go Back To Step One</button>
                <Link to="/homepage">
                    <button on:click={() => goBackToHomePage()}>Cancel Request</button>
                </Link>
                <br>
                <br>
            </div>
        </div>

    {:else}

        This page is not a valid page!

    {/if}
{/if}

<style>
    button {
        width: 200px;
    }

    .inputBox {
        margin-bottom: 10px;
    }

    label {
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 15px;
    }

    textarea {
        resize: none;
    }
</style>