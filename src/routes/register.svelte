<script>
import {cubicOut} from "svelte/easing";
import {fly} from "svelte/transition";
</script>

<form method="POST"
      action="/?/register"
      in:fly={{ delay: 200, x: 200, duration: 300, easing: cubicOut }}
      out:fly={{ x: 200, duration: 200, easing: cubicOut }}
>
    <input type="email" name="email" placeholder="Email Address"/>
    <input type="password" name="password" placeholder="Password"/>
    <input type="password" name="conf-password" placeholder="Confirm Password"/>
    <button>Register</button>
</form>

<style>
    .error {
        color: red;
        font-size: 1rem;
        font-weight: 600;
        margin: 0;
    }

    h1 {
        color: var(--color-theme-3);
        font-size: 3rem;
        font-weight: 600;
        margin: 0;
    }

    form {
        width: min(30rem, 80vw);
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 5rem auto;
        gap: 2rem;
    }

    input {
        background-color: var(--color-bg-0);
        color: var(--color-text);
        border: none;
        border-bottom: var(--color-theme-1) 2px solid;
        width: 100%;
        padding: .5rem 1rem;
        font-size: 1.5rem;
        font-weight: 600;

    }

    button {
        background-color: var(--color-theme-1);
        color: var(--color-bg-0);
        padding: .5rem 1rem;
        font-size: 1.5rem;
        cursor: pointer;
        border-radius: 5px;
        border: none;
    }

</style>