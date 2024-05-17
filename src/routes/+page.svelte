<img src="/src/lib/img/mmaWallpaper.jpg" alt="backgroundImg">
<div id="background-noise"></div>
<div id="background-mask"></div>

<div class="absolute-box">
    <h2>Vos bagarres livrées en un clic</h2>
    menu deroulant pour choisir le type de bagarre
    <form action="/fighters">
        <select name="city">
            <option value="" <svg> selected disabled>Choisissez une ville</option>
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
        <button type="submit">Trouver un bagarreur</button>
    </form>
</div>


<style>
    img {
        position: absolute;
        z-index: -3;
        left: 0;
        top: 70px;
        height: calc(100vh - 70px);
        width: 100%;
        object-fit: cover;
    }

    #background-noise {
        position: absolute;
        z-index: -2;
        left: 0;
        top: 70px;
        height: calc(100vh - 70px);
        width: 100%;
        background-image: url("$lib/img/noise.png");
        background-size: 64px 64px;
        background-repeat: repeat;
        opacity: .3;
    }

    #background-mask {
        position: absolute;
        z-index: -1;
        left: 0;
        top: 70px;
        height: calc(100vh - 70px);
        width: 100%;
        background-color: rgba(0, 0, 0, 0.5);
    }

    .absolute-box {
        position: absolute;
        top: 20vh;
        left: 10vw;
    }

    h2 {
        color: var(--color-bg-1);
        font-size: 3rem;
        font-weight: 600;
        margin: 2rem 300px 2rem 0;
    }

    select {
        background-color: var(--color-bg-1);
        color: var(--color-text);
        width: 20rem;
        padding: .65rem;
        border: none;
        font-size: 1.5rem;
        font-weight: 600;
        cursor: pointer;
        border-radius: 0;
    }

    select option {
        border-radius: 0;
    }

    button {
        background-color: var(--color-theme-1);
        color: var(--color-theme-3);
        margin-left: .65rem;
        padding: .7rem;
        border: none;
        border-radius: 10px;
        font-size: 1.5rem;
        font-weight: 600;
        cursor: pointer;
        transition: .2s;
    }

    button:hover {
        opacity: .6;
    }
</style>
