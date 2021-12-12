<script lang="ts">
    import { Link } from "svelte-navigator";
    import Step from "../Step.svelte";
    import LeftStep from "../LeftStep.svelte";

    let stepProgress: string[] = ['Green', 'LightBlue', 'LightGray', 'LightGray', 'LightGray'];
</script>

<div class="centeredNav">
    <h2>Commission Pixel Artwork!</h2>
</div>

<div class="centeredNav">
    <LeftStep stepNumber="{1}" color="{stepProgress[0]}"></LeftStep>
    <Step stepNumber="{2}" color="{stepProgress[1]}"></Step>
    <Step stepNumber="{3}" color="{stepProgress[2]}"></Step>
    <Step stepNumber="{4}" color="{stepProgress[3]}"></Step>
    <Step stepNumber="{5}" color="{stepProgress[4]}"></Step>
</div>

<div class="centeredBody">
    Hello
</div>

<style>
    .centeredBody {
        display: flex;
        justify-content: center;
        border: 2px solid green;
        margin-top: 30px;
    }
</style>