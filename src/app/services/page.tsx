import Link from 'next/link'
import React from 'react'

function Service() {
    return (
        <div>
            <h1>Our Services</h1>
            <ul>
                <li><Link href="/services/app-development">App Development</Link></li>
                <li><Link href="/services/website-development">Website Development</Link></li>
            </ul>
        </div>
    )
}

export default Service