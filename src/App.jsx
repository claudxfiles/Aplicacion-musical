import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import UserSelection from './pages/UserSelection';
import ChildDashboard from './pages/ChildDashboard';
import AdultDashboard from './pages/AdultDashboard';
import MusicInterpretationPage from './pages/MusicInterpretationPage';
import AuralSkillsPage from './pages/AuralSkillsPage';
import ImprovisationPage from './pages/ImprovisationPage';
import NotationLessons from './components/music-interpretation/NotationLessons';
import SightReadingExercises from './components/music-interpretation/SightReadingExercises';
import PieceLibrary from './components/music-interpretation/PieceLibrary';
import IntervalRecognition from './components/aural-skills/IntervalRecognition';
import ChordRecognition from './components/aural-skills/ChordRecognition';
import ScaleRecognition from './components/aural-skills/ScaleRecognition';
import MelodicDictation from './components/aural-skills/MelodicDictation';
import RhythmicDictation from './components/aural-skills/RhythmicDictation';
import ImprovisationTheory from './components/improvisation/ImprovisationTheory';
import GuidedImprovisation from './components/improvisation/GuidedImprovisation';
import RecordImprovisation from './components/improvisation/RecordImprovisation';
import Navbar from './components/shared/Navbar';
import './App.css';

function App() {
  const [userType, setUserType] = useState(localStorage.getItem('userType') || null);
  const navigate = useNavigate();

  useEffect(() => {
    if (userType) {
      localStorage.setItem('userType', userType);
    } else {
      localStorage.removeItem('userType');
    }
  }, [userType]);

  const handleUserSelect = (type) => {
    setUserType(type);
    if (type === 'child') {
      navigate('/child/dashboard');
    } else if (type === 'adult') {
      navigate('/adult/dashboard');
    }
  };

  const handleLogout = () => {
    setUserType(null);
    navigate('/');
  };

  if (!userType) {
    return <UserSelection onSelect={handleUserSelect} />;
  }

  const commonRoutes = (
    <>
      <Route path="interpretation" element={<MusicInterpretationPage userType={userType} />}>
        <Route index element={<Navigate to="notation" />} />
        <Route path="notation" element={<NotationLessons userType={userType} />} />
        <Route path="sight-reading" element={<SightReadingExercises userType={userType} />} />
        <Route path="library" element={<PieceLibrary userType={userType} />} />
      </Route>
      <Route path="aural-skills" element={<AuralSkillsPage userType={userType} />}>
        <Route index element={<Navigate to="intervals" />} />
        <Route path="intervals" element={<IntervalRecognition userType={userType} />} />
        <Route path="chords" element={<ChordRecognition userType={userType} />} />
        <Route path="scales" element={<ScaleRecognition userType={userType} />} />
        <Route path="melodic-dictation" element={<MelodicDictation userType={userType} />} />
        <Route path="rhythmic-dictation" element={<RhythmicDictation userType={userType} />} />
      </Route>
      <Route path="improvisation" element={<ImprovisationPage userType={userType} />}>
        <Route index element={<Navigate to="theory" />} />
        <Route path="theory" element={<ImprovisationTheory userType={userType} />} />
        <Route path="guided" element={<GuidedImprovisation userType={userType} />} />
        <Route path="record" element={<RecordImprovisation userType={userType} />} />
      </Route>
    </>
  );

  return (
    <div className={`app-container ${userType}-theme`}>
      <Navbar userType={userType} onLogout={handleLogout} />
      <main className="content-area">
        <Routes>
          <Route path="/" element={<UserSelection onSelect={handleUserSelect} />} />
          {userType === 'child' && (
            <Route path="/child">
              <Route path="dashboard" element={<ChildDashboard />} />
              {commonRoutes}
              <Route path="*" element={<Navigate to="/child/dashboard" />} />
            </Route>
          )}
          {userType === 'adult' && (
            <Route path="/adult">
              <Route path="dashboard" element={<AdultDashboard />} />
              {commonRoutes}
              <Route path="*" element={<Navigate to="/adult/dashboard" />} />
            </Route>
          )}
          {/* Fallback if userType is somehow set but routes don't match */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
