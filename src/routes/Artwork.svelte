<script lang="ts">
    import { Link } from "svelte-navigator";
    import Card from "../Card.svelte";
</script>

<div>
    <div class="header" style="text-align: center">
        <div class="pure-menu pure-menu-horizontal">
            <h1><a class="pure-menu-heading" href="" style="padding-bottom: 0; padding-top: 0">The Back Lot</a></h1>
        </div>
    </div>

    <div class="centered">
        <Link to="/graphic"><button>Graphic Illustration</button></Link>
        <Link to="/pixel"><button>Pixel Illustration</button></Link>
    </div>
</div>

<!--<main>-->

<!--    <div class="centered">-->
<!--        <Link to="/graphic"><button>Graphic Illustration</button></Link>-->
<!--        <Link to="/pixel"><button>Pixel Art</button></Link>-->
<!--        <Link to="/"><button>Go Back</button></Link>-->
<!--    </div>-->

<!--</main>-->

<style>
    button {
        width: 200px;
    }

    body {
        color: #666;
    }

    h1,h2,h3,h4,h5,h6 {
        color: white;
    }

    .l-box {
        padding: 3em;
    }

    .header .pure-menu {
        border-bottom-color: black;
        border-radius: 0;
    }

    .pure-menu-link {
        padding: 1em .7em;
    }

    .photo-box, .text-box {
        overflow: hidden;
        position: relative;
        height: 250px;
        text-align: center;
    }

    .photo-box-thin {
        height: 120px;
    }


    .photo-box img {
        max-width: 100%;
        height: auto;
        min-height: 250px;
    }

    .photo-box aside {
        position: absolute;
        bottom: 0;
        right: 0;
        padding: 1em 0.5em;
        color: white;
        width: 100%;
        font-size: 80%;
        text-align: right;
        background: -moz-linear-gradient(top,  rgba(16,27,30,0) 0%, rgba(12,2,2,1) 90%); /* FF3.6+ */
        background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(16,27,30,0)), color-stop(90%,rgba(12,2,2,1))); /* Chrome,Safari4+ */
        background: -webkit-linear-gradient(top,  rgba(16,27,30,0) 0%,rgba(12,2,2,1) 90%); /* Chrome10+,Safari5.1+ */
        background: -o-linear-gradient(top,  rgba(16,27,30,0) 0%,rgba(12,2,2,1) 90%); /* Opera 11.10+ */
        background: -ms-linear-gradient(top,  rgba(16,27,30,0) 0%,rgba(12,2,2,1) 90%); /* IE10+ */
        background: linear-gradient(to bottom,  rgba(16,27,30,0) 0%,rgba(12,2,2,1) 90%); /* W3C */
    }

    .photo-box aside span {
        color: #aaa;
    }

    .photo-box aside span a {
        color: #ccc;
        text-decoration: none;
    }

    .text-box {
        background: rgb(49, 49, 49); /* bluish grey */
        color: rgb(255, 190, 94); /* steel blue */
    }

    .text-box-head {
        color: #fff;
        padding-bottom: 0.2em;
        font-weight: 400;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        font-size: 24px;
    }

    .text-box-subhead {
        font-weight: normal;
        letter-spacing: 0.1em;
        text-transform: uppercase;
    }

    .form-box {
        text-align: center;
        font-size: 120%;
        border-bottom: 1px solid #eee;
    }

    .form-box .pure-button {
        background-color: #61B842;
        color: white;
        vertical-align: top;
        font-size: 85%;
        font-weight: 400;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        border-radius: 4px;
        margin: 0.3em;
    }
    .pure-form input[type] {
        margin: 0.3em auto;
        text-align: center;
    }

    .footer {
        background: #111;
        color: #666;
        text-align: center;
        padding: 1em;
        font-size: 80%;
    }

    .photo-box {
        border: solid blue 2px;
    }

    @media (min-width: 30em) {
        .photo-box, .text-box {
            text-align: left;
        }

        .photo-box-thin {
            height: 250px;
        }

        #borderRow {
            visibility: hidden;
        }
    }
</style>