import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Layout } from './components/layout/Layout';
import { HomePage } from './pages/HomePage';
import { CategoryPage } from './pages/CategoryPage';
import { ToolDetailsPage } from './pages/ToolDetailsPage';
import { AboutPage } from './pages/AboutPage';
import { ScrollToTop } from './components/ui/ScrollToTop';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/categories" element={<CategoryPage />} />
            <Route path="/tool/:id" element={<ToolDetailsPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
          <ScrollToTop />
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;