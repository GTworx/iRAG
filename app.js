// Mock Databases for Cloud Services
const MOCK_FILES = {
  gdrive: {
    name: "Google Drive",
    rootPath: "/My Drive",
    files: [
      {
        name: "Annual_Strategy_2026.md",
        path: "/My Drive/Company Reports/Annual_Strategy_2026.md",
        type: "document",
        size: 12500,
        lastModified: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), // 3 days ago
        content: `# iRAG Annual Business Strategy 2026\n\n## Executive Summary\nIn 2026, iRAG Search is expanding its integration of local indexing engines with federated cloud connectors (Google Drive, Dropbox, iCloud).\n\n## Key Objectives\n1. Achieve sub-10ms search query responses across 100,000 indexed files.\n2. Implement zero-trust client-side encryption for secure indexing.\n3. Scale our marketing campaign targeting developers and knowledge managers.\n\n## Financial Projections\nWe anticipate a 150% growth in active user bases after launching the iCloud connector.\n- Q1: $1.2M MRR\n- Q2: $1.8M MRR\n- Q3: $2.5M MRR\n- Q4: $3.8M MRR\n\n## Marketing Channel Focus\n- Tech conferences and hackathons.\n- Open-source repository sponsorships.\n- Dynamic search index webinars.`
      },
      {
        name: "Q1_Marketing_Performance.pdf",
        path: "/My Drive/Company Reports/Q1_Marketing_Performance.pdf",
        type: "document",
        size: 4500000,
        lastModified: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000), // 30 days ago
        content: "[Binary PDF Data] Summary of Q1 marketing performance: CTR increased by 2.4%. Ad spend optimized. SEO campaigns for 'cloud retrieval indexer' resulted in a 40% rank increase on key search queries."
      },
      {
        name: "Specs_v2.md",
        path: "/My Drive/Project Alpha/Specs_v2.md",
        type: "document",
        size: 4300,
        lastModified: new Date(Date.now() - 12 * 60 * 60 * 1000), // 12 hours ago
        content: `# Project Alpha: Specifications v2\n\n## Technology Stack\n- Frontend: Pure HTML5, Vanilla CSS, Vanilla Javascript\n- Search Index: In-memory inverted index, trie-based prefix searching\n- Connectors: File System Access API, Dropbox Chooser, Google Picker API\n\n## Architecture Diagram\n[Web Browser] <-- (File Handles) --> [Local File System]\n[Web Browser] <-- (OAuth Token)  --> [Cloud APIs]\n\n## Next Steps\n- Finish coding the custom CSS scrollbars.\n- Polish file explorer tree toggle.\n- Verify file modification date comparison logic.`
      },
      {
        name: "Budget_Forecast.xlsx",
        path: "/My Drive/Project Alpha/Budget_Forecast.xlsx",
        type: "document",
        size: 1850000,
        lastModified: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
        content: "[Spreadsheet Document] Columns: Month, Development Expenses, Infrastructure Cost, Marketing Budget, Contingency Funds."
      },
      {
        name: "Ideas.txt",
        path: "/My Drive/Personal/Ideas.txt",
        type: "document",
        size: 980,
        lastModified: new Date(Date.now() - 150 * 24 * 60 * 60 * 1000),
        content: "Idea 1: A browser extension that indexes currently open tabs.\nIdea 2: A light-weight RAG server that runs completely inside a Web Worker.\nIdea 3: Gift ideas for parents' anniversary.\nIdea 4: Travel plans to Tokyo (Spring 2027)."
      },
      {
        name: "Profile_Avatar.png",
        path: "/My Drive/Personal/Profile_Avatar.png",
        type: "image",
        size: 154000,
        lastModified: new Date(Date.now() - 25 * 24 * 60 * 60 * 1000),
        content: null
      }
    ]
  },
  dropbox: {
    name: "Dropbox Home",
    rootPath: "/Dropbox Home",
    files: [
      {
        name: "index.html",
        path: "/Dropbox Home/Web App/index.html",
        type: "code",
        size: 3200,
        lastModified: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
        content: `<!DOCTYPE html>\n<html>\n<head>\n  <title>iRAG Client</title>\n</head>\n<body>\n  <div id="app"></div>\n  <script src="app.js"></script>\n</body>\n</html>`
      },
      {
        name: "style.css",
        path: "/Dropbox Home/Web App/style.css",
        type: "code",
        size: 5600,
        lastModified: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
        content: `body {\n  margin: 0;\n  background-color: #0b0f19;\n  color: #fff;\n}\n\n.search-input {\n  border: 1px solid var(--accent);\n}`
      },
      {
        name: "app.js",
        path: "/Dropbox Home/Web App/app.js",
        type: "code",
        size: 9400,
        lastModified: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
        content: `const app = document.getElementById('app');\nconsole.log('App initialized');\nfunction searchFiles(query) {\n  return files.filter(f => f.name.includes(query));\n}`
      },
      {
        name: "Wireframes.pdf",
        path: "/Dropbox Home/Design/Wireframes.pdf",
        type: "document",
        size: 8900000,
        lastModified: new Date(Date.now() - 45 * 24 * 60 * 60 * 1000),
        content: "[Design Spec] Contains high-fidelity wireframes for the landing dashboard, oauth connector panels, search interfaces, and layout components."
      },
      {
        name: "Invoice_2026_06.txt",
        path: "/Dropbox Home/Receipts/Invoice_2026_06.txt",
        type: "document",
        size: 450,
        lastModified: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000),
        content: "INVOICE #INV-2026-06\nDate: 2026-06-15\nTo: iRAG Technologies LLC\nFrom: Cloud Hosting Systems Inc.\nDescription: Server instance cluster host charges\nTotal Due: $450.00\nPayment Status: Paid (Autopay)"
      }
    ]
  },
  icloud: {
    name: "iCloud Drive",
    rootPath: "/iCloud Drive",
    files: [
      {
        name: "Todo_Notes.md",
        path: "/iCloud Drive/Desktop/Todo_Notes.md",
        type: "document",
        size: 1500,
        lastModified: new Date(Date.now() - 4 * 60 * 60 * 1000), // 4 hours ago
        content: `# iCloud Sync Tasks\n\n- [x] Create core HTML structure\n- [x] Finalize beautiful glassmorphism theme stylesheet\n- [ ] Wire up real indexer for Local Directory\n- [ ] Create OAuth flow for simulated GDrive & Dropbox\n- [ ] Implement search highlight mechanism for file content\n\n## Shopping List\n- Almond Milk\n- Organic coffee beans (espresso roast)\n- Avocados`
      },
      {
        name: "Resume_2026.pdf",
        path: "/iCloud Drive/Documents/Resume_2026.pdf",
        type: "document",
        size: 245000,
        lastModified: new Date(Date.now() - 60 * 24 * 60 * 60 * 1000),
        content: "John Doe Resume. Experience: Lead Systems Engineer at iRAG Devs. Skills: Python, Javascript, CSS, Rust, Database search index structures, RAG pipelines."
      },
      {
        name: "Presentation.key",
        path: "/iCloud Drive/Documents/Presentation.key",
        type: "document",
        size: 16200000,
        lastModified: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000),
        content: "[Keynote Presentation] Cloud storage indexing services architecture pitch. Highlights: real-time local folder reading, search optimization, secure sandbox environments."
      },
      {
        name: "Vacation_Fiji.jpg",
        path: "/iCloud Drive/Photos/Vacation_Fiji.jpg",
        type: "image",
        size: 4700000,
        lastModified: new Date(Date.now() - 200 * 24 * 60 * 60 * 1000),
        content: null
      }
    ]
  }
};

