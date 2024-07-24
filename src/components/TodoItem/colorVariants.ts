export const BUTTON_VARIANST = {
    completed: "#166534",
    deleted: "#991b1b",
    default: "#f59e0b"
}

type ColorVariant = {
    completed?: boolean;
    deleted?: boolean;
}
export function getButtonBackgroundColor({completed, deleted}: ColorVariant){
    const hasVariant = completed || deleted
    if(!hasVariant) return BUTTON_VARIANST["default"]
    if(completed){
        return BUTTON_VARIANST["completed"]
    }
    return BUTTON_VARIANST["deleted"]
}