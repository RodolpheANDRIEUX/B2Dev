<script>
    export let event;
    import dayjs from 'dayjs';
    import 'dayjs/locale/fr';
</script>

<div class="event-card">
    <h2>{event.name}</h2>
    <p>{dayjs(event.date).format('DD/MM/YYYY')}</p>
</div>

<style>
    .event-card {
        background-color: var(--color-bg-1);
        padding: 1em;
        border-radius: .5em;
        box-shadow: 0 0 1em rgba(0, 0, 0, .1);
        margin-bottom: 1em;
    }

    h2 {
        font-size: 1.5em;
        font-weight: 600;
        margin-bottom: .5em;
    }

    p {
        font-size: 1.2em;
    }
</style>