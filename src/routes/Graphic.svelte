<script lang="ts">
    import { Link } from "svelte-navigator";
    import Step from "../Step.svelte";
    import LeftStep from "../LeftStep.svelte";
    import GraphicDecisionOne from "../GraphicDecisionOne.svelte";
    import {stepProgress} from "../stores/store";
    import {stepCount} from "../stores/store";
    import {graphicDesignDetailsChoice} from "../stores/store";
    import {artworkStyleChoice} from "../stores/store";
    import GraphicDecisionTwo from "../GraphicDecisionTwo.svelte";
    import {onMount} from "svelte";
    import Summary from "../Summary.svelte";
    import Homepage from "./Homepage.svelte";

    onMount(() => {
        stepProgress.set(['Blue', 'LightGray', 'LightGray', 'LightGray']);
    });
</script>

<div class="centeredNav">
    {#if $stepCount === 1}
        <h1>Graphic Or Pixel?</h1>
    {:else if $stepCount === 2}
        <h1>Finer Details...</h1>
    {:else if $stepCount === 3}
        <h1>Review and Submit Reference Photo!</h1>
    {:else if $stepCount === 4}
        <h1>Contact Details</h1>
    {:else}
        Not Found
    {/if}
</div>

<div class="centeredNav">
    <LeftStep stepDetail="Type" color="{$stepProgress[0]}"></LeftStep>
    <Step stepDetail="Details" color="{$stepProgress[1]}"></Step>
    <Step stepDetail="Photo" color="{$stepProgress[2]}"></Step>
    <Step stepDetail="Contact" color="{$stepProgress[3]}"></Step>
</div>

<!--<p>Step: {$stepCount}</p>-->
<!--<p>Progress: {$stepProgress}</p>-->
<!--<p>Graphic Design Choice: {$graphicDesignDetailsChoice}</p>-->
<!--<p>Artwork Style: {$artworkStyleChoice}</p>-->

<div class="centeredBody">
    {#if $stepCount === 1}
<!--        Here1-->
        <GraphicDecisionOne></GraphicDecisionOne>
    {:else if $stepCount === 2}
<!--        Here2-->
        <GraphicDecisionTwo></GraphicDecisionTwo>
    {:else if $stepCount === 3}
<!--        Here3-->
        <Summary></Summary>
    {:else if $stepCount === 4}
        <!--        Here3-->
        <ContactInfo></ContactInfo>
    {:else}
<!--        HereElse-->
        <Homepage></Homepage>
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