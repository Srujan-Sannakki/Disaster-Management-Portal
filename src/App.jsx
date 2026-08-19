import React, { useState } from 'react';
import { 
  Menu, ChevronDown, Phone, FileText, Map as MapIcon, 
  Users, AlertTriangle, Activity, Search, Download, 
  ExternalLink, Home, Shield, BookOpen, ChevronRight
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('about');
  const [activeSubSection, setActiveSubSection] = useState(0);
  const [hoveredTab, setHoveredTab] = useState(null);

  // Data Structure aligned strictly with the Flowchart Legend
  // Blue = Primary Tab (Keys here)
  // Pink = SubSections (Dropdowns)
  // Green = Content (Inside the 'content' property)
  const navData = {
    about: {
      title: "About CDMP 2026",
      icon: <Home className="w-4 h-4" />,
      subSections: [
        { 
          title: "CDMP Document", 
          content: (
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
                <h3 className="text-xl font-bold text-slate-800 mb-4">Official Plan Downloads</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Green Box items from the chart */}
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg flex items-center justify-between cursor-pointer hover:bg-green-100 transition-colors group">
                    <div className="flex items-center space-x-3">
                      <div className="bg-green-600 text-white p-2 rounded">PDF</div>
                      <span className="font-semibold text-green-900">Full CDMP Document</span>
                    </div>
                    <Download className="w-5 h-5 text-green-700 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg flex items-center justify-between cursor-pointer hover:bg-green-100 transition-colors group">
                     <div className="flex items-center space-x-3">
                      <div className="bg-blue-600 text-white p-2 rounded">DOC</div>
                      <span className="font-semibold text-green-900">Executive Summary</span>
                    </div>
                    <Download className="w-5 h-5 text-green-700 group-hover:scale-110 transition-transform" />
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
                <h3 className="text-xl font-bold text-slate-800 mb-4">Zone Data Maps</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {['Zone 1', 'Zone 2', 'Zone 3', 'Zone 4'].map(zone => (
                    <button key={zone} className="flex flex-col items-center justify-center p-4 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition-all active:scale-95">
                      <MapIcon className="w-8 h-8 mb-2" />
                      <span className="font-bold">{zone}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )
        },
        { title: "Overview, Vision & Mission", content: <StandardContent title="Vision & Mission" body="To build a safer, disaster-resilient city through proactive planning, capacity building, and effective response mechanisms." /> },
        { title: "Latest News & Announcements", content: <NewsFeed /> },
        { title: "FAQs", content: <FAQSection /> }
      ]
    },
    risk: {
      title: "Risk Assessment",
      icon: <AlertTriangle className="w-4 h-4" />,
      subSections: [
        { title: "Hazard Profile", content: <StandardContent title="Hazard Profile" body="Comprehensive analysis of potential hazards including floods, earthquakes, and industrial accidents." /> },
        { title: "Vulnerability Assessment", content: <StandardContent title="Vulnerability Assessment" body="Identification of vulnerable population groups and critical infrastructure at risk." /> },
        { title: "Capacity Assessment", content: <StandardContent title="Capacity Assessment" body="Evaluation of current resources, equipment, and personnel available for disaster response." /> },
        { title: "Risk Mapping & Analysis", content: <MapPlaceholder title="Interactive Risk Map" /> }
      ]
    },
    framework: {
      title: "Institutional Framework",
      icon: <Shield className="w-4 h-4" />,
      subSections: [
        { 
          title: "Institutional Structure", 
          content: (
            <div className="space-y-6">
              <StandardContent title="Institutional Structure" body="The hierarchical structure of the City Disaster Management Authority." />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <ActionCard title="Organisation Structure" icon={<Users/>} />
                 <ActionCard title="Roles & Responsibilities" icon={<FileText/>} />
              </div>
            </div>
          ) 
        },
        { 
          title: "Co-ordination Mechanism", 
          content: (
            <div className="space-y-6">
               <StandardContent title="Co-ordination Mechanism" body="Frameworks for inter-agency collaboration and command structures." />
               <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                 <ActionCard title="Interagency Guidelines" icon={<BookOpen/>} />
                 <ActionCard title="Stakeholder Engagement" icon={<Users/>} />
                 <ActionCard title="Command Structures" icon={<Shield/>} />
              </div>
            </div>
          )
        }
      ]
    },
    preparedness: {
      title: "Preparedness", // Shortened for mobile fit
      icon: <Activity className="w-4 h-4" />,
      subSections: [
        { 
          title: "Preparedness Measures", 
          content: (
            <div className="space-y-4">
              <StandardContent title="Preparedness Measures" body="Key strategies to ensure readiness before a disaster strikes." />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <ActionCard title="Contingency Plans" icon={<FileText/>} />
                <ActionCard title="Resource Mobilisation" icon={<Activity/>} />
                <ActionCard title="Public Awareness" icon={<Users/>} />
              </div>
            </div>
          )
        },
        { title: "SOPs and Checklists", content: <StandardContent title="Standard Operating Procedures" body="Emergency manuals and Incident Response System (IRS) guidelines." /> },
        { title: "Response & Relief", content: <StandardContent title="Response Protocols" body="Search and rescue protocols, relief distribution guidelines, and emergency contacts." /> }
      ]
    },
    recovery: {
      title: "Recovery",
      icon: <Users className="w-4 h-4" />,
      subSections: [
        { title: "Reconstruction", content: <StandardContent title="Reconstruction Guidelines" body="Post-disaster needs assessment and guidelines for safe reconstruction." /> },
        { title: "Capacity Building", content: <StandardContent title="Training Programs" body="Schedules and modules for training community volunteers and officials." /> }
      ]
    },
    contact: {
      title: "Contact",
      icon: <Phone className="w-4 h-4" />,
      subSections: [
        { title: "Contact Information", content: <ContactTable /> },
        { title: "Feedback & Grievances", content: <FeedbackForm /> },
        { title: "Partner Links", content: <LinksList /> }
      ]
    }
  };

  // Helper Components
  function ActionCard({ title, icon }) {
    return (
      <div className="bg-green-50 border border-green-200 p-4 rounded-lg flex items-center space-x-3 cursor-pointer hover:bg-green-100 hover:shadow-md transition-all">
        <div className="text-green-700">{icon}</div>
        <span className="font-semibold text-slate-800">{title}</span>
        <ChevronRight className="w-4 h-4 ml-auto text-green-400" />
      </div>
    )
  }

  function StandardContent({ title, body }) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
        <h2 className="text-2xl font-bold text-slate-800 mb-4 border-b pb-2">{title}</h2>
        <p className="text-slate-600 leading-relaxed">{body}</p>
        <div className="mt-6 h-32 bg-slate-50 rounded border border-dashed border-slate-300 flex items-center justify-center text-slate-400">
          Visual Content / Charts would load here
        </div>
      </div>
    );
  }

  function MapPlaceholder({ title }) {
    return (
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <h3 className="text-lg font-bold mb-4">{title}</h3>
        <div className="w-full h-96 bg-blue-50 rounded-lg border border-blue-200 flex flex-col items-center justify-center relative overflow-hidden">
          <MapIcon className="w-16 h-16 text-blue-300 mb-2" />
          <span className="text-blue-500 font-medium">Interactive GIS Map Loader</span>
          <div className="absolute bottom-4 right-4 bg-white p-2 rounded shadow text-xs">
            <div>Layer: Flood Risk</div>
            <div>Zone: All</div>
          </div>
        </div>
      </div>
    );
  }

  function NewsFeed() {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="border-l-4 border-green-500 bg-white p-4 shadow-sm">
            <div className="text-xs text-slate-500 uppercase font-bold mb-1">Oct 2{i}, 2025</div>
            <h4 className="font-bold text-slate-800">New Safety Protocols Issued for Monsoon Season</h4>
            <p className="text-sm text-slate-600 mt-1">The authority has released updated guidelines for Zone 1 and 2...</p>
          </div>
        ))}
      </div>
    );
  }

  function FAQSection() {
    return (
      <div className="space-y-2">
        {['Where is the nearest shelter?', 'How do I register as a volunteer?', 'Who to call during a chemical leak?'].map((q, i) => (
          <div key={i} className="bg-white p-4 rounded border border-slate-200">
            <div className="font-semibold text-slate-800 flex justify-between">
              {q} <ChevronDown className="w-4 h-4" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  function ContactTable() {
    return (
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-slate-200">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Department</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Contact Person</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Emergency Number</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {[
              { dept: 'Fire Control Room', person: 'Duty Officer', phone: '101 / 044-2345...' },
              { dept: 'Flood Control', person: 'Engineer in Charge', phone: '1077' },
              { dept: 'Medical Emergency', person: 'Chief Medical Officer', phone: '108' },
            ].map((row, idx) => (
              <tr key={idx}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">{row.dept}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">{row.person}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600 font-bold">{row.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  function FeedbackForm() {
    return (
      <div className="bg-white p-6 rounded shadow-sm max-w-lg">
        <h3 className="font-bold text-lg mb-4">Suggestion Box & Grievances</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700">Name</label>
            <input type="text" className="mt-1 block w-full rounded-md border border-slate-300 p-2" placeholder="Your Name" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700">Type</label>
            <select className="mt-1 block w-full rounded-md border border-slate-300 p-2">
              <option>General Suggestion</option>
              <option>Complaint</option>
              <option>Report Hazard</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700">Message</label>
            <textarea className="mt-1 block w-full rounded-md border border-slate-300 p-2 h-24" placeholder="Type your details here..."></textarea>
          </div>
          <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Submit Report</button>
        </div>
      </div>
    );
  }

  function LinksList() {
    return (
      <div className="grid grid-cols-1 gap-4">
        {['National Disaster Management Authority (NDMA)', 'State Disaster Management Authority (SDMA)', 'World Health Organization (WHO)'].map((link, i) => (
          <div key={i} className="flex items-center justify-between p-4 bg-white border border-slate-200 rounded hover:bg-slate-50 cursor-pointer">
            <span className="text-blue-700 font-medium">{link}</span>
            <ExternalLink className="w-4 h-4 text-slate-400" />
          </div>
        ))}
      </div>
    );
  }

  // Determine current content
  const currentTab = navData[activeTab];
  const currentContent = currentTab.subSections[activeSubSection]?.content;

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      
      {/* HEADER */}
      <header className="bg-white border-b border-slate-200 relative z-50">
        <div className="container mx-auto px-4 h-24 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-14 h-14 bg-blue-900 rounded-lg shadow flex items-center justify-center text-white font-bold text-2xl">
              <Shield />
            </div>
            <div>
              <h1 className="text-2xl font-extrabold text-blue-900 leading-none">CDMA</h1>
              <p className="text-sm text-slate-500 font-medium tracking-wide mt-1">CITY DISASTER MANAGEMENT AUTHORITY</p>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-6">
             <div className="text-right">
                <div className="text-xs text-slate-500 uppercase font-bold tracking-wider">Emergency Helpline</div>
                <div className="text-2xl font-black text-red-600 flex items-center justify-end">
                   <Phone className="w-5 h-5 mr-2" /> 108
                </div>
             </div>
             <button className="bg-red-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700 text-sm shadow-lg hover:shadow-xl transition-all">
               REPORT INCIDENT
             </button>
          </div>
        </div>
      </header>

      {/* NAVIGATION BAR (Primary Tabs - BLUE) */}
      <nav className="bg-blue-900 text-white shadow-xl sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <ul className="flex items-center justify-between">
            {Object.keys(navData).map((key) => (
              <li 
                key={key} 
                className="relative group h-14 flex items-center"
                onMouseEnter={() => setHoveredTab(key)}
                onMouseLeave={() => setHoveredTab(null)}
              >
                <button
                  onClick={() => { setActiveTab(key); setActiveSubSection(0); }}
                  className={`flex items-center space-x-2 px-3 lg:px-6 h-full text-sm font-bold transition-colors uppercase tracking-wide ${
                    activeTab === key 
                      ? 'bg-blue-800 text-white' 
                      : 'text-blue-200 hover:bg-blue-800 hover:text-white'
                  }`}
                >
                  {navData[key].icon}
                  <span className="hidden lg:inline">{navData[key].title}</span>
                  <span className="lg:hidden">{navData[key].title.split(' ')[0]}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${hoveredTab === key ? 'rotate-180' : ''}`} />
                </button>

                {/* DROP-DOWN OPTIONS (PINK -> Styled white/pink-ish for UI cleanliness but structurally Dropdowns) */}
                {hoveredTab === key && (
                   <div className="absolute top-full left-0 w-64 bg-white text-slate-800 shadow-2xl rounded-b-lg overflow-hidden border-t-4 border-pink-500 animate-in fade-in zoom-in-95 duration-150 origin-top-left">
                      <div className="bg-pink-50 px-4 py-2 text-xs font-bold text-pink-700 uppercase tracking-wider border-b border-pink-100">
                        Select Option
                      </div>
                      {navData[key].subSections.map((sub, idx) => (
                        <button
                          key={idx}
                          onClick={(e) => { 
                            e.stopPropagation(); // Prevent closing immediately if needed, though click will usually navigate
                            setActiveTab(key); 
                            setActiveSubSection(idx); 
                            setHoveredTab(null);
                          }}
                          className={`w-full text-left px-4 py-3 text-sm border-b border-slate-50 hover:bg-pink-50 hover:text-pink-700 transition-colors flex items-center justify-between group ${
                             activeTab === key && activeSubSection === idx ? 'bg-pink-50 text-pink-700 font-bold' : ''
                          }`}
                        >
                          {sub.title}
                          <ChevronRight className="w-3 h-3 text-slate-300 group-hover:text-pink-400" />
                        </button>
                      ))}
                   </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* SUB-HEADER / BREADCRUMB */}
      <div className="bg-slate-100 border-b border-slate-200 py-3">
         <div className="container mx-auto px-4 flex items-center text-xs text-slate-500 font-medium">
             <span className="uppercase tracking-wider">Portal</span>
             <ChevronRight className="w-3 h-3 mx-2" />
             <span className="uppercase tracking-wider text-blue-800 font-bold">{navData[activeTab].title}</span>
             <ChevronRight className="w-3 h-3 mx-2" />
             <span className="text-pink-600 font-bold">{navData[activeTab].subSections[activeSubSection]?.title}</span>
         </div>
      </div>

      {/* MAIN CONTENT (GREEN Boxes/Buttons context) */}
      <main className="container mx-auto px-4 py-8 min-h-[600px]">
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
           <div className="flex items-center space-x-3 mb-6">
              <div className="h-8 w-1 bg-green-500 rounded-full"></div>
              <h2 className="text-3xl font-bold text-slate-800">
                {navData[activeTab].subSections[activeSubSection]?.title}
              </h2>
           </div>
           
           {currentContent}
        </div>
      </main>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-400 py-12 mt-12 border-t-4 border-green-500">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
          <div className="col-span-1 md:col-span-2">
            <h5 className="text-white font-bold text-lg mb-4 flex items-center">
              <Shield className="mr-2" /> CDMA 2026
            </h5>
            <p className="max-w-md leading-relaxed">
              The City Disaster Management Plan 2026 aims to create a disaster-resilient city through a holistic, pro-active, technology-driven and community-based strategy.
            </p>
          </div>
          <div>
            <h5 className="text-white font-bold mb-4 uppercase tracking-wider">Resources</h5>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white hover:underline decoration-green-500 underline-offset-4">Emergency Contacts</a></li>
              <li><a href="#" className="hover:text-white hover:underline decoration-green-500 underline-offset-4">Zone Maps</a></li>
              <li><a href="#" className="hover:text-white hover:underline decoration-green-500 underline-offset-4">Volunteer Login</a></li>
              <li><a href="#" className="hover:text-white hover:underline decoration-green-500 underline-offset-4">Download App</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-bold mb-4 uppercase tracking-wider">Contact</h5>
            <p className="font-medium text-white">City Hall, Main Avenue</p>
            <p className="mt-2 text-red-400 font-bold text-lg">Helpline: 108</p>
            <p className="mt-1">support@cdmp.city.gov</p>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-8 pt-8 border-t border-slate-800 text-center text-xs">
           © 2026 City Disaster Management Authority. All Rights Reserved.
        </div>
      </footer>

    </div>
  );
}