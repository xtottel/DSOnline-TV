// src/routes/index.ts
import { Hono } from 'hono'
import { categoriesRouter } from "./categories";
import { postsRouter } from "./posts";

// Create a main router and mount all sub-routers
const mainRouter = new Hono()

// Mount all routers under their respective paths
mainRouter.route('/posts', postsRouter)
mainRouter.route('/categories', categoriesRouter)

export default mainRouter