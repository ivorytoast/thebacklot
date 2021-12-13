<script>
    import {Link} from "svelte-navigator";
    import {stepProgress} from "./stores/store";
    import {graphicDesignDetailsChoice} from "./stores/store";
    import {stepCount} from "./stores/store";
    import {bodyChoice} from "./stores/store";
    import {shadowChoice} from "./stores/store";
    import {backgroundChoice} from "./stores/store";
    import {additionalInfoChoice} from "./stores/store";
    import {costChoice} from "./stores/store";
    import {onMount} from "svelte";

    function goBackToStepThree() {
        stepCount.set(3);
    }

    function goBackToHomePage() {
        stepCount.set(1);
        graphicDesignDetailsChoice.set('')
        costChoice.set('')
    }

    onMount(() => {
        stepProgress.set(['Green', 'Green', 'Green', 'Blue']);
    });
</script>

<div class="pure-g" style="text-align: center">
    <div class="pure-u-1-1">
        Hello
    </div>
    <div class="pure-u-1-1">
        <button on:click={() => goBackToStepThree()}>Go Back To Step Three</button>
        <Link to="/homepage"><button on:click={() => goBackToHomePage()}>Cancel Request</button></Link>
        <br>
        <br>
    </div>
</div>