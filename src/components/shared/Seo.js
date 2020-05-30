import React from 'react'
import { Helmet } from 'react-helmet'

const SEO = ({ title }) => {
    const titleText = title ? `${title} • njamnjam` : 'njamnjam'

    return (
        <Helmet>
            <title>{titleText}</title>
        </Helmet>
    )
}

export default SEO
