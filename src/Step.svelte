<script>
    export let stepNumber;
    export let color;
</script>

<style>
    .design {
        border-top: solid 3px;
        padding-top: 15px;
        width: 90px;
        margin-left: 20px;
        text-align: center;
    }
</style>

<div>
    <p class="design" style="border-color: {color}">Step {stepNumber}</p>
</div>