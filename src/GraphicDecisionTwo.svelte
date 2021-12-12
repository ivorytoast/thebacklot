<script lang="ts">
    import {Link} from "svelte-navigator";
    import {onMount} from "svelte";
    import {stepProgress} from "./stores/store";

    onMount(() => stepProgress.set(['Green', 'Blue', 'LightGray', 'LightGray', 'LightGray']));
</script>

<div class="pure-g" style="text-align: center">
    <div class="pure-u-1-1">
        <h2>Pick Design Details</h2>
        <br>
    </div>
    <div class="pure-u-1-2">
        <Link to="/graphic"><button>3 Colors + Black</button></Link>
        <p>$30 Flat Rate</p>
    </div>
    <div class="pure-u-1-2">
        <Link to="/pixel"><button>Full Color</button></Link>
        <p>Estimate Will Be Given</p>
    </div>
    <div class="pure-u-1-1">
        <Link to="/homepage"><button>Cancel Commission Request</button></Link>
    </div>
</div>



<!--<div style="text-align: center">-->
<!--    <div>-->
<!--    <div>-->
<!--        <div style="float: left;">-->
<!--            <Link to="/graphic"><button>3 Colors + Black</button></Link>-->
<!--            <div>-->
<!--                Hello-->
<!--            </div>-->
<!--        </div>-->
<!--        <div style="float: right;">-->
<!--            <Link to="/pixel"><button>Full Color</button></Link>-->
<!--            <div>Hello</div>-->
<!--        </div>-->
<!--    </div>-->
<!--    </div>-->

<!--    <div>-->
<!--        <Link to="/"><button>Cancel Request</button></Link>-->
<!--    </div>-->
<!--</div>-->

<style>
    button {
        width: 200px;
    }
</style>