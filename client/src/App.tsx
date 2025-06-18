import React from 'react';
import { Route, Switch } from 'wouter';
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
      <Layout>
        <Switch>
          <Route path="/" component={HomePage} />
          <Route path="/categories" component={CategoryPage} />
          <Route path="/tool/:id" component={ToolDetailsPage} />
          <Route path="/about" component={AboutPage} />
        </Switch>
        <ScrollToTop />
      </Layout>
    </ThemeProvider>
  );
}

export default App