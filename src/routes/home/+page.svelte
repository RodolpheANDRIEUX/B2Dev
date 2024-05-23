<script>
    export let data;
    import EventCard from '$lib/components/eventCard.svelte';
    import dayjs from 'dayjs';
    import 'dayjs/locale/fr';

    dayjs.locale('fr');

    console.log(data.events);

    let groups = data.groups;
    let events = data.events;
    let bestEvents = data.bestEvents;
</script>

<h1>Acceuil</h1>

<h2>Vos groupes</h2>
{#if groups.length === 0}
    <p>Vous n'avez pas encore de groupe.</p>
{:else}
    <ul>
        {#each groups as group (group.id)}
            <li>{group.name}</li>
        {/each}
    </ul>
{/if}

<h2>Vos événements</h2>
{#if events.length === 0}
    <p>Vous n'avez pas encore d'événement.</p>
{:else}
    <ul>
        {#each events as event (event.id)}
            <EventCard event={event} />
        {/each}
    </ul>
{/if}

<h2>Les meilleurs événements</h2>
<ul>
    {#each bestEvents as event (event.id)}
        <EventCard event={event} />
    {/each}
</ul>

<style>
    h1 {
        font-size: 2em;
        font-weight: 600;
        margin-bottom: 1em;
    }

    h2 {
        font-size: 1.5em;
        font-weight: 600;
        margin-bottom: 1em;
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    li {
        font-size: 1.2em;
        margin-bottom: 1em;
    }
</style>