<!-- components/TodosStatus.svelte -->
<script lang="ts">
    import type { Todo_type } from "../types/todo_type";

    export let todos: Todo_type[]

    $: totalTodos = todos.length
    $: completedTodos = todos.filter(todo => todo.completed).length

    let headingEl: HTMLElement

    export const focus = () => headingEl.focus()

</script>

<h2 id="list-heading" bind:this={headingEl} tabindex={-1}>{completedTodos} out of {totalTodos} items completed</h2>