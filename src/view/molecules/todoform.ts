import { Button, Div, Input } from "../atoms/atoms"

export const todoForm = (onAdd: (text: string) => void) => {
    const container = Div("todo-form")

    const input = Input()
    input.placeholder = "Todo"

    const button = Button()
    button.textContent = "Add"
    button.onclick = () => {
        const text = input.value.trim()
        if (text === "") return
        onAdd(text)
        input.value = ""
    }

    container.append(input, button)
    return container
}