// Global App State
let activeSource = null; // 'local', 'gdrive', 'dropbox', 'icloud'
let indexedFiles = [];   // Flatted list of all indexed files
let currentPath = [];    // Path segments browser navigation (e.g. ['My Drive', 'Company Reports'])
let searchMode = 'filename'; // 'filename' or 'content'
let explorerViewType = 'grid'; // 'grid' or 'list'
let activeImageURL = null; // Holds local blob URL for revoking
let isScanning = false;

// Cloud connection config
const cloudConnectionState = {
  gdrive: { connected: false, selectedFolder: null },
  dropbox: { connected: false, selectedFolder: null },
  icloud: { connected: false, selectedFolder: null }
};

// Constants
const MAX_LOCAL_FILES = 1000;

// Elements cache
const btnLocalSource = document.getElementById('btn-local-source');
const btnGdriveSource = document.getElementById('btn-gdrive-source');
const btnDropboxSource = document.getElementById('btn-dropbox-source');
const btnIcloudSource = document.getElementById('btn-icloud-source');

const statusLocal = document.getElementById('status-local');
const statusGdrive = document.getElementById('status-gdrive');
const statusDropbox = document.getElementById('status-dropbox');
const statusIcloud = document.getElementById('status-icloud');

const indexerStatsPanel = document.getElementById('indexer-stats-panel');
const statFileCount = document.getElementById('stat-file-count');
const statStatus = document.getElementById('stat-status');
const selectedPathDisplay = document.getElementById('selected-path-display');
const btnReindex = document.getElementById('btn-reindex');

const searchInput = document.getElementById('search-input');
const btnClearSearch = document.getElementById('btn-clear-search');
const btnModeFilename = document.getElementById('btn-mode-filename');
const btnModeContent = document.getElementById('btn-mode-content');

const filterType = document.getElementById('filter-type');
const filterDate = document.getElementById('filter-date');
const filterSize = document.getElementById('filter-size');
const activeSourceIndicator = document.getElementById('active-source-indicator');

const panelWelcome = document.getElementById('panel-welcome');
const panelIndexing = document.getElementById('panel-indexing');
const panelExplorer = document.getElementById('panel-explorer');
const panelResults = document.getElementById('panel-results');

const indexingTitle = document.getElementById('indexing-title');
const indexingProgressText = document.getElementById('indexing-progress');
const indexingBarFill = document.getElementById('indexing-bar-fill');
const indexingPercent = document.getElementById('indexing-percent');

const explorerBreadcrumbs = document.getElementById('explorer-breadcrumbs');
const fileBrowserGrid = document.getElementById('file-browser-grid');
const explorerGridContainer = document.getElementById('explorer-grid-container');

const btnViewGrid = document.getElementById('btn-view-grid');
const btnViewList = document.getElementById('btn-view-list');

const searchResultsList = document.getElementById('search-results-list');
const resultsCountText = document.getElementById('results-count-text');

