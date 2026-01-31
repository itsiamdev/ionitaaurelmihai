import React, { useState, useEffect, useMemo } from 'react';
import './App.css';

/**
 * GitHub Portfolio - Main Application
 * 
 * This component fetches and displays GitHub repositories in real-time.
 * Features:
 * - Configurable GitHub username
 * - Custom images for each repository
 * - Sorting by stars
 * - Filtering by programming language
 * - Option to hide forked repositories
 * - Responsive grid layout with animated cards
 */

// ============================================
// CONFIGURATION
// ============================================
const GITHUB_USERNAME = 'iam269'; // Replace with your GitHub username

/**
 * Repository Images Configuration
 * Map repository names to custom images/urls
 * Images are displayed at the top of each project card
 * 
 * To use: Add your repository name and image URL below
 * Supported formats: JPG, PNG, SVG, GIF
 */
const REPO_IMAGES = {
  // Example:
  // 'my-project': 'https://example.com/screenshot.png',
  // 'react-app': '/path/to/local/image.jpg',
  
  // Add your repository images here
  // Format: 'repository-name': 'image-url',
};

/**
 * Fetches all repositories for a given GitHub user
 * Uses GitHub REST API v3
 * @param {string} username - GitHub username
 * @returns {Promise<Array>} Array of repository objects
 */
const fetchRepositories = async (username) => {
  try {
    // Fetch repositories sorted by updated date to get latest projects first
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch repositories: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching repositories:', error);
    return [];
  }
};

/**
 * Maps common programming languages to their colors
 * Used for displaying language badges with consistent styling
 */
const languageColors = {
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  Python: '#3572A5',
  Java: '#b07219',
  'C++': '#f34b7d',
  C: '#555555',
  'C#': '#239120',
  Go: '#00ADD8',
  Rust: '#dea584',
  Ruby: '#701516',
  PHP: '#4F5D95',
  Swift: '#ffac45',
  Kotlin: '#A97BFF',
  Dart: '#00B4AB',
  HTML: '#e34c26',
  CSS: '#563d7c',
  SCSS: '#c6538c',
  Vue: '#41b883',
  Shell: '#89e051',
  Dockerfile: '#384d54',
};

/**
 * Gets the color for a programming language
 * @param {string} language - Programming language name
 * @returns {string} Hex color code
 */
const getLanguageColor = (language) => {
  return languageColors[language] || '#8b8b8b';
};

/**
 * Generates a dynamic placeholder image URL for a repository
 * Uses the repository name as the image text
 * @param {string} name - Repository name
 * @param {string} language - Primary programming language
 * @returns {string} Image URL
 */
const generateRepoImage = (name, language) => {
  const encodedName = encodeURIComponent(name);
  const color = getLanguageColor(language);
  const textColor = 'ffffff';
  return `https://placehold.co/600x400/${color.replace('#', '')}/${textColor}?text=${encodedName}&font=roboto`;
};

/**
 * RepositoryCard Component
 * Displays individual repository information in an animated card
 */
