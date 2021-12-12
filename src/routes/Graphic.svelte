<script lang="ts">
    import { Link } from "svelte-navigator";
    import Step from "../Step.svelte";
    import LeftStep from "../LeftStep.svelte";
    import GraphicDecisionOne from "../GraphicDecisionOne.svelte";
    import {stepProgress} from "../stores/store";
    import {stepCount} from "../stores/store";
    import GraphicDecisionTwo from "../GraphicDecisionTwo.svelte";
    import {onMount} from "svelte";

    let progress;
    let step;

    stepCount.subscribe(value => {
        step = value;
    });

    stepProgress.subscribe(value => {
        progress = value;
    });

    onMount(() => {
        stepProgress.set(['Blue', 'LightGrey', 'LightGray', 'LightGray', 'LightGray']);
        stepCount.set(1);
    });
</script>

<div class="centeredNav">
    <h2>Commission Graphic Artwork!</h2>
</div>

<div class="centeredNav">
    <LeftStep stepNumber="{1}" color="{progress[0]}"></LeftStep>
    <Step stepNumber="{2}" color="{progress[1]}"></Step>
    <Step stepNumber="{3}" color="{progress[2]}"></Step>
    <Step stepNumber="{4}" color="{progress[3]}"></Step>
</div>

<div class="centeredBody">
    {#if step === 1}
        One
        <GraphicDecisionOne></GraphicDecisionOne>
    {:else if step === 2}
        Two
        <GraphicDecisionTwo></GraphicDecisionTwo>
    {:else if step === 3}
        Three
        <GraphicDecisionTwo></GraphicDecisionTwo>
    {:else if step === 4}
        Four
        <GraphicDecisionTwo></GraphicDecisionTwo>
    {:else}
        Five
        <GraphicDecisionTwo></GraphicDecisionTwo>
    {/if}
</div>

<style>
    .centeredNav {
        display: flex;
        justify-content: center;
        border: 2px solid green;
        margin-top: 30px;
    }

    .centeredBody {
        display: flex;
        justify-content: center;
        border: 2px solid green;
        margin-top: 30px;
    }
</style>