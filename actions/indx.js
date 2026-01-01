"use server";


import { auth } from "@/LIB/auth";
import { db } from "@/LIB/db";
import { headers } from "next/headers";

export async function createTracks(prev, formData) {
    const session = await auth.api.getSession({
        headers: await headers()
    });

    if (!session?.user?.email) {
        return { error: "Not authenticated" };
    }

    const habits = formData.getAll("habits"); // ARRAY OF CHECKED INPUTS
    console.log("Habits=", habits)
    if (habits.length === 0) {
        return { message: "No habits selected" };
    }

    await db.track.createMany({
        data: habits.map((habit) => ({
            habit,
            userEmail: session.user.email,
        })),
    });

    return { success: true };
}


export async function getTracks(email) {
    const tracks = await db.track.findMany(
        {
            where: {
                userEmail: email
            }
        }
    );
    return tracks
}