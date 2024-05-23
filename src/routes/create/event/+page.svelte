<script>
    let groupName = '';

</script>

<span id="title" >Creer un EV3NT</span>

<form method="POST">
    <label for="eventName">Nom de l'évenement :</label>
    <input id="eventName" name="eventName" required />

    <label for="eventDate">Date de l'évenement :</label>
    <input type="date" id="eventDate" name="eventDate" required />

    <button>Créer l'Event</button>
</form>

<style>

    #title {
        font-size: 2em;
        font-weight: 600;
        margin-bottom: 1em;
        view-transition-name: titleanswered;
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 1em;
    }

    label {
        font-size: 1.2em;
    }

    input {
        font-size: 1.2em;
        padding: .5em;
        margin-bottom: 1em;
    }

    button {
        font-size: 1.2em;
        padding: .5em;
        background-color: var(--color-theme-1);
        color: var(--color-bg-0);
        border: none;
        cursor: pointer;
        transition: .2s;
    }

    button:hover {
        background-color: var(--color-theme-2);
    }

</style>