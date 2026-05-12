import { Button, Div, Input } from "../atoms/atoms"

export const todoForm = (onAdd: (text: string) => void) => {
    const container = Div("flex gap-2 mb-4")

    const input = Input("flex-1 px-3 py-2 border border-gray-300 rounded text-sm")
    input.placeholder = "What needs doing?"

    const button = Button("px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded text-sm cursor-pointer")
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
