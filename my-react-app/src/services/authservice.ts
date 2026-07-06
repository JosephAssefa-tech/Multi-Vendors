import { env } from "process"
import { RegisterRequest, RegisterResponse } from "../models/auth"

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ?? "https://localhost:5001/api"
