import React from "react";
import { LuGithub, LuGlobe } from "react-icons/lu";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import PageTitle from "@/components/PageTitle/PageTitle";
import { arrFriends } from "@/utils/data/friends";

const Friends: React.FC = () => {
    return (
        <div className="text-white">
            <PageTitle title="Amigos" />

            <h1 className="text-xl font-medium mb-2">Amigos</h1>
            <p className="text-neutral-400 text-sm mb-6">
                Aqui estão alguns dos meus amigos desenvolvedores e seus trabalhos.
                <br />
                <span className="italic">
                    Pagina em construção, então não se preocupe se você ainda não estiver aqui.
                </span>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {arrFriends.map((friend) => (
                    <div
                        key={friend.id}
                        className="block rounded-lg text-neutral-200 shadow-inner shadow-neutral-800 p-4 transition-colors border border-neutral-800"
                    >
                        <div className="flex items-center gap-3 mb-2">
                            <Avatar className="size-12">
                                <AvatarImage src={friend.avatar} alt={friend.name} />
                                <AvatarFallback>
                                    {friend.name
                                        .split(" ")
                                        .map((n) => n[0])
                                        .join("")}
                                </AvatarFallback>
                            </Avatar>
                            <div>
                                <h3 className="font-medium">{friend.name}</h3>
                                <p className="text-neutral-400 text-xs">{friend.description}</p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2 sm:gap-0 sm:flex-row space-x-4 mt-4">
                            {friend.github && (
                                <a
                                    href={friend.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1 text-sm text-neutral-400 hover:text-neutral-100 transition-colors"
                                >
                                    <LuGithub />
                                    <span>{friend.github.split("/").pop()}</span>
                                </a>
                            )}

                            {friend.website && (
                                <a
                                    href={friend.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1 text-sm text-neutral-400 hover:text-neutral-100 transition-colors"
                                >
                                    <LuGlobe />
                                    <span>website</span>
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Friends;