// Modals
const cloudAuthModal = document.getElementById('cloud-auth-modal');
const modalAuthTitle = document.getElementById('modal-auth-title');
const modalAuthDescription = document.getElementById('modal-auth-description');
const modalProviderLogo = document.getElementById('modal-provider-logo');
const authFolderSelect = document.getElementById('auth-folder');
const btnStartAuth = document.getElementById('btn-start-auth');
const btnCancelAuth = document.getElementById('btn-cancel-auth');
const btnCloseModal = document.getElementById('btn-close-modal');

// Preview Modal
const filePreviewModal = document.getElementById('file-preview-modal');
const previewFileName = document.getElementById('preview-file-name');
const previewFilePath = document.getElementById('preview-file-path');
const previewMetaSize = document.getElementById('preview-meta-size');
const previewMetaType = document.getElementById('preview-meta-type');
const previewMetaDate = document.getElementById('preview-meta-date');
const previewTextBlock = document.getElementById('preview-text-block');
const previewCodeBlock = document.getElementById('preview-code-block');
const previewImageBlock = document.getElementById('preview-image-block');
const previewImageElement = document.getElementById('preview-image-element');
const previewFallbackBlock = document.getElementById('preview-fallback-block');
const btnClosePreview = document.getElementById('btn-close-preview');
const btnClosePreviewFooter = document.getElementById('btn-close-preview-footer');
const btnDownloadFile = document.getElementById('btn-download-file');

// SVG Logo Icons for OAuth Modal
const SVG_ICONS = {
  gdrive: `<svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" fill="currentColor"/></svg>`,
  dropbox: `<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>`,
  icloud: `<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a5 5 0 0 0-5 5v1a4 4 0 0 0-4 4 4 4 0 0 0 4 4h10a4 4 0 0 0 4-4 4 4 0 0 0-4-4V7a5 5 0 0 0-5-5z"></path></svg>`
};

// Start Setup / Event Listeners
function init() {
  // Source card selection
  btnLocalSource.addEventListener('click', () => handleSourceClick('local'));
  btnGdriveSource.addEventListener('click', () => handleSourceClick('gdrive'));
  btnDropboxSource.addEventListener('click', () => handleSourceClick('dropbox'));
  btnIcloudSource.addEventListener('click', () => handleSourceClick('icloud'));

  // Welcome panel buttons
  document.getElementById('btn-connect-local').addEventListener('click', () => handleSourceClick('local'));
  document.getElementById('btn-connect-gdrive').addEventListener('click', () => handleSourceClick('gdrive'));
  document.getElementById('btn-connect-dropbox').addEventListener('click', () => handleSourceClick('dropbox'));
  document.getElementById('btn-connect-icloud').addEventListener('click', () => handleSourceClick('icloud'));

  // Search logic
  searchInput.addEventListener('input', debounce(handleSearch, 150));
  btnClearSearch.addEventListener('click', clearSearch);
  
  // Search Mode toggles
  btnModeFilename.addEventListener('click', () => setSearchMode('filename'));
  btnModeContent.addEventListener('click', () => setSearchMode('content'));

  // Filter selects
  filterType.addEventListener('change', handleSearch);
  filterDate.addEventListener('change', handleSearch);
  filterSize.addEventListener('change', handleSearch);

  // View toggle
  btnViewGrid.addEventListener('click', () => setExplorerView('grid'));
  btnViewList.addEventListener('click', () => setExplorerView('list'));

  // Reindex button
  btnReindex.addEventListener('click', reindexSource);

  // Auth Modal Buttons
  btnCancelAuth.addEventListener('click', hideAuthModal);
  btnCloseModal.addEventListener('click', hideAuthModal);
  btnStartAuth.addEventListener('click', processOAuthConnection);

  // Preview Modal Buttons
  btnClosePreview.addEventListener('click', hidePreviewModal);
  btnClosePreviewFooter.addEventListener('click', hidePreviewModal);

  // Keyboard accessibility
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      hideAuthModal();
      hidePreviewModal();
    }
  });
}

// Handle Source Card clicks
function handleSourceClick(source) {
  if (isScanning) return;

  if (source === 'local') {
    selectLocalDirectory();
  } else {
    // Cloud connection
    if (cloudConnectionState[source].connected) {
      // Already connected, activate it
      activateSource(source, MOCK_FILES[source].files, [MOCK_FILES[source].name]);
    } else {
      // Open login oauth flow modal
      showAuthModal(source);
    }
  }
}

// Show Panel helper
function showPanel(panelId) {
  panelWelcome.style.display = 'none';
  panelIndexing.style.display = 'none';
  panelExplorer.style.display = 'none';
  panelResults.style.display = 'none';

  document.getElementById(panelId).style.display = 'block';
}

// Update Indexing Screen
function updateIndexingProgress(text, percent) {
  indexingProgressText.textContent = text;
  indexingBarFill.style.width = `${percent}%`;
  indexingPercent.textContent = `${percent}%`;
}

// Update Sidebar Source Card Indicators
function updateSourceCards() {
  const cards = [btnLocalSource, btnGdriveSource, btnDropboxSource, btnIcloudSource];
  cards.forEach(card => card.classList.remove('active'));

  if (activeSource === 'local') {
    btnLocalSource.classList.add('active');
  } else if (activeSource === 'gdrive') {
    btnGdriveSource.classList.add('active');
  } else if (activeSource === 'dropbox') {
    btnDropboxSource.classList.add('active');
  } else if (activeSource === 'icloud') {
    btnIcloudSource.classList.add('active');
  }

  // Update Status Text
  statusGdrive.textContent = cloudConnectionState.gdrive.connected ? "Connected" : "Not connected";
  statusDropbox.textContent = cloudConnectionState.dropbox.connected ? "Connected" : "Not connected";
  statusIcloud.textContent = cloudConnectionState.icloud.connected ? "Connected" : "Not connected";
}

