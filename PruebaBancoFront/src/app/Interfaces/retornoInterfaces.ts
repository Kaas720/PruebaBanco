import { ProductoInterface } from "./productoInterface"

export interface RetornoProducto {
    codigo : string
    mensaje : string
    producto : ProductoInterface[]
}
