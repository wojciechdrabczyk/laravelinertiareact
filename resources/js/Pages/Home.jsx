import React from 'react'
import {Link} from "@inertiajs/react";

export default function Home({name}) {
    return (
        <>
            <h1 className="title">
                Hello {name}
            </h1>

            <Link preserveScroll href="/" className="block mt-[1000px] title">
                {new Date().toLocaleTimeString()}
            </Link>
        </>
    );
}