// Activate selected source
function activateSource(source, files, pathArray) {
  activeSource = source;
  indexedFiles = files;
  currentPath = [...pathArray];
  
  updateSourceCards();
  
  // Show active indicator badge
  activeSourceIndicator.style.display = 'inline-flex';
  activeSourceIndicator.querySelector('span').textContent = getSourceDisplayName(source);
  
  // Enable search bar
  searchInput.disabled = false;
  searchInput.placeholder = `Search files in ${getSourceDisplayName(source)}...`;
  
  // Show stats panel
  indexerStatsPanel.style.display = 'flex';
  statFileCount.textContent = indexedFiles.length;
  selectedPathDisplay.textContent = files.length > 0 ? getFolderPathDisplayString() : 'Empty Folder';
  selectedPathDisplay.title = selectedPathDisplay.textContent;
  
  if (source === 'local') {
    btnReindex.style.display = 'inline-flex';
  } else {
    btnReindex.style.display = 'none';
  }
  
  // Render
  if (searchInput.value.trim() === '') {
    showPanel('panel-explorer');
    renderExplorer();
  } else {
    handleSearch();
  }
}

function getSourceDisplayName(source) {
  if (source === 'local') return 'Local Folder';
  if (source === 'gdrive') return 'Google Drive';
  if (source === 'dropbox') return 'Dropbox';
  if (source === 'icloud') return 'iCloud Drive';
  return '';
}

function getFolderPathDisplayString() {
  if (activeSource === 'local') {
    return currentPath.join('/');
  }
  return '/' + currentPath.join('/');
}

// Universal file text extractor for Indexing and On-demand Preview
async function extractTextFromFile(file, ext) {
  const textExtensions = ['txt', 'md', 'json', 'js', 'ts', 'py', 'html', 'css', 'csv', 'yaml', 'yml', 'xml', 'ini', 'sh', 'bat'];
  
  if (textExtensions.includes(ext)) {
    if (file.size < 500 * 1024) { // 500KB limit for text during indexing
      try {
        return await file.text();
      } catch (err) {
        console.warn(`Text parsing failed for ${file.name}:`, err);
      }
    }
  } else if (ext === 'pdf') {
    if (file.size < 5 * 1024 * 1024) { // 5MB limit for PDF
      try {
        const arrayBuffer = await file.arrayBuffer();
        const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
        let text = '';
        const maxPages = Math.min(pdf.numPages, 15); // Limit pages to index
        for (let i = 1; i <= maxPages; i++) {
          const page = await pdf.getPage(i);
          const content = await page.getTextContent();
          const strings = content.items.map(item => item.str);
          text += strings.join(' ') + '\n';
        }
        return text;
      } catch (err) {
        console.warn(`PDF parsing failed for ${file.name}:`, err);
      }
    }
  } else if (ext === 'docx') {
    if (file.size < 5 * 1024 * 1024) { // 5MB limit for Word doc
      try {
        const arrayBuffer = await file.arrayBuffer();
        const result = await mammoth.extractRawText({ arrayBuffer: arrayBuffer });
        return result.value;
      } catch (err) {
        console.warn(`DOCX parsing failed for ${file.name}:`, err);
      }
    }
  } else if (ext === 'xlsx') {
    if (file.size < 5 * 1024 * 1024) { // 5MB limit for Excel spreadsheet
      try {
        const arrayBuffer = await file.arrayBuffer();
        const workbook = XLSX.read(arrayBuffer, { type: 'array' });
        let text = '';
        const maxSheets = Math.min(workbook.SheetNames.length, 3);
        for (let i = 0; i < maxSheets; i++) {
          const sheetName = workbook.SheetNames[i];
          const worksheet = workbook.Sheets[sheetName];
          text += XLSX.utils.sheet_to_txt(worksheet) + '\n';
        }
        return text;
      } catch (err) {
        console.warn(`XLSX parsing failed for ${file.name}:`, err);
      }
    }
  }
  return null;
}

