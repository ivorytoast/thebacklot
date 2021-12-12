<script lang="ts">
    import { Link } from "svelte-navigator";
</script>

<main>

    <div class="centered">
        <Link to="/artwork"><button>Commission Artwork</button></Link>
        <button>View Artwork</button>
    </div>

</main>

<style>
    main {
        /*border: 2px solid blue;*/
        height: 100%;
    }
    .centered {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        /*border: 2px solid green;*/
    }
</style>