<script>
    export let stepDetail;
    export let color;
</script>

<style>
    .design {
        border-top: solid 3px;
        padding-top: 15px;
        width: 100px;
        text-align: center;
    }
</style>

<div>
    <p class="design" style="border-color: {color}">{stepDetail}</p>
</div>