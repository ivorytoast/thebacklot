<script>
    import {Route, Router} from "svelte-navigator";
    import Homepage from "./routes/Homepage.svelte";
    import Artwork from "./routes/Artwork.svelte";
    import Graphic from "./routes/Graphic.svelte";
    import Pixel from "./routes/Pixel.svelte";
    import Step from "./Step.svelte";
    import GraphicDecisionTwo from "./GraphicDecisionTwo.svelte";
</script>

<Router>
<!--    <main style="height: 99%; border: solid yellow 3px">-->
    <main style="height: 99%; border: solid yellow 3px">
        <Route path="artwork">
            <Artwork />
        </Route>

        <Route path="graphic">
            <Graphic />
        </Route>

        <Route path="pixel">
            <Pixel/>
        </Route>

        <Route path="graphicDecisionTwo">
            <GraphicDecisionTwo/>
        </Route>

        <Route path="homepage">
            <Homepage />
        </Route>

        <Route path="/">
            <Homepage/>
        </Route>
    </main>
</Router>