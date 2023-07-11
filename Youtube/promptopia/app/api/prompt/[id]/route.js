import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";
import {existsSync} from "@node_modules/next/dist/lib/find-pages-dir";

// GET
export const GET = async (request, { params }) => {
    try {
        await connectToDB();

        const prompt = await Prompt.findById(params.id).populate('creator');

        if(!prompt) return  new Response("Prompt not found", { status: 404 })
        return new Response(JSON.stringify(prompts), {status: 200})

    } catch (error) {
        console.log(error)
        return new Response("Failed to fetch all prompts", {status: 500})
    }
}

// PATCH
export const PATCH = async  ( request, { params }) => {
    const { prompt, tag } = await request.json();

    try {
        await connectToDB();

        const exitingPrompt = await Prompt.findById(params.id);

        if(!exitingPrompt) return new Response("Prompt not found", { status: 404 })
        exitingPrompt.prompt = prompt;
        exitingPrompt.tag = tag;

        await exitingPrompt.save();
        return  new Response(JSON.stringify(exitingPrompt), { status: 200 })


    } catch (error) {
        return new Response("Failed to update prompt", { status: 500 })
    }
}

// DELETE
export const DELETE = async ( request, { params }) => {
    try {
        await connectToDB();

        await Prompt.findByIdAndRemove(params.id)

        return new Response("Prompt deleted successfully", { status: 200 })
    } catch (error) {
        return new Response("Failed to delete prompt", { status: 500 })
    }
}