import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/organisms/Header';
import SideMenu from './components/molecules/SideMenu';
import MonitoringPage from './pages/MonitoringPage';
import CallHistoryPage from './pages/CallHistoryPage';
import RecordingsPage from './pages/RecordingsPage';

function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <Router>
            <div className="flex flex-col h-screen">
                <Header toggleMenu={toggleMenu} />

                <div className="flex flex-1">
                    {isMenuOpen && <SideMenu />}

                    <main className="flex-1 overflow-y-auto bg-gray-100 p-4">
                        <Routes>
                            <Route path="/monitoring" element={<MonitoringPage />} />
                            <Route path="/history" element={<CallHistoryPage />} />
                            <Route path="/recordings" element={<RecordingsPage />} />
                            <Route path="*" element={<MonitoringPage />} />
                        </Routes>
                    </main>
                </div>
            </div>
        </Router>
    );
}

export default App;
