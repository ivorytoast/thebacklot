<script lang="ts">
    import {Link} from "svelte-navigator";
    import {onMount} from "svelte";
    import {stepProgress} from "./stores/store";
    import {graphicDesignDetailsChoice} from "./stores/store";
    import {stepCount} from "./stores/store";

    let choice;

    graphicDesignDetailsChoice.subscribe(value => {
        choice = value;
    });

    function changeChoice(value: string) {
        stepCount.update(x => x + 1)
        graphicDesignDetailsChoice.set(value);

    }

    onMount(() => stepProgress.set(['Blue', 'LightGrey', 'LightGray', 'LightGray', 'LightGray']));
</script>

<div class="pure-g" style="text-align: center">
    <div class="pure-u-1-1">
        <h2>Pick Design Details</h2>
        <br>
    </div>
    <div class="pure-u-1-2">
        <button on:click={() => changeChoice("threeColors")}>3 Colors + Black</button>
        <p>$30 Flat Rate</p>
    </div>
    <div class="pure-u-1-2">
        <button on:click={() => changeChoice("fullColor")}>Full Color</button>
        <p>Estimate Will Be Given</p>
    </div>
    <div class="pure-u-1-1">
        <br>
        <Link to="/homepage"><button>Cancel Request</button></Link>
    </div>
</div>

<style>
    button {
        width: 200px;
    }
</style>