// Indexing Local Directory via File System Access API
async function selectLocalDirectory() {
  // Check browser support
  if (!window.showDirectoryPicker) {
    // Show user fallback dialog message
    alert("Your browser does not support the File System Access API directly. We will trigger the directory folder selector upload fallback.");
    selectLocalDirectoryFallback();
    return;
  }

  try {
    const dirHandle = await window.showDirectoryPicker({
      mode: 'read'
    });
    
    isScanning = true;
    showPanel('panel-indexing');
    indexingTitle.textContent = "Indexing Local Directory";
    updateIndexingProgress("Initializing index directory...", 0);
    
    // Scan files recursively
    const files = [];
    let fileCount = 0;
    
    async function scan(handle, currentRelPath = '') {
      if (fileCount >= MAX_LOCAL_FILES) return;
      
      for await (const entry of handle.values()) {
        if (fileCount >= MAX_LOCAL_FILES) break;
        
        const path = currentRelPath ? `${currentRelPath}/${entry.name}` : entry.name;
        
        if (entry.kind === 'directory') {
          await scan(entry, path);
        } else if (entry.kind === 'file') {
          fileCount++;
          const file = await entry.getFile();
          const ext = entry.name.split('.').pop().toLowerCase();
          
          // Index content using helper
          const content = await extractTextFromFile(file, ext);
          
          files.push({
            name: entry.name,
            path: path,
            type: getFileTypeCategory(ext),
            size: file.size,
            lastModified: new Date(file.lastModified),
            content: content,
            handle: entry // Cache file handle for on-demand previewing
          });
          
          // Update progress bar
          if (fileCount % 5 === 0) {
            const percent = Math.min(100, Math.round((fileCount / 200) * 100)); // Est target 200
            updateIndexingProgress(`Reading metadata for ${entry.name}`, percent);
          }
        }
      }
    }
    
    await scan(dirHandle, dirHandle.name);
    
    isScanning = false;
    // Activate
    activateSource('local', files, [dirHandle.name]);
    
  } catch (err) {
    isScanning = false;
    console.error("Local directory indexing failed:", err);
    if (err.name !== 'AbortError') {
      alert("Permission denied or error reading directory: " + err.message);
    }
    if (activeSource === null) {
      showPanel('panel-welcome');
    }
  }
}

// Fallback Folder Picker using File Upload webkitdirectory
function selectLocalDirectoryFallback() {
  const input = document.createElement('input');
  input.type = 'file';
  input.webkitdirectory = true;
  input.directory = true;
  input.style.display = 'none';

  input.addEventListener('change', async (e) => {
    const rawFiles = Array.from(e.target.files);
    if (rawFiles.length === 0) return;

    isScanning = true;
    showPanel('panel-indexing');
    indexingTitle.textContent = "Uploading & Indexing Local Folder";
    updateIndexingProgress("Processing directory...", 0);

    const files = [];
    const total = Math.min(rawFiles.length, MAX_LOCAL_FILES);
    let rootDirName = 'Local Folder';
    
    if (rawFiles[0].webkitRelativePath) {
      rootDirName = rawFiles[0].webkitRelativePath.split('/')[0];
    }

    for (let i = 0; i < total; i++) {
      const file = rawFiles[i];
      const relativePath = file.webkitRelativePath || file.name;
      const ext = file.name.split('.').pop().toLowerCase();

      // Extract content using helper
      const content = await extractTextFromFile(file, ext);

      files.push({
        name: file.name,
        path: relativePath,
        type: getFileTypeCategory(ext),
        size: file.size,
        lastModified: new Date(file.lastModified),
        content: content,
        fileObject: file // Cache file object to preview on-demand
      });

      if (i % 10 === 0) {
        const percent = Math.min(100, Math.round((i / total) * 100));
        updateIndexingProgress(`Indexing ${file.name}`, percent);
      }
    }

    isScanning = false;
    activateSource('local', files, [rootDirName]);
  });

  document.body.appendChild(input);
  input.click();
  document.body.removeChild(input);
}

// Reindex the current source
function reindexSource() {
  if (activeSource === 'local') {
    selectLocalDirectory();
  }
}

// File Category Mapping
function getFileTypeCategory(ext) {
  const docExts = ['pdf', 'doc', 'docx', 'txt', 'rtf', 'odt', 'md', 'epub', 'xlsx', 'xls', 'csv'];
  const codeExts = ['js', 'ts', 'py', 'java', 'cpp', 'h', 'html', 'css', 'json', 'yaml', 'yml', 'xml', 'sh', 'bat', 'go', 'rs', 'php', 'rb'];
  const imgExts = ['png', 'jpg', 'jpeg', 'svg', 'gif', 'webp', 'bmp', 'ico'];
  const archiveExts = ['zip', 'tar', 'gz', 'rar', '7z', 'bz2'];

  if (docExts.includes(ext)) return 'document';
  if (codeExts.includes(ext)) return 'code';
  if (imgExts.includes(ext)) return 'image';
  if (archiveExts.includes(ext)) return 'archive';
  return 'other';
}

// Simulated Cloud Authorization Modal Controls
let currentConnectingSource = null;

function showAuthModal(source) {
  currentConnectingSource = source;
  
  modalAuthTitle.textContent = `Connect to ${getSourceDisplayName(source)}`;
  modalAuthDescription.textContent = `iRAG requires read access to index files and build search indexes for ${getSourceDisplayName(source)}.`;
  
  // Set provider logo colors
  modalProviderLogo.className = `auth-provider-logo ${source}`;
  modalProviderLogo.innerHTML = SVG_ICONS[source];

  // Set auth folders based on provider
  authFolderSelect.innerHTML = '';
  if (source === 'gdrive') {
    const folders = ['/My Drive', '/My Drive/Company Reports', '/My Drive/Project Alpha', '/My Drive/Personal'];
    folders.forEach(f => {
      const opt = document.createElement('option');
      opt.value = f;
      opt.textContent = f;
      authFolderSelect.appendChild(opt);
    });
  } else if (source === 'dropbox') {
    const folders = ['/Dropbox Home', '/Dropbox Home/Web App', '/Dropbox Home/Design', '/Dropbox Home/Receipts'];
    folders.forEach(f => {
      const opt = document.createElement('option');
      opt.value = f;
      opt.textContent = f;
      authFolderSelect.appendChild(opt);
    });
  } else if (source === 'icloud') {
    const folders = ['/iCloud Drive', '/iCloud Drive/Desktop', '/iCloud Drive/Documents', '/iCloud Drive/Photos'];
    folders.forEach(f => {
      const opt = document.createElement('option');
      opt.value = f;
      opt.textContent = f;
      authFolderSelect.appendChild(opt);
    });
  }

  // Reset steps style
  document.getElementById('auth-step-1').className = 'step-row active';
  document.getElementById('auth-step-2').className = 'step-row';
  document.getElementById('auth-step-3').className = 'step-row';
  
  btnStartAuth.disabled = false;
  btnStartAuth.textContent = "Authenticate & Sync";

  cloudAuthModal.style.display = 'flex';
}

