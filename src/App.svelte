<script>
    import {Route, Router} from "svelte-navigator";
    import Homepage from "./routes/Homepage.svelte";
    import Graphic from "./routes/Graphic.svelte";
    import Pixel from "./routes/Pixel.svelte";
</script>

<Router>
    <main style="height: 99%">
        <Route path="graphic">
            <Graphic />
        </Route>

        <Route path="pixel">
            <Pixel/>
        </Route>

        <Route path="homepage">
            <Homepage />
        </Route>

        <Route path="/">
            <Homepage/>
        </Route>
    </main>
</Router>