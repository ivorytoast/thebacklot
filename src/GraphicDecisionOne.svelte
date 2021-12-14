<script lang="ts">
    import {onMount} from "svelte";
    import {stepProgress} from "./stores/store";
    import {graphicDesignDetailsChoice} from "./stores/store";
    import {stepCount} from "./stores/store";
    import {costChoice} from "./stores/store";
    import {artworkStyleChoice} from "./stores/store";

    let choice;

    let isGraphicChoiceClicked: boolean = false;
    let isPixelChoiceClicked: boolean = false;
    let isThreeColorsPicked: boolean = false;
    let isFullColorPicked: boolean = false;
    let isVehiclePicked: boolean = false;
    let isVehicleAndBackgroundPicked: boolean = false;

    graphicDesignDetailsChoice.subscribe(value => {
        choice = value;
    });

    function changeChoice(value: string) {
        graphicDesignDetailsChoice.set(value);
        if (value === "threeColors") {
            costChoice.set("30");
            isThreeColorsPicked = true;
            isFullColorPicked = false;
            isVehiclePicked = false;
            isVehicleAndBackgroundPicked = false;
        } else if (value === "fullColor") {
            costChoice.set("Estimate Will Be Provided");
            isThreeColorsPicked = false;
            isFullColorPicked = true;
            isVehiclePicked = false;
            isVehicleAndBackgroundPicked = false;
        } else if (value === "vehicle") {
            isThreeColorsPicked = false;
            isFullColorPicked = false;
            isVehiclePicked = true;
            isVehicleAndBackgroundPicked = false;
        } else if (value === "vehicleAndBackground") {
            isThreeColorsPicked = false;
            isFullColorPicked = false;
            isVehiclePicked = false;
            isVehicleAndBackgroundPicked = true;
        }
    }

    function changeArtworkChoice(value: string) {
        artworkStyleChoice.set(value)
        if (value === "graphic") {
            isGraphicChoiceClicked = true;
            isPixelChoiceClicked = false;
            isVehiclePicked = false;
            isVehicleAndBackgroundPicked = false;
        } else if (value === "pixel") {
            isGraphicChoiceClicked = false;
            isPixelChoiceClicked = true;
            isThreeColorsPicked = false;
            isFullColorPicked = false;
        } else {
            isGraphicChoiceClicked = false;
            isPixelChoiceClicked = false;
        }
    }

    function continueNextStep() {
        stepCount.update(x => x + 1)
    }

    onMount(() => {
        stepProgress.set(['Blue', 'LightGrey', 'LightGray', 'LightGray']);
    });
</script>

<br>
<br>

<div class="pure-g" style="text-align: center">
    <div class="pure-u-1-1">
        <button style="margin-right: 10px" class:clicked={isGraphicChoiceClicked}
                on:click={() => changeArtworkChoice("graphic")}>Graphic Illustration
        </button>
        <button class:clicked={isPixelChoiceClicked} on:click={() => changeArtworkChoice("pixel")}>Pixel Illustration
        </button>
    </div>
</div>

<br>
<br>

{#if isGraphicChoiceClicked}
    <div class="pure-g" style="text-align: center">
        <div class="pure-u-1-1">
            <button style="margin-right: 10px" class:clicked={isThreeColorsPicked}
                    on:click={() => changeChoice("threeColors")}>3 Colors + Black
            </button>
            <button class:clicked={isFullColorPicked} on:click={() => changeChoice("fullColor")}>Full Color</button>
        </div>
    </div>
{/if}

{#if isPixelChoiceClicked}
    <div class="pure-g" style="text-align: center">
        <div class="pure-u-1-1">
            <button style="margin-right: 10px" class:clicked={isVehiclePicked} on:click={() => changeChoice("vehicle")}>
                Just Vehicle
            </button>
            <button class:clicked={isVehicleAndBackgroundPicked} on:click={() => changeChoice("vehicleAndBackground")}>
                Vehicle + Background + Character
            </button>
        </div>
    </div>
{/if}

<br>

{#if (isGraphicChoiceClicked || isPixelChoiceClicked) && ((isVehiclePicked || isVehicleAndBackgroundPicked) || (isThreeColorsPicked || isFullColorPicked))}
    <div class="pure-u-1-1" style="text-align: center">
        <br>
        <button id="continue" on:click={() => continueNextStep()}>Continue</button>
    </div>
{/if}

<br>
<br>
<br>
<br>

<style>
    .clicked {
        background-color: dodgerblue;
    }

    button {
        width: 200px;
        height: 200px;
        font-size: 10px;
    }

    #continue {
        width: 250px;
        height: 40px;
        font-size: 20px;
    }
</style>