function hideAuthModal() {
  cloudAuthModal.style.display = 'none';
  currentConnectingSource = null;
}

// Connect & Scan Simulated Cloud Files
function processOAuthConnection() {
  const source = currentConnectingSource;
  if (!source) return;

  btnStartAuth.disabled = true;
  btnStartAuth.textContent = "Connecting...";

  // Step 1: Session connection simulation
  setTimeout(() => {
    document.getElementById('auth-step-1').className = 'step-row completed';
    document.getElementById('auth-step-2').className = 'step-row active';
    
    // Step 2: Grant permissions
    setTimeout(() => {
      document.getElementById('auth-step-2').className = 'step-row completed';
      document.getElementById('auth-step-3').className = 'step-row active';
      
      // Step 3: Trigger full indexing view sync
      setTimeout(() => {
        document.getElementById('auth-step-3').className = 'step-row completed';
        
        // Hide Modal & Open Indexing
        hideAuthModal();
        triggerCloudIndexing(source);
        
      }, 1000);
    }, 1000);
  }, 1000);
}

function triggerCloudIndexing(source) {
  isScanning = true;
  showPanel('panel-indexing');
  indexingTitle.textContent = `Syncing files from ${getSourceDisplayName(source)}`;
  updateIndexingProgress("Initializing OAuth download sync...", 0);

  const selectedDir = authFolderSelect.value;
  const allSourceFiles = MOCK_FILES[source].files;
  
  // Filter mock files to only include files that belong in the selected subfolder (simulate directory boundaries)
  const connectedFiles = allSourceFiles.filter(f => f.path.startsWith(selectedDir));
  
  let i = 0;
  function syncNextFile() {
    if (i < connectedFiles.length) {
      const file = connectedFiles[i];
      const percent = Math.round(((i + 1) / connectedFiles.length) * 100);
      updateIndexingProgress(`Downloading & indexing: ${file.name}`, percent);
      i++;
      setTimeout(syncNextFile, 250);
    } else {
      isScanning = false;
      // Complete connection status
      cloudConnectionState[source].connected = true;
      cloudConnectionState[source].selectedFolder = selectedDir;
      
      // Reconstruct navigation path arrays
      const pathArray = selectedDir.split('/').filter(p => p !== '');
      
      activateSource(source, connectedFiles, pathArray);
    }
  }

  setTimeout(syncNextFile, 500);
}

// Debounce helper
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Search mode setting
function setSearchMode(mode) {
  searchMode = mode;
  if (mode === 'filename') {
    btnModeFilename.classList.add('active');
    btnModeContent.classList.remove('active');
  } else {
    btnModeFilename.classList.remove('active');
    btnModeContent.classList.add('active');
  }
  handleSearch();
}

// View toggle config
function setExplorerView(viewType) {
  explorerViewType = viewType;
  if (viewType === 'grid') {
    btnViewGrid.classList.add('active');
    btnViewList.classList.remove('active');
    fileBrowserGrid.className = 'file-grid';
  } else {
    btnViewGrid.classList.remove('active');
    btnViewList.classList.add('active');
    fileBrowserGrid.className = 'file-list';
  }
  renderExplorer();
}

// Search Logic
function handleSearch() {
  const query = searchInput.value.trim().toLowerCase();
  
  if (query === '') {
    btnClearSearch.style.display = 'none';
    if (activeSource) {
      showPanel('panel-explorer');
      renderExplorer();
    } else {
      showPanel('panel-welcome');
    }
    return;
  }

  btnClearSearch.style.display = 'block';
  showPanel('panel-results');

  const filterTypeValue = filterType.value;
  const filterDateValue = filterDate.value;
  const filterSizeValue = filterSize.value;

  const results = indexedFiles.filter(file => {
    // 1. Filter Type
    if (filterTypeValue !== 'all' && file.type !== filterTypeValue) {
      return false;
    }

    // 2. Filter Size
    if (filterSizeValue !== 'any') {
      const sizeKB = file.size / 1024;
      if (filterSizeValue === 'small' && sizeKB >= 1024) return false; // > 1MB
      if (filterSizeValue === 'medium' && (sizeKB < 1024 || sizeKB > 10240)) return false; // 1-10MB
      if (filterSizeValue === 'large' && sizeKB <= 10240) return false; // < 10MB
    }

    // 3. Filter Date
    if (filterDateValue !== 'any') {
      const diffMs = Date.now() - file.lastModified.getTime();
      const diffDays = diffMs / (1000 * 60 * 60 * 24);
      if (filterDateValue === 'day' && diffDays > 1) return false;
      if (filterDateValue === 'week' && diffDays > 7) return false;
      if (filterDateValue === 'month' && diffDays > 30) return false;
      if (filterDateValue === 'year' && diffDays > 365) return false;
    }

    // 4. Keyword Query Match
    if (searchMode === 'filename') {
      return file.name.toLowerCase().includes(query) || file.path.toLowerCase().includes(query);
    } else {
      // Content search
      return file.content && file.content.toLowerCase().includes(query);
    }
  });

  renderSearchResults(results, query);
}

