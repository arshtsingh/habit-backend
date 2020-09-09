import {Router} from "express"
import {createHabit, getHabit} from "../services/habit.service";
import {handleError} from "../util/errorHandling";
import {Request, Habit} from "../types";

export const habitRoutes = Router()

habitRoutes.get("/", async (req: any, res) => {
  try {
    res.json(await getHabit(req.user.email))
  } catch (e) {
    handleError(e)
    res.sendStatus(500)
  }
})

habitRoutes.post("/", async (req: Request<Habit>, res) => {
  console.log((req as any).user)
  try {
    
    res.json(await createHabit({...req.body, email: (req as any).user.email}))
  } catch (e) {
    handleError(e)
    res.sendStatus(500)
  }
})

