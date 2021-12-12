<script lang="ts">
    import { Link } from "svelte-navigator";
</script>

<main>

    <div class="centered">
        <Link to="/graphic"><button>Graphic Illustration</button></Link>
        <Link to="/pixel"><button>Pixel Art</button></Link>
        <Link to="/"><button>Go Back</button></Link>
    </div>

</main>

<style>
    main {
        /*border: 2px solid blue;*/
        height: 100%;
    }
</style>