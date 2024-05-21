<script>
    import Login from './login.svelte';
    import Register from './register.svelte';
    export let form;

    let login = true;
</script>

<div class="flex-box">
    <div class="catch">
        <h2>Créez et gérez vos évènements en un clic</h2>
        <form class="form-select" method="POST" action="?/discover">
            <img src="/src/lib/img/pin.svg" alt="pin">
            <select name="city" required>
                <option value=""  selected disabled>Choisissez une ville</option>
                <option value="paris">Paris</option>
                <option value="marseille">Marseille</option>
                <option value="lyon">Lyon</option>
                <option value="toulouse">Toulouse</option>
                <option value="nice">Nice</option>
                <option value="nantes">Nantes</option>
                <option value="strasbourg">Strasbourg</option>
                <option value="montpellier">Montpellier</option>
                <option value="bordeaux">Bordeaux</option>
                <option value="lille">Lille</option>
            </select>
            <button>Decouvrir</button>
        </form>
    </div>

    <div class="login">
        <label id="toggle" for="toggle-login">
            <input type="checkbox" id="toggle-login" bind:checked={login}>
            <span id="toggle-moving" style="transform: translate({login ? '0' : '120px'}, 0);">{login ? 'Se connecter' : 'S\'inscrire'}</span>
            <span>Se connecter</span>
            <span>S'inscrire</span>
        </label>

        {#if login}
            <Login {form}/>
        {:else}
            <Register {form}/>
        {/if}
    </div>
</div>


<style>


    .login {
        position: relative;
    }

    #toggle {
        position: absolute;
        top: 0;
        right: 50%;
        transform: translate(50%, 0);
        cursor: pointer;
        transition: .3s;
        width: 250px;
        height: 42px;
        background: var(--color-bg-3);
        border-radius: 21px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    #toggle span {
        font-size: 1rem;
        font-weight: 600;
        margin: 0 4px;
        height: 34px;
        width: 120px;
        border-radius: 17px;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: .3s;
    }

    #toggle-moving {
        position: absolute;
        background: var(--color-bg-0);
        box-shadow: var(--color-theme-3) 0 0 5px;
        color: var(--color-theme-1);
    }

    #toggle-login {
        display: none;
    }

    .catch {
        position: relative;
        z-index: 1;
        width: 50%;
        padding: 0 2rem;
    }

    .flex-box {
        position: absolute;
        width: 90vw;
        left: 50%;
        top: 0;
        transform: translate(-50%, 0);
        display: flex;
        justify-content: space-between;
        padding: 0;
        margin-top: 300px;
    }

    @media (max-width: 1100px) {
        .flex-box {
            flex-direction: column;
            margin-top: 100px;
        }

        .catch {
            width: 100%;
            padding: 0 1rem;
        }

        .login {
            margin-top: 2rem;
        }

        .form-select {
            margin-top: 2rem;
            overflow: hidden;
        }
    }

    img {
        position: absolute;
        opacity: .6;
        z-index: -3;
        left: 0;
        top: 70px;
        height: calc(100vh - 70px);
        width: 100%;
        object-fit: cover;
    }

    h2 {
        color: var(--color-theme-3);
        font-size: 3rem;
        font-weight: 600;
        margin: 2rem 0;
    }

    select {
        background-color: var(--color-bg-0);
        color: var(--color-text);
        border: none;
        border-bottom: var(--color-theme-1) 2px solid;
        width: 20rem;
        padding: .65rem .65rem .65rem 3rem;
        font-size: 1.5rem;
        font-weight: 600;
        cursor: pointer;
        border-radius: 0;
    }

    button {
        background-color: var(--color-theme-1);
        color: var(--color-bg-0);
        margin-left: .5rem;
        padding: .9rem;
        border: none;
        border-radius: 5px;
        font-size: 1.2rem;
        font-weight: 600;
        cursor: pointer;
        transform: translate(0, -1px);
        transition: .2s;
    }

    @media (max-width: 520px) {
        select {
            width: 90%;
            margin-bottom: 1rem
        ;
        }
    }

    button:hover {
        opacity: .6;
    }

    .form-select {
        position: relative;
    }

    .form-select img {
        position: absolute;
        Z-index: 1;
        top: 25px;
        left: 10px;
        transform: translate(0, -50%);
        height: 2rem;
        width: 2rem;
    }
</style>