function clearSearch() {
  searchInput.value = '';
  handleSearch();
  searchInput.focus();
}

// Render Search Results
function renderSearchResults(results, query) {
  searchResultsList.innerHTML = '';
  resultsCountText.textContent = `Found ${results.length} match${results.length === 1 ? '' : 'es'}`;

  if (results.length === 0) {
    searchResultsList.innerHTML = `
      <div class="preview-fallback">
        <h3>No Files Found</h3>
        <p>No files match your query or filters. Try adjusting your search term or selection.</p>
      </div>
    `;
    return;
  }

  results.forEach(file => {
    const card = document.createElement('div');
    card.className = 'result-card';
    card.addEventListener('click', () => showFilePreview(file));

    // File info row
    const sizeStr = formatFileSize(file.size);
    const dateStr = formatDate(file.lastModified);
    
    let iconSvg = getFileIconSvg(file.type);

    let snippetHtml = '';
    if (searchMode === 'content' && file.content) {
      const contentLower = file.content.toLowerCase();
      const matchIndex = contentLower.indexOf(query);
      if (matchIndex !== -1) {
        const start = Math.max(0, matchIndex - 60);
        const end = Math.min(file.content.length, matchIndex + query.length + 60);
        let snippet = file.content.substring(start, end);
        
        // Escape HTML
        snippet = snippet
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;");
          
        // Highlight query matches (case-insensitive highlight)
        const escapedQuery = query.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
        const reg = new RegExp(`(${escapedQuery})`, 'gi');
        snippet = snippet.replace(reg, '<mark>$1</mark>');

        snippetHtml = `
          <div class="result-snippet">
            ... ${snippet} ...
          </div>
        `;
      }
    }

    card.innerHTML = `
      <div class="result-header-row">
        <div class="result-file-icon">
          ${iconSvg}
        </div>
        <div class="result-title-group">
          <div class="result-name" title="${file.name}">${file.name}</div>
          <div class="result-path" title="${file.path}">${file.path}</div>
        </div>
        <div class="result-meta-group">
          <div class="result-size">${sizeStr}</div>
          <div class="result-date">${dateStr}</div>
        </div>
      </div>
      ${snippetHtml}
    `;

    searchResultsList.appendChild(card);
  });
}

// Directory Explorer Navigation & Render
function renderExplorer() {
  // 1. Breadcrumbs
  explorerBreadcrumbs.innerHTML = '';
  
  // Back to root crumb
  const rootCrumb = document.createElement('span');
  rootCrumb.className = 'crumb root';
  rootCrumb.textContent = currentPath[0] || 'Root';
  rootCrumb.addEventListener('click', () => {
    currentPath = [currentPath[0]];
    renderExplorer();
  });
  explorerBreadcrumbs.appendChild(rootCrumb);

  // Subsequent crumbs
  for (let i = 1; i < currentPath.length; i++) {
    const segment = currentPath[i];
    const crumb = document.createElement('span');
    crumb.className = 'crumb';
    crumb.textContent = segment;
    
    // Add closure click
    const targetPathDepth = currentPath.slice(0, i + 1);
    crumb.addEventListener('click', () => {
      currentPath = targetPathDepth;
      renderExplorer();
    });
    explorerBreadcrumbs.appendChild(crumb);
  }

  // 2. Identify Files/Folders in Current Directory
  // Construct current path string: e.g. "My Drive/Company Reports"
  const currentPathString = currentPath.join('/');

  const items = [];
  const foldersSeen = new Set();

  indexedFiles.forEach(file => {
    // Check if file is in current directory or a subfolder of it
    if (file.path.startsWith(currentPathString)) {
      // Find the segment immediately following currentPathString
      const relativePart = file.path.substring(currentPathString.length);
      const cleanPart = relativePart.startsWith('/') ? relativePart.substring(1) : relativePart;
      
      if (cleanPart === '') return; // Reached the current directory base path itself

      const parts = cleanPart.split('/');
      
      if (parts.length > 1) {
        // It's in a subfolder. The subfolder name is parts[0]
        const folderName = parts[0];
        if (!foldersSeen.has(folderName)) {
          foldersSeen.add(folderName);
          items.push({
            name: folderName,
            isFolder: true,
            path: currentPathString ? `${currentPathString}/${folderName}` : folderName
          });
        }
      } else {
        // It's a file in this folder
        items.push({
          name: file.name,
          isFolder: false,
          fileData: file
        });
      }
    }
  });

  // Sort folders first, then files alphabetically
  items.sort((a, b) => {
    if (a.isFolder && !b.isFolder) return -1;
    if (!a.isFolder && b.isFolder) return 1;
    return a.name.localeCompare(b.name);
  });

  // 3. Render files list/grid
  fileBrowserGrid.innerHTML = '';

  if (items.length === 0) {
    fileBrowserGrid.innerHTML = `
      <div class="preview-fallback w-full">
        <h3>Empty Folder</h3>
        <p>This directory has no files or subfolders.</p>
      </div>
    `;
    return;
  }

  items.forEach(item => {
    const card = document.createElement('div');
    card.className = `explorer-item ${item.isFolder ? 'folder' : 'file'}`;
    
    if (item.isFolder) {
      card.addEventListener('click', () => {
        currentPath.push(item.name);
        renderExplorer();
      });
    } else {
      card.addEventListener('click', () => showFilePreview(item.fileData));
    }

    const iconSvg = item.isFolder ? getFolderIconSvg() : getFileIconSvg(item.fileData.type);
    const sizeStr = item.isFolder ? '' : formatFileSize(item.fileData.size);
    const dateStr = item.isFolder ? '' : formatDate(item.fileData.lastModified);

    if (explorerViewType === 'grid') {
      card.innerHTML = `
        <div class="item-icon">
          ${iconSvg}
        </div>
        <div class="item-details">
          <div class="item-name" title="${item.name}">${item.name}</div>
          <div class="item-size">${sizeStr}</div>
        </div>
      `;
    } else {
      // List View layout
      card.innerHTML = `
        <div class="item-icon">
          ${iconSvg}
        </div>
        <div class="item-details">
          <div class="item-name" title="${item.name}">${item.name}</div>
          <div class="item-meta-group">
            <div class="item-size">${sizeStr}</div>
            <div class="item-date">${dateStr}</div>
          </div>
        </div>
      `;
    }

    fileBrowserGrid.appendChild(card);
  });
}