const RepositoryCard = ({ repo }) => {
  const languageColor = getLanguageColor(repo.language);
  // Use custom image if configured, otherwise generate dynamic image
  const repoImage = REPO_IMAGES[repo.name] || generateRepoImage(repo.name, repo.language);

  return (
    <div className="repo-card card-hover">
      {/* Repository Image - Clickable link to GitHub */}
      <a 
        href={repo.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="repo-image-link"
        aria-label={`View ${repo.name} on GitHub`}
      >
        <div className="repo-image-container">
          <img 
            src={repoImage} 
            alt={`${repo.name} preview`}
            className="repo-image"
            loading="lazy"
          />
        </div>
      </a>

      <div className="repo-header">
        <h3 className="repo-name">{repo.name}</h3>
        <span className="repo-stars">
          <svg
            className="star-icon"
            viewBox="0 0 16 16"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.75.75 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z" />
          </svg>
          {repo.stargazers_count}
        </span>
      </div>

      <p className="repo-description">
        {repo.description || 'No description available'}
      </p>

      <div className="repo-footer">
        {repo.language && (
          <span className="language-badge" style={{ '--lang-color': languageColor }}>
            <span
              className="language-dot"
              style={{ backgroundColor: languageColor }}
            />
            {repo.language}
          </span>
        )}

        <a
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="repo-link"
          aria-label={`View ${repo.name} on GitHub`}
        >
          View on GitHub
          <svg
            className="external-link-icon"
            viewBox="0 0 16 16"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V12.5A2.5 2.5 0 0 1 12.5 15h-10A2.5 2.5 0 0 1 0 12.5v-10A2.5 2.5 0 0 1 2.5 0h10a.5.5 0 0 0 .5-.5v-2.636a.5.5 0 0 0-.364-.343ZM8 1.5a.5.5 0 0 0-.5.5v10a.5.5 5 0 0 0 1 0V6.5a.5.5 0 0 0-.5-.5H8Z" />
          </svg>
        </a>
      </div>
    </div>
  );
};

/**
 * LoadingSpinner Component
 * Displays a simple animated loading indicator
 */
const LoadingSpinner = () => (
  <div className="loading-container">
    <div className="loading-spinner" />
    <p className="loading-text">Loading repositories...</p>
  </div>
);

/**
 * ErrorDisplay Component
 * Shows error message when fetching fails
 */
const ErrorDisplay = ({ message, onRetry }) => (
  <div className="error-container">
    <div className="error-content">
      <svg
        className="error-icon"
        viewBox="0 0 16 16"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0Zm-4.146-2.854a.5.5 0 0 0-.708 0L7.5 6.793 2.854 2.146a.5.5 0 0 0-.708.708l5 5a.5.5 0 0 0 .708 0l5-5a.5.5 0 0 0 0-.708L10.5 7.5l1.354-1.5Z" />
      </svg>
      <p className="error-message">{message}</p>
      <button className="retry-button" onClick={onRetry}>
        Try Again
      </button>
    </div>
  </div>
);

/**
 * FilterBar Component
 * Contains sorting, filtering, and hide forks controls
 */
const FilterBar = ({
  sortBy,
  setSortBy,
  selectedLanguage,
  setSelectedLanguage,
  languages,
  hideForks,
  setHideForks,
}) => (
  <div className="filter-bar">
    <div className="filter-group">
      <label htmlFor="sort-select" className="filter-label">
        Sort by:
      </label>
      <select
        id="sort-select"
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="filter-select"
      >
        <option value="updated">Recently Updated</option>
        <option value="stars-desc">Stars (High to Low)</option>
        <option value="stars-asc">Stars (Low to High)</option>
        <option value="name">Name (A-Z)</option>
      </select>
    </div>

    <div className="filter-group">
      <label htmlFor="language-select" className="filter-label">
        Filter by language:
      </label>
      <select
        id="language-select"
        value={selectedLanguage}
        onChange={(e) => setSelectedLanguage(e.target.value)}
        className="filter-select"
      >
        <option value="all">All Languages</option>
        {languages.map((lang) => (
          <option key={lang} value={lang}>
            {lang}
          </option>
        ))}
      </select>
    </div>

    <div className="filter-group filter-checkbox">
      <label className="checkbox-label">
        <input
          type="checkbox"
          checked={hideForks}
          onChange={(e) => setHideForks(e.target.checked)}
          className="checkbox-input"
        />
        <span className="checkbox-text">Hide forks</span>
      </label>
    </div>
  </div>
);

/**
 * Main App Component
 * Orchestrates the entire portfolio display
 */
const App = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Filter and sort state
  const [sortBy, setSortBy] = useState('updated');
  const [selectedLanguage, setSelectedLanguage] = useState('all');
  const [hideForks, setHideForks] = useState(false);

  /**
   * Load repositories on component mount
   */
  useEffect(() => {
    const loadRepos = async () => {
      setLoading(true);
      setError(null);
      const data = await fetchRepositories(GITHUB_USERNAME);
      
      if (data.length === 0) {
        setError('No repositories found. Please check the username configuration.');
      } else {
        setRepos(data);
      }
      
      setLoading(false);
    };

    loadRepos();
  }, []);

  /**
   * Extract unique languages from repositories
   * Used for the language filter dropdown
   */
  const languages = useMemo(() => {
    const langs = new Set(repos.map((repo) => repo.language).filter(Boolean));
    return Array.from(langs).sort();
  }, [repos]);

  /**
   * Filter and sort repositories based on current settings
   */
  const filteredRepos = useMemo(() => {
    let result = [...repos];

    // Hide forks if enabled
    if (hideForks) {
      result = result.filter((repo) => !repo.fork);
    }

    // Filter by language
    if (selectedLanguage !== 'all') {
      result = result.filter((repo) => repo.language === selectedLanguage);
    }

    // Sort repositories
    switch (sortBy) {
      case 'stars-desc':
        result.sort((a, b) => b.stargazers_count - a.stargazers_count);
        break;
      case 'stars-asc':
        result.sort((a, b) => a.stargazers_count - b.stargazers_count);
        break;
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'updated':
      default:
        // Already sorted by updated date from API
        break;
    }

    return result;
  }, [repos, sortBy, selectedLanguage, hideForks]);

  // Show loading state
  if (loading) {
    return (
      <div className="app">
        <LoadingSpinner />
      </div>
    );
  }

  // Show error state
  if (error) {
    return (
      <div className="app">
        <ErrorDisplay message={error} onRetry={() => window.location.reload()} />
      </div>
    );
  }

  return (
    <div className="app">
      {/* Header Section */}
      <header className="header">
        <div className="header-content">
          <h1 className="header-title">
            <span className="title-gradient">GitHub</span> Portfolio
          </h1>
          <p className="header-subtitle">
            Explorez {repos.length} proiecte de la{' '}
            <a
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className="username-link"
            >
              @{GITHUB_USERNAME}
            </a>
          </p>
        </div>
      </header>

      {/* Filter Bar */}
      <FilterBar
        sortBy={sortBy}
        setSortBy={setSortBy}
        selectedLanguage={selectedLanguage}
        setSelectedLanguage={setSelectedLanguage}
        languages={languages}
        hideForks={hideForks}
        setHideForks={setHideForks}
      />

      {/* Repository Grid */}
      <main className="repo-grid">
        {filteredRepos.length > 0 ? (
          filteredRepos.map((repo) => (
            <RepositoryCard key={repo.id} repo={repo} />
          ))
        ) : (
          <div className="empty-state">
            <p>No repositories match your filters.</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>
          Built with React & GitHub API • Data updates automatically
        </p>
      </footer>
    </div>
  );
};

export default App;
