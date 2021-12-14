<script>
    import {Link} from "svelte-navigator";
    import {stepProgress} from "./stores/store";
    import {graphicDesignDetailsChoice} from "./stores/store";
    import {stepCount} from "./stores/store";
    import {bodyChoice} from "./stores/store";
    import {shadowChoice} from "./stores/store";
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

    function submitData() {
        stepCount.update(x => x + 1)
    }

    onMount(() => {
        stepProgress.set(['Green', 'Green', 'Green', 'Blue']);
    });
</script>

<div class="pure-g" style="text-align: center">
    <div class="pure-u-1-1">
        <form method="POST" action="/graphic" on:submit={submitData}>
            <br>
            <br>
            <div class="inputBox">
                <label for="body">First Name</label>
                <input id="body" type="text" placeholder="" bind:value={$bodyChoice}>
                <br>
            </div>
            <br>
            <br>
            <div class="inputBox">
                <label for="shadow">Phone Number OR Email</label>
                <input id="shadow" type="text" placeholder="" bind:value={$shadowChoice}>
                <br>
            </div>

            <div class="centered">
                <div>
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

            <button on:click={() => submitData()}>Send to thebacklot!</button>
        </form>
        <br>
    </div>
    <div class="pure-u-1-1">
        <button on:click={() => goBackToStepThree()}>Go Back To Step Three</button>
        <Link to="/homepage"><button on:click={() => goBackToHomePage()}>Cancel Request</button></Link>
        <br>
        <br>
    </div>
</div>

<style>
    label {
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 15px;
    }
</style>