import React from "react";
import {
  Information,
  CheckmarkOutline,
  ListBulleted,
  Network_2,
  Calendar,
  Currency,
  ArrowsHorizontal,
  At,
  Events,
} from "@carbon/icons-react";
// import CircularScore from "../components/CircularScore";
import ValueScore from "../components/ValueScore";
import { useNavigate } from "react-router-dom";

export default function GenomePage() {
  const navigate = useNavigate();

  const handleValueScoreClick = () => {
    navigate("/ask", { state: { initialInput: "Value Score" } });
  };
  return (
    <div className="genome-page">
      {/* Sidebar */}
      <div className="sidebar">
        <button className="sidebar-btn">
          <Information size={20} /> Anomaly Alerts
        </button>
        <button className="sidebar-btn">
          <CheckmarkOutline size={20} /> Airport Cases
        </button>
        <button className="sidebar-btn">
          <ListBulleted size={20} /> Establishments & Work
        </button>
        <button className="sidebar-btn">
          <Network_2 size={20} /> Relationships
        </button>
        <button className="sidebar-btn">
          <Calendar size={20} /> Cases Investigations
        </button>
        <button className="sidebar-btn">
          <Information size={20} /> Violations
        </button>
        <button className="sidebar-btn">
          <Currency size={20} /> Visa & Residencies
        </button>
        <button className="sidebar-btn">
          <ArrowsHorizontal size={20} /> Travel Entry & Exit
        </button>
        <button className="sidebar-btn">
          <At size={20} /> Social Media
        </button>
        <button className="sidebar-btn">
          <Events size={20} /> External Integrations
        </button>
      </div>



      {/* Profile */}
      <div className="main-profile">
        <div className="circle-container">
          <img src="/transparent-profile.png" alt="Profile" className="profile-img" />
        </div>
      </div>

      {/* Score Section */}
      {/* Score Section */}
      <div className="score-section" onClick={handleValueScoreClick} style={{ cursor: "pointer" }}>
  <ValueScore />
</div>


      {/* Footer */}
      <div className="footer">
        Powered by <span className="watson">watsonx</span>
      </div>
    </div>
  );
}
// import React, { useState } from 'react';
// import {
//   Grid,
//   Column,
//   Tabs,
//   Tab,
//   Button,
//   ClickableTile,
//   Tooltip,
//   AspectRatio,
//   Heading,
// } from '@carbon/react';
// import { Information } from '@carbon/icons-react';
// import './App.scss';
// const MENU_ITEMS = [
//   { id: 'violations', label: 'Violations' },
//   { id: 'visa', label: 'Visa & Residencies' },
//   { id: 'travel', label: 'Travel Entry & Exit' },
//   { id: 'social', label: 'Social Media' },
//   { id: 'integrations', label: 'External Integrations' },
// ];
// const PEOPLE = [
//   {
//     id: 1,
//     name: 'John Doe',
//     country: 'UK',
//     passport: 'ABC123',
//     age: 38,
//     score: 92,
//   },
//   {
//     id: 2,
//     name: 'Jane Smith',
//     country: 'US',
//     passport: 'XYZ789',
//     age: 29,
//     score: 85,
//   },
// ];
// const App = () => {
//   const [selectedMenu, setSelectedMenu] = useState(MENU_ITEMS[0].id);
//   const handleMenuClick = (id) => {
//     setSelectedMenu(id);
//   };
//   return (
//     <div className="app">
//       <Grid fullWidth className="app-header">
//         <Column lg={16} md={8} sm={4}>
//           <Tabs
//             triggerButtonLabel="Menu"
//             aria-label="Header tabs"
//             onSelectionChange={() => {}}
//           >
//             <Tab label="Home" />
//           </Tabs>
//         </Column>
//       </Grid>
//       <Grid fullWidth className="app-body">
//         <Column lg={4} md={4} sm={4} className="app-sidebar">
//           {MENU_ITEMS.map((item) => (
//             <ClickableTile
//               key={item.id}
//               className={`sidebar-item ${
//                 selectedMenu === item.id ? 'selected' : ''
//               }`}
//               onClick={() => handleMenuClick(item.id)}
//             >
//               {item.label}
//             </ClickableTile>
//           ))}
//         </Column>
//         <Column lg={12} md={12} sm={8} className="app-main">
//           <Grid className="cards-grid">
//             {PEOPLE.map((person) => (
//               <Column key={person.id} lg={8} md={8} sm={8} className="card-col">
//                 <ClickableTile className="person-card">
//                   <div className="card-header">
//                     <Heading
//                       className="card-title"
//                       level={3}
//                       aria-label={`Profile of ${person.name}`}
//                     >
//                       {person.name}
//                     </Heading>
//                     <Tooltip align="bottom" label="This is the value score for the individual.">
//                       <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
//                         <Information size={16} aria-label="Info" />
//                         <span>Score Info</span>
//                       </span>
//                     </Tooltip>

//                   </div>
//                   <div className="card-body">
//                     <div className="profile-grid">
//                       <div className="profile-item">
//                         <span className="label">Name</span>
//                         <span className="value">{person.name}</span>
//                       </div>
//                       <div className="profile-item">
//                         <span className="label">Passport</span>
//                         <span className="value">{person.passport}</span>
//                       </div>
//                       <div className="profile-item">
//                         <span className="label">Age</span>
//                         <span className="value">{person.age}</span>
//                       </div>
//                     </div>
//                     <div className="score-section">
//                       <Button
//                         kind="primary"
//                         size="md"
//                         className="score-button"
//                         aria-label="Value Score"
//                       >
//                         Value Score
//                       </Button>
//                       <div className="score-value">
//                         <span className="number">{person.score}</span>
//                         <span className="percent">%</span>
//                       </div>
//                       <AspectRatio ratio="4x3" className="card-aspect" />
//                     </div>
//                   </div>
//                 </ClickableTile>
//               </Column>
//             ))}
//           </Grid>
//         </Column>
//       </Grid>
//     </div>
//   );
// };
// export default App;