// Show File Preview
async function showFilePreview(file) {
  // Clean last active URLs
  if (activeImageURL) {
    URL.revokeObjectURL(activeImageURL);
    activeImageURL = null;
  }

  previewFileName.textContent = file.name;
  previewFilePath.textContent = file.path;
  previewMetaSize.textContent = formatFileSize(file.size);
  previewMetaType.textContent = file.type.toUpperCase();
  previewMetaDate.textContent = formatDate(file.lastModified);

  previewTextBlock.style.display = 'none';
  previewImageBlock.style.display = 'none';
  previewFallbackBlock.style.display = 'none';
  btnDownloadFile.style.display = 'none';

  // Fetch actual local file handle contents if content wasn't cached
  let contentText = file.content;
  
  if (activeSource === 'local' && contentText === null) {
    const ext = file.name.split('.').pop().toLowerCase();
    try {
      const fileObj = file.handle ? await file.handle.getFile() : file.fileObject;
      if (fileObj) {
        contentText = await extractTextFromFile(fileObj, ext);
      }
    } catch (err) {
      console.error("Could not fetch file content on demand:", err);
    }
  }

  // Display based on Type
  if (file.type === 'image') {
    if (activeSource === 'local' && file.handle) {
      try {
        const fileObj = await file.handle.getFile();
        activeImageURL = URL.createObjectURL(fileObj);
        previewImageElement.src = activeImageURL;
        previewImageBlock.style.display = 'flex';
      } catch (err) {
        console.error("Could not render local image preview:", err);
        previewFallbackBlock.style.display = 'flex';
      }
    } else if (activeSource === 'local' && file.fileObject) {
      activeImageURL = URL.createObjectURL(file.fileObject);
      previewImageElement.src = activeImageURL;
      previewImageBlock.style.display = 'flex';
    } else {
      // Mock Cloud image preview
      previewImageElement.src = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="250" viewBox="0 0 400 250"><rect width="100%" height="100%" fill="%231e293b"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="14" fill="%2394a3b8">Cloud Image Preview: ${file.name}</text></svg>`;
      previewImageBlock.style.display = 'flex';
    }
  } else if (contentText !== null) {
    // Populate code block text
    previewCodeBlock.textContent = contentText;
    previewTextBlock.style.display = 'block';
  } else {
    // Unsupported or binaries without preview
    previewFallbackBlock.style.display = 'flex';
    
    // Enable local download helper if actual file exists
    if (activeSource === 'local') {
      btnDownloadFile.style.display = 'inline-flex';
      btnDownloadFile.onclick = async () => {
        const fileObj = file.handle ? await file.handle.getFile() : file.fileObject;
        const link = document.createElement('a');
        link.href = URL.createObjectURL(fileObj);
        link.download = file.name;
        link.click();
        URL.revokeObjectURL(link.href);
      };
    }
  }

  filePreviewModal.style.display = 'flex';
}

function hidePreviewModal() {
  filePreviewModal.style.display = 'none';
  if (activeImageURL) {
    URL.revokeObjectURL(activeImageURL);
    activeImageURL = null;
  }
}

// Icons generators
function getFolderIconSvg() {
  return `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"/></svg>`;
}

function getFileIconSvg(type) {
  if (type === 'document') {
    return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>`;
  } else if (type === 'code') {
    return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`;
  } else if (type === 'image') {
    return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>`;
  } else if (type === 'archive') {
    return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="12" y1="3" x2="12" y2="21"></line><path d="M3 9h18M3 15h18"/></svg>`;
  }
  return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>`;
}

// Formatting helpers
function formatFileSize(bytes) {
  if (bytes === 0 || isNaN(bytes)) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
}

function formatDate(date) {
  if (!date) return '';
  return date.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
}

// Run init
window.addEventListener('DOMContentLoaded', init);
