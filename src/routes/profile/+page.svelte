<script>
    export let data;
</script>

<h1>User profile</h1>

{#if data?.user}
    <h1>Logged in as user: {data?.user?.email}</h1>
    <form method="POST" action="?/logout">
        <button type="submit">Log Out</button>
    </form>
{:else}
    <a href="user-auth/login">Login</a>
    <a href="user-auth/register">Register</a>
{/if}

<style>
    h1 {
        font-size: 2em;
        font-weight: 600;
        margin-bottom: 1em;
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 1em;
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