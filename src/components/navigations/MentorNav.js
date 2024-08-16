import React, { useState, useEffect } from 'react';
import '../assets/css/MentorNav.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const MentorNav = () => {
    const [submenuOpen, setSubmenuOpen] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [bgColor, setBgColor] = useState('#1f1e20');  // Default background color
    const [textColor, setTextColor] = useState('white');  // Default text color

    const toggleSubmenu = () => {
        setSubmenuOpen(!submenuOpen);
    };

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const handleColorChange = (e) => {
        const color = e.target.value;
        setBgColor(color);
        setTextColor(isColorLight(color) ? 'black' : 'white');
    };

    const isColorLight = (color) => {
        const hex = color.replace('#', '');
        const r = parseInt(hex.substring(0, 2), 16);
        const g = parseInt(hex.substring(2, 4), 16);
        const b = parseInt(hex.substring(4, 6), 16);
        // Calculate the luminance
        const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
        return luminance > 180;  // You can adjust this threshold
    };

    return (
        <div className={`sidebar ${sidebarOpen ? 'open' : 'closed'}`} style={{ backgroundColor: bgColor }}>
            <div className="menu-icon" onClick={toggleSidebar}>
                <i className="fas fa-bars" style={{ color: textColor }}></i>
            </div>
            <div className="color-picker">
                <label htmlFor="bgColor" style={{ color: textColor }}>Navbar Color: </label>
                <input 
                    type="color" 
                    id="bgColor" 
                    name="bgColor" 
                    value={bgColor} 
                    onChange={handleColorChange} 
                />
            </div>
            <ul className="menu-list">
                <li className="menu-item" style={{ color: textColor }}>
                    <i className="fas fa-tachometer-alt" style={{ color: textColor }}></i>
                    <a href="#" style={{ color: textColor }}>Dashboard</a>
                </li>
                <li className="menu-item" style={{ color: textColor }}>
                    <i className="fas fa-chart-line" style={{ color: textColor }}></i>
                    <a href="#" style={{ color: textColor }}>Faculty Analysis</a>
                </li>
                <li className="menu-item" style={{ color: textColor }}>
                    <i className="fas fa-user-tie" style={{ color: textColor }}></i>
                    <a href="#" style={{ color: textColor }}>Mentor List</a>
                </li>
                <li className="menu-item" style={{ color: textColor }}>
                    <i className="fas fa-list" style={{ color: textColor }}></i>
                    <a href="#" style={{ color: textColor }}>Class List</a>
                </li>
                <li className="menu-item" style={{ color: textColor }}>
                    <i className="fas fa-file-alt" style={{ color: textColor }}></i>
                    <a href="#" style={{ color: textColor }}>Mentor Report</a>
                </li>
                <li className="menu-item" style={{ color: textColor }}>
                    <i className="fas fa-user-graduate" style={{ color: textColor }}></i>
                    <a href="#" style={{ color: textColor }}>Student Information</a>
                </li>
                <li className="menu-item" style={{ color: textColor }}>
                    <i className="fas fa-history" style={{ color: textColor }}></i>
                    <a href="#" style={{ color: textColor }}>View Student History</a>
                </li>
                <li className="menu-item" style={{ color: textColor }}>
                    <i className="fas fa-bell" style={{ color: textColor }}></i>
                    <a href="#" style={{ color: textColor }}>Noticeboard</a>
                </li>
                <li className="menu-item" style={{ color: textColor }}>
                    <i className="fas fa-link" style={{ color: textColor }}></i>
                    <a href="#" style={{ color: textColor }}>Class Links</a>
                </li>
                <li className="menu-item" style={{ color: textColor }}>
                    <i className="fas fa-cog" style={{ color: textColor }}></i>
                    <a href="#" style={{ color: textColor }}>Settings</a>
                </li>
                <li className={`menu-item has-submenu ${submenuOpen ? 'open' : ''}`} style={{ color: textColor }}>
                    <i className="fas fa-calendar-alt" style={{ color: textColor }}></i>
                    <a href="#" onClick={toggleSubmenu} style={{ color: textColor }}>View Attendance Data</a>
                </li>
                <li className="menu-item" style={{ color: textColor }}>
                    <i className="fas fa-user-circle" style={{ color: textColor }}></i>
                    <a href="#" style={{ color: textColor }}>Account</a>
                </li>
            </ul>
        </div>
    );
};

export default MentorNav;
