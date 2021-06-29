import React from 'react'
import { NavLink  } from "react-router-dom";

export default function Category(m) {
    
    return (
        <>
            <NavLink target="_blank" className="text-dark" to={`category/${m._id}`}>{m.tenLoai}</NavLink>
        </>
    )
}
