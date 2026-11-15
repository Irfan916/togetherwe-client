export const EVENT_TYPES = [
  "Cleanup",
  "Plantation",
  "Donation",
  "Blood Donation",
  "Charity",
  "Food Distribution",
  "Others",
] as const;

export type EventType = (typeof EVENT_TYPES)[number];

export type EventStatus = "upcoming" | "ongoing" | "ended";

export interface EventItem {
  _id: string;
  title: string;
  description: string;
  eventType: EventType;
  thumbnail: string;
  location: string;
  date: string; // ISO start
  endDate: string; // ISO end
  creatorEmail: string;
  creatorName?: string;
  attendees: string[];
  expectedVolunteers: number;
  createdAt: string;
  updatedAt: string;
}

export interface EventPayload {
  title: string;
  description: string;
  eventType: EventType;
  thumbnail: string;
  location: string;
  date: string;
  endDate: string;
  expectedVolunteers?: number;
}

export interface DashboardStats {
  eventsCreated: number;
  eventsJoined: number;
  upcomingCreated: number;
  communityMembers: number;
}