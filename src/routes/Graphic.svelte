<script lang="ts">
    import { Link } from "svelte-navigator";
    import Step from "../Step.svelte";
    import LeftStep from "../LeftStep.svelte";
    import GraphicDecisionOne from "../GraphicDecisionOne.svelte";
    import {stepProgress} from "../stores/store";
    import {stepCount} from "../stores/store";
    import {graphicDesignDetailsChoice} from "../stores/store";
    import GraphicDecisionTwo from "../GraphicDecisionTwo.svelte";
    import {onMount} from "svelte";

    let progress;
    let step;
    let graphicDesignChoice;

    graphicDesignDetailsChoice.subscribe(value => {
       graphicDesignChoice = value;
    });

    stepCount.subscribe(value => {
        step = value;
    });

    stepProgress.subscribe(value => {
        progress = value;
    });

    onMount(() => {
        stepProgress.set(['Blue', 'LightGray', 'LightGray', 'LightGray']);
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
</div>

<!--<p>Step: {step}</p>-->
<!--<p>Progress: {progress}</p>-->
<!--<p>Graphic Design Choice: {graphicDesignChoice}</p>-->

<div class="centeredBody">
    {#if step === 1}
<!--        Here1-->
        <GraphicDecisionOne></GraphicDecisionOne>
    {:else if step === 2}
<!--        Here2-->
        <GraphicDecisionTwo></GraphicDecisionTwo>
    {:else if step === 3}
<!--        Here3-->
        <GraphicDecisionTwo></GraphicDecisionTwo>
    {:else if step === 4}
<!--        Here4-->
        <GraphicDecisionTwo></GraphicDecisionTwo>
    {:else}
<!--        HereElse-->
        <GraphicDecisionTwo></GraphicDecisionTwo>
    {/if}
</div>

<style>
    .centeredNav {
        display: flex;
        justify-content: center;
        /*border: 2px solid green;*/
        margin-top: 30px;
    }

    .centeredBody {
        display: flex;
        justify-content: center;
        /*border: 2px solid green;*/
        margin-top: 30px;
    }
</style>