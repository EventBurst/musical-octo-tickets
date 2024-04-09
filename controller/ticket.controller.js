import Ticket from "../models/ticket.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import mongoose from "mongoose";

// get all tickets
const getAllTickets = asyncHandler(async (_, res) => {
  const tickets = await Ticket.find();
  if (!tickets) throw new ApiError(404, "Tickets not found");
  return res
    .status(200)
    .json(new ApiResponse(200, tickets, "Tickets found"));
});


// get tickets by attendeid
const getTicketsByAttendeeId = asyncHandler(async (req, res) => {
  const { attendeeId } = req.body;
  if (!attendeeId) throw new ApiError(400, "AttendeeId is required");
  const tickets = await Ticket.find({ attendeeId });
  if (!tickets) throw new ApiError(404, "Tickets not found");
  return res
    .status(200)
    .json(new ApiResponse(200, tickets, "Tickets found"));
});

