import { atom } from "recoil"

const authScreenAtom= atom({
    key: "autScreenAtom",
    default: "login"
})

export default authScreenAtom