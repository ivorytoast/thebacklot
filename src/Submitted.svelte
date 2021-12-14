<script lang="ts">
    import {onMount} from "svelte";
    import {stepProgress} from "./stores/store";

    onMount(() => stepProgress.set(['Green', 'Green', 'Green', 'Green']));
</script>
<div style="text-align: center">
    <h1>Thank you. We will get back to you shortly!</h1>
</div>