import React from "react";

import '../components/Sidebar.css'

function Sidebar({ showSidebar }) {
    return (
        <div className={`sidebar ${showSidebar ? "show" : ""}`}>
            <h2>Meu Sidebar</h2>
            <ul>
                <li>Opção 1</li>
                <li>Opção 2</li>
                <li>Opção 3</li>
            </ul>
        </div>
    )
}

export default Sidebar;

// <div className="wrapper">
//                 <div className="section">
//                     <div className="nav-btn">
//                         <a href="#">
//                             <span onClick={click}>=</span>
//                         </a>
//                     </div>
//                 </div>
//                 <div className="sidebar">
//                     <ul>
//                         <li>
//                             <a href="#" className="active">
//                                 <span>Home</span>
//                             </a>
//                         </li>
//                         <li>
//                             <a href="#">
//                                 <span>My Dashboard</span>
//                             </a>
//                         </li>
//                         <li>
//                             <a href="#">
//                                 <span>Contato</span>
//                             </a>
//                         </li>
//                     </ul>
//                 </div>
//             </div>

