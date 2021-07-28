// stores.ts
import { writable } from 'svelte/store'
import { localStore } from './localStore'
import type { Todo_type } from "./types/todo_type";

export const alert = writable('Welcome to the To-Do list app!')

const initialTodos: Todo_type[] = [
  { id: 1, name: 'Visit MDN web docs', completed: true },
  { id: 2, name: 'Complete the Svelte Tutorial', completed: false },
]

export const todos = localStore<Todo_type[]>('mdn-svelte-todo', initialTodos)