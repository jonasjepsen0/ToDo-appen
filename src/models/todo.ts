export type Todo = {
    id: string
    text: string
    done: boolean
}

export const createTodo = (text: string): Todo => ({
    id: crypto.randomUUID(),
    text,
    done: false,
})
