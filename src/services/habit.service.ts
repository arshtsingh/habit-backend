import {Habit} from "../types";
import {HabitModel} from "../models/Habit.model";
import {AppError} from "../util/errorHandling";
import {HttpCode} from "../constants/httpCode";

export const createHabit = async (habit: Habit) => {
  try {
    await HabitModel.create({...habit})
  } catch (e) {
    throw new AppError("DB error", HttpCode.BAD_REQUEST, e.stack)
  }
}

export const getHabit = (email: string) => {
  try {
    return HabitModel.find({email})
  } catch (e) {
    throw new AppError("DB error", HttpCode.BAD_REQUEST, e.stack)
  }
}