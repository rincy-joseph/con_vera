"use client"
import Link from "next/link";
import { GetMessageList } from "./methods";
import { useEffect, useState } from "react";

interface CommunType {
    id: string;
    title: string;
    date: string;
    description: string;
}
export const CommunicationListing = () => {
    const [communicationList, setCommunicationList] = useState<CommunType[]>([])
    const fetchMessageList = async () => {
        try {
            const result: [] = await GetMessageList()
            if (result?.length) {
                setCommunicationList(result)
            }
        }
        catch (err) {

        }

    }
    useEffect(() => {
        console.log("CommonMessage useEffect")
        fetchMessageList()
    }, [])
    return <>
        {communicationList?.map((postItem, index) => <article key={index} className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            {/* Aspect ratio container ensures no layout shift while images load */}
            {/* <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          priority={false}
        />
      </div> */}

            {/* Content wrapper */}
            <Link href={`modules/MessageScreens/${postItem.id}`}>
                <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-3 text-xs font-semibold text-indigo-600 uppercase tracking-wider">
                        <span>{postItem.title}</span>
                        <span className="h-1 w-1 rounded-full bg-slate-300" />
                        <time className="text-slate-500 font-normal">{postItem.date}</time>
                    </div>

                    <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-slate-600">
                        {postItem.description}
                    </p>

                </div>
            </Link>
        </article>
        )}
    </>
}

export default CommunicationListing;