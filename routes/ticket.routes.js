import { Router } from "express";
import {
    createTicket,
    getAllTickets,
    getTicketsByAttendeeId,
} from "../controllers/ticket.controller.js";

const router = Router();

// get all tickets
router.get("/get-all", getAllTickets);
router.get("/get-by-attendee-id", getTicketsByAttendeeId);
router.post("/buy", createTicket);

export default router;