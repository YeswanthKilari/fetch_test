import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();


export async function POST(req: NextRequest) {
    
    const data = await req.json();

    try {
        await client.user.create({
            data: {
                username: data.username,
                password: data.password
            }
    
        })
        console.log(data);
        
        return NextResponse.json({
            message : "Sign up successful"
        })
    } catch (e) {
        console.error(e);
        return NextResponse.json({
            message: "Sign up failed",
            error: e.message
        }, { status: 500 });
    }
    
}