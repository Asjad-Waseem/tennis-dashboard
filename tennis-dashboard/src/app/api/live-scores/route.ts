import { NextResponse } from "next/server";
import type { Match } from "@/types";
import { dummyMatch } from "@/lib/constants";

/**
 * API Route: GET /api/live-scores
 * 
 * Returns dummy live score data
 * In a real application, this would fetch from a database
 */
export async function GET(): Promise<NextResponse<{ match: Match }>> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100));

  return NextResponse.json({ match: dummyMatch });
}

