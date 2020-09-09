import mongoose, {Document, Schema} from "mongoose"
import {Habit} from "../types"

type IHATEHabit =  Document & Habit
const Habit = new Schema({
  email: {type: String, required: true},
  name: {type: String, required: true},
  remindTime: {type: String, required: true},
  completeDate: {type: Date, required: true}
})

export const HabitModel = mongoose.model<IHATEHabit>("Habit", Habit)