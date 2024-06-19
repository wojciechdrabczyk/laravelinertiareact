import React from 'react'
import {Link} from "@inertiajs/react";

export default function Home({posts}) {
    console.log(posts)
    return (
        <>
            <h1 className="title">
                Hello
            </h1>

            <div>
                {posts.data.map(post => (
                    <div key={post.id} className="p-4 border-b border-gray-200">
                        <div className="text-sm text-slate-600">
                            <span>Posted on: </span>
                            <span>{new Date(post.created_at).toLocaleTimeString()}</span>
                        </div>
                        <p className="font-medium">
                            {post.body}
                        </p>
                    </div>
                ))}
            </div>
            <div className="py-12 px-4">
                {posts.links.map(link => (
                    link.url ?
                        <Link href={link.url}
                              key={link.label}
                              dangerouslySetInnerHTML={{__html: link.label}}
                              className={`mx-1 p-1 ${link.active ? "text-blue-600 font-bold" : "text-gray-700 font-light"}`}
                        />
                        :
                        <span
                            key={link.label}
                            dangerouslySetInnerHTML={{__html: link.label}}
                            className="p-1 mx-1 text-slate-300"
                        ></span>

                ))}
            </div>
        </>
    );
}
