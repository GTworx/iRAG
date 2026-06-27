# iRAG Search

iRAG Search is a premium, high-performance web-based directory indexing and full-text search application. It allows you to select, index, browse, and search files across multiple storage environments:
1. **Local Folders**: Uses the modern browser **File System Access API** (`window.showDirectoryPicker()`) or a webkitdirectory file-upload fallback to index, parse, and search physical files on your local drive entirely client-side.
2. **Cloud Storage**: Features simulated connectors for **Google Drive**, **Dropbox**, and **iCloud Drive** showcasing OAuth authentication scopes, directory permissions granting, metadata retrieval sync, and full-text index searching.

## Features

- **Real Local Directory Scanning**: Crawl nested file structures recursively in-browser.
- **Full-Text Content Search**: Search inside text documents (`.txt`, `.md`, `.json`, `.js`, etc.) with in-context term highlights (`<mark>`).
- **Flexible Filters**: Filter search results by File Type (Documents, Code, Images, Archives), Date Modified, and File Size.
- **Interactive File Browser**: Toggle between Grid and List views. Navigate directory hierarchies using responsive breadcrumbs.
- **Detailed File Previews**: View file metadata, review code/text content with line wrapping, and render local images directly.
- **Premium Dark Mode Theme**: Sleek dark aesthetics built on clean HSL variables, smooth transitions, custom scrollbars, and glassmorphic layouts.

## Technology Stack

- **Structure**: Semantic HTML5
- **Styling**: Vanilla CSS (no external styling libraries)
- **Logic**: Vanilla ES6+ Javascript (no compilation steps, zero external dependencies)

## Running the Project

You can run the project locally using a lightweight HTTP server. Since `uv` is installed, you can launch a local Python server:

```powershell
uv run python -m http.server 8000
```

Once running, navigate to `http://localhost:8000` in your web browser.

### Local File System Permission Note

When using **Local Folder** mode, your browser will ask for permission to view files in the chosen folder. Because the app runs completely client-side:
- **No data is uploaded to any server.**
- All file contents, parsing, indexing, and search queries happen 100% inside your browser session.
- Closing or reloading the page resets the in-memory search index.
