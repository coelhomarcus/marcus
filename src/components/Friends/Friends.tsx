import React from "react";
import { LuGithub, LuGlobe } from "react-icons/lu";

import {
    Avatar,
    AvatarImage,
    AvatarFallback
} from "@/components/ui/avatar";
import PageTitle from "@/components/PageTitle/PageTitle";

interface Friend {
    id: number;
    name: string;
    avatar: string;
    website?: string;
    github?: string;
    description?: string;
}

const friendsData: Friend[] = [
    {
        id: 1,
        name: "Vitória Leda",
        avatar: "https://github.com/vitorialeda.png",
        github: "https://github.com/vitorialeda",
        description: "Front-end"
    },
    {
        id: 2,
        name: "Luís Otavio",
        avatar: "https://github.com/luisotv.png",
        website: "https://luisiqueira.com",
        github: "https://github.com/luisotv",
        description: "Front-end & Game Dev"
    },
    {
        id: 3,
        name: "Martiniano Gomes",
        avatar: "https://github.com/martinianogomes.png",
        website: "https://martinianogomes.github.io/mini-portfolio/",
        github: "https://github.com/martinianogomes",
        description: "Front-end"
    },
];

const Friends: React.FC = () => {
    return (
        <div className="text-white">
            <PageTitle title="Amigos" />

            <h1 className="text-xl font-medium mb-2">Amigos</h1>
            <p className="text-neutral-400 text-sm mb-6">
                Aqui estão alguns dos meus amigos desenvolvedores e seus trabalhos.<br />
                Pagina em construção, então não se preocupe se não estiver tudo aqui.
            </p>

            <div className="grid grid-cols-1 gap-4 mb-8">
                {friendsData.map((friend) => (
                    <a
                        key={friend.id}
                        target="_blank"
                        className="block rounded-lg text-neutral-200 shadow-inner shadow-neutral-800 p-4 transition-colors border border-neutral-800"
                    >
                        <div className="flex items-center gap-3 mb-2">
                            <Avatar className="size-10 border border-neutral-800">
                                <AvatarImage src={friend.avatar} alt={friend.name} />
                                <AvatarFallback>{friend.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                            </Avatar>
                            <div>
                                <h3 className="font-medium">{friend.name}</h3>
                                <p className="text-neutral-400 text-xs">{friend.description}</p>
                            </div>
                        </div>

                        <div className="flex space-x-4 mt-4">
                            {friend.github && (
                                <a
                                    href={friend.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1 text-sm text-neutral-400 hover:text-neutral-100 transition-colors"
                                >
                                    <LuGithub />
                                    <span>{friend.github.split('/').pop()}</span>
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
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Friends;