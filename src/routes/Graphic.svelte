<script lang="ts">
    import Step from "../Step.svelte";
    import LeftStep from "../LeftStep.svelte";
    import GraphicDecisionOne from "../GraphicDecisionOne.svelte";
    import {stepProgress} from "../stores/store";
    import {stepCount} from "../stores/store";
    import GraphicDecisionTwo from "../GraphicDecisionTwo.svelte";
    import {onMount} from "svelte";
    import Summary from "../Summary.svelte";
    import Homepage from "./Homepage.svelte";
    import ContactInfo from "../ContactInfo.svelte";
    import Submitted from "../Submitted.svelte";

    onMount(() => {
        stepProgress.set(['Blue', 'LightGray', 'LightGray', 'LightGray']);
    });
</script>

<div class="header" style="text-align: center">
    <div class="pure-menu pure-menu-horizontal">
        <h1><a class="pure-menu-heading" href="homepage" style="padding-bottom: 0; padding-top: 0">The Back Lot</a></h1>
    </div>
</div>

<div class="centeredNav">
    {#if $stepCount === 1}
        <h1>Graphic Or Pixel?</h1>
    {:else if $stepCount === 2}
        <h1>Finer Details...</h1>
    {:else if $stepCount === 3}
        <h1>Review Details</h1>
    {:else if $stepCount === 4}
        <h1>Contact Us!</h1>
    {:else if $stepCount === 5}
        <h1>Contact Details</h1>
    {:else}
        Not Found
    {/if}
</div>

<div class="centeredNav">
    <LeftStep stepDetail="Type" color="{$stepProgress[0]}"></LeftStep>
    <Step stepDetail="Details" color="{$stepProgress[1]}"></Step>
    <Step stepDetail="Review" color="{$stepProgress[2]}"></Step>
    <Step stepDetail="Contact" color="{$stepProgress[3]}"></Step>
</div>

<div>
    <br>
    <br>
    {#if $stepCount === 1}
        <GraphicDecisionOne></GraphicDecisionOne>
    {:else if $stepCount === 2}
        <GraphicDecisionTwo></GraphicDecisionTwo>
    {:else if $stepCount === 3}
        <Summary></Summary>
    {:else if $stepCount === 4}
        <ContactInfo></ContactInfo>
    {:else if $stepCount === 5}
        <Submitted></Submitted>
    {:else}
        <Homepage></Homepage>
    {/if}
</div>

<style>
    .centeredNav {
        display: flex;
        justify-content: center;
        margin-top: 30px;
    }
</style>