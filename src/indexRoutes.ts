import { Router } from "express";
import bookRoutes from './book/routes/BookRoutes'

const router = Router()

router.use(bookRoutes)

export = router