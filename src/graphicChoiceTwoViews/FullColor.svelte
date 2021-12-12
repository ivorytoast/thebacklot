<script lang="ts">
    import {Link} from "svelte-navigator";
    import {onMount} from "svelte";
    import {stepProgress} from "../stores/store";
    import {graphicDesignDetailsChoice} from "../stores/store";

    // function submitData() {
    //     fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Bourbon")
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data);
    //         }).catch(error => {
    //         console.log(error);
    //         return [];
    //     });
    // }

    function submitData() {

    }

    onMount(() => stepProgress.set(['Green', 'Blue', 'LightGray', 'LightGray']));
</script>

<div style="text-align: center;">
    <div>
        <h1>Choose Your Colors!</h1>
    </div>

    <form method="POST" action="/login" on:submit={submitData}>
        <div class="inputBox">
            <label for="img">Attach Reference Photo</label>
            <input type="file" id="img" name="img" accept="image/*">
            <br>
            <br>
        </div>

        <div class="inputBox">
            <label for="additionalInfo">Anything Else That Is Important?</label>

            <textarea id="additionalInfo" name="additionalInfo" rows="6" cols="35" style="resize: none">
                Add in any additional information you think is important!
            </textarea>
        </div>
    </form>
</div>

<style>
    button {
        width: 200px;
    }

    .inputBox {
        margin-bottom: 10px;
        width: 350px;
    }

    label {
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 5px;
    }

    hr {
        margin-top: 10px;
        margin-bottom: 10px;
        width: 75px;
    }
